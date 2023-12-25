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
    console.log("🚀 ~ file: page.tsx:26 ~ page ~ isAdmin:", isAdmin)
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
        const SmallHeadArray: any[] | undefined | any = ["id", "title", "description_cv", "status_cv"]
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
            action:any


        }

        const columnsData: ColumnsType<DataType> = [
            {
                title: 'id',
                dataIndex: 'id',
                sorter: true,
                render: (id) => `${id.first} ${id.last}`,
                width: '10%',
                fixed: 'left',
                ellipsis: true,
                

            },
            {
                title: 'Title',
                dataIndex: 'title',
                sorter: true,
                render: (title) => `${title.first} ${title.last}`,
                width: '20%',
                fixed: 'left',
                ellipsis: true,
            },
            {
                title: 'Status_cv',
                dataIndex: 'status_cv',
                fixed: 'left',
                filters: [
                    { text: 'True', value: true },
                    { text: 'False', value: false },
                ],
                ellipsis: true,
            },
            {
                title: 'Action',
                dataIndex: 'operation',
                key: 'operation',
                render: () => (
                    <Space size="middle">
                        <a>Pause</a>
                        <a>Stop</a>
                    </Space>
                ),
            },
        ];



     



        const expandedRowRender = () => {
            const columns: any[] = [
                { title: 'Date', dataIndex: 'date', key: 'date' },
                { title: 'Name', dataIndex: 'name', key: 'name' },
                {
                    title: 'Status',
                    key: 'state',
                    render: () => <Badge status="success" text="Finished" />,
                },
                { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
                {
                    title: 'Action',
                    dataIndex: 'operation',
                    key: 'operation',
                    render: () => (
                        <Space size="middle">
                            <a>Pause</a>
                            <a>Stop</a>
                        </Space>
                    ),
                },
               
            ];

        }


            const todo = async () => {
                setDatas(cvData)
                setDataDeleteColumns(HeaderDelete)
                setDataDimention(win)

                setColumnsS(columnsData)

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
                    : <Spinner/>
            }

        </div>
    )
}

export default page
