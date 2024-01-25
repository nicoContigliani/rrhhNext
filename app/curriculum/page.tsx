"use client"
/* eslint-disable react-hooks/rules-of-hooks */

import React, { useEffect, useState } from 'react'
import useAuth from '@/hooks/useAuth';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import styles from './Curriculum.module.css'

import { cvIdAsync, preloadCVData, selectCV } from '@/redux/features/CV/cvSlice';

import { cleanColumns } from '@/services/cleanColumn.services';
import useColumns from '@/hooks/useColumns';
import useScreenSize from '@/hooks/useScreenSize';
import dynamic from 'next/dynamic';
import Tabletodo from '@/components/tableTodo/Tabletodo';
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import type { FilterValue, SorterResult } from 'antd/es/table/interface';
import { Badge, Button, Dropdown, Space, Flex } from 'antd';
import Spinner from '@/components/spinner/Spinner';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import { HdrPlusOutlined, PlusOneOutlined, SettingsOutlined } from '@mui/icons-material';

import Image from 'next/image'
import Iconf from '@/components/images/icons/cv.png'
import Stadistic from '@/components/StadisticCard/Stadistic';
import Stepss from '@/components/steps/Stepss';




const page = () => {

    const dispatch = useAppDispatch();


    const [data, setData] = useState([])
    const { isOpen, isLogins, infoUser, isAdmin, setIsOpen, setIsLogins } = useAuth();
    const { datas, setDatas, dataDeleteColumns, setDataDeleteColumns, dataDimention, setDataDimention, headerColumnsAll, setHeaderColumnsAll, headerColumns, setHeaderColumns, todo, setTodo } = useColumns()
    const { width, height } = useScreenSize()


    const cv: any = useAppSelector(selectCV);
    const cvDatas = cv?.cvDatas;
    const cvOneData = cv?.cvOneData;

    const [cvDataAll, setCvDataAll] = useState([])
    const [cvDataOne, setCVDataOne] = useState([])

    const [conlumnsS, setColumnsS] = useState<any[] | any | undefined>()
    const [showThings, setShowThings] = useState<any[] | any | undefined>(true)



    //preload
    useEffect(() => {
        dispatch(preloadCVData())
    }, [window])

    //change data in usestate
    useEffect(() => {
        // setDataCV(cv)
        setCvDataAll(cvDatas)
        setCVDataOne(cvOneData)
    }, [cv])

    //useEffect for columns and header
    useEffect(() => {
        const cvData: any = cvDataOne.length != 0 ? cvDataOne : (cvDataAll.length != 0 ? cvDataAll : "")

        const BigHeadArray: any[] | undefined | any = ["id", "title", "description_cv", "status_cv", "createdAt", "updatedAt"]
        const SmallHeadArray: any[] | undefined | any = ["id", "title", "description_cv"]
        const HeaderDelete: any[] | undefined | any = ["createdAt", "updatedAt"]
        const win: any | undefined = window




        interface DataType {
            id: {
                first: string | number;
                last: string | number;
            };
            title: {
                first: string | number;
                last: string | number;
            }
            status_cv: {
                first: string | number | boolean;
                last: string | number | boolean;
            }
            action: any


        }

        const todo = async () => {
            setDatas(cvData)
            setDataDeleteColumns(HeaderDelete)
            setDataDimention(win)

            setColumnsS(SmallHeadArray)

            setHeaderColumns(SmallHeadArray)
        }
        todo()

    }, [cvOneData, cvDataAll])

    const [dataAll, setDataAll] = useState()

    const todos: any | object = {
        Header: conlumnsS,
        Columns: datas
    }
    useEffect(() => {
        setDataAll(todos)
    }, [])


    return (
        <div>
            <div className={styles.body}>
                <h1 className={styles.h1}>Curriculum Vitae</h1>
            </div>

            {/* 
            <button
                className="button button-primary"
                onClick={() => dispatch(cvIdAsync())}
            >prueba de Redux</button> */}
            <div className={styles.todo}>
                {/* <div className={styles.card}>

                    <Image
                        src={Iconf} alt={''}
                        width={160}
                        height={150}
                    />
                </div> */}
                {/* <div className={styles.stadistic}>
                    <Stadistic
                        hoverable
                        title="Active"
                        value="50"
                        valueStyle={{ color: '#3f8600' }}
                    />
                    <Stadistic
                        hoverable
                        title="In Process"
                        value="50"
                        valueStyle={{ color: '#3f8600' }}
                    />
                </div> */}
            </div>


            {
                isAdmin ?
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
                showThings ? <Tabletodo todos={todos} /> :
                    <Stepss />
            }



        </div>
    )
}

export default page
