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
import { Badge, Button, Dropdown, Space } from 'antd';
import Spinner from '@/components/spinner/Spinner';


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


            <button
                className="button button-primary"
                onClick={() => dispatch(cvIdAsync())}
            >prueba de Redux</button>

            {
                isAdmin ?
                    <Tabletodo todos={todos} />
                    : <Spinner />
            }

        </div>
    )
}

export default page
