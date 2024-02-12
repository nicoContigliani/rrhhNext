"use client"
/* eslint-disable react-hooks/rules-of-hooks */

import React, { useEffect, useLayoutEffect, useState } from 'react'
import useAuth from '@/hooks/useAuth';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import styles from './Curriculum.module.css'

import { cvIdAsync, preloadCVData, selectCV } from '@/redux/features/CV/cvSlice';

import { cleanColumns } from '@/services/cleanColumn.services';
import useColumns from '@/hooks/useColumns';
import useScreenSize from '@/hooks/useScreenSize';
import dynamic from 'next/dynamic';
import Tabletodo from '@/components/tableTodo/Tabletodo';
import { Badge, Button, Dropdown, Space, Flex } from 'antd';
import Stepss from '@/components/steps/Stepss';
import Inputs from '@/components/inputs/Inputs';
import InputsSertch from '@/components/Inputserch/InputsSertch';




const page = () => {

    const dispatch = useAppDispatch();


    const [data, setData] = useState([])
    console.log("🚀 ~ page ~ data:", data)
    const [dataRows, setDataRows] = useState([])

    const { isOpen, isLogins, infoUser, isAdmin, setIsOpen, setIsLogins, dataPermission } = useAuth();
    const { width, height } = useScreenSize()


    const cv: any = useAppSelector(selectCV);
    const cvDatas = cv?.cvDatas;
    const cvOneData = cv?.cvOneData;

    const [cvDataAll, setCvDataAll] = useState([])
    const [cvDataOne, setCVDataOne] = useState([])

    const [showThings, setShowThings] = useState<any[] | any | undefined>(true)
    const [dataAll, setDataAll] = useState<any>()

    const [dataFilter, setDataFilter] = useState<any[] | undefined>()
    const [dataTable, setDataTable] = useState<any[]>()

    //preload
    useEffect(() => {
        dispatch(preloadCVData())
        const dataR = async () => {
            if (!dataPermission?.admins && dataPermission?.id !== undefined) {
                const todo: any = [await cvDatas?.find((item: any) => item?.id === dataPermission?.id)];
                setCVDataOne(todo)
            }
        }
        dataR()
    }, [window, dispatch])


    useEffect(() => {
        dispatch(preloadCVData())

    }, [window])

    //change data in usestate
    useEffect(() => {
        // setDataCV(cv)
        setCvDataAll(cvDatas)
        setCVDataOne(cvOneData)
    }, [cv])
 
    const SmallHeadArray: any[] | undefined | any = ["id", "title", "description_cv"]
    //useEffect for columns and header
    useEffect(() => {

        if (dataPermission?.admins || isAdmin) {
            const cvData: any = cvDataOne.length != 0 ? cvDataOne : (cvDataAll.length != 0 ? cvDataAll : "")
            const getDataForSend = async () => {
                const todos: any | object = await {
                    Header: SmallHeadArray,
                    Columns: cvData
                }
                await setDataAll(todos)
                dataFilter?.length != 0 && dataFilter != undefined
            }
            getDataForSend()
        }


        if (!dataPermission?.admins && dataPermission?.id !== undefined) {
            const getDataForSend = async () => {
                const todo: any = [await cvDatas?.find((item: any) => item?.id === dataPermission?.id)];
                const todos: any | object = await {
                    Header: SmallHeadArray,
                    Columns: todo
                }
                await setDataAll(todos)
            }
            getDataForSend()
        }

    }, [cvOneData, cvDataAll])

    useEffect(() => {
        const getDataForSend = async () => {
            setDataTable(dataAll)

            if (dataFilter?.length != 0 && dataFilter != undefined) {
                const todos: any | object = await {
                    Header: SmallHeadArray,
                    Columns: dataFilter
                }
                setDataTable(todos)
            }
            if (dataFilter?.length == 0 || dataFilter == undefined) {
                await setDataTable(dataAll)
            }
        }
        console.log("🚀 ~ getDataForSend ~ dataFilter?.length:", dataFilter?.length)
        getDataForSend()

    }, [dataAll, dataFilter])

    return (
        <div>
            <div className={styles.body}>
                <h1 className={styles.h1}>Curriculum Vitae</h1>
            </div>

            {   
                true
                //TODO The problem is permissón and existens,it doesn't isAdmin
                 ?
                    <div>
                        <div className={styles.stadistics}>
                            <Button type="primary" onClick={() => setShowThings(false)} >
                                Create
                            </Button>
                            <Button type="primary" onClick={() => setShowThings(true)}  >
                                Show
                            </Button>
                        </div>
                    </div>
                    : ""
            }
            {
                showThings ?
                    <div>
                        {
                            isAdmin ? <InputsSertch
                                className={styles.textArea}
                                data={data}
                                setData={setData}
                                dataAll={dataAll}
                                dataFilter={dataFilter}
                                setDataFilter={setDataFilter}
                                placeholder="Serch"
                                name="serch"
                                type={''}
                            /> : ""
                        }
                        <Tabletodo
                            todos={dataTable}
                        />
                    </div>
                    :
                    <Stepss />
            }



        </div>
    )
}

export default page
