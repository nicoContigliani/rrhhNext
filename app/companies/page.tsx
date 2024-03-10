"use client"

import React, { useEffect, useLayoutEffect, useState } from 'react'
import TabsGeneric from '@/components/GeneralComponents/GeneralTabs/TabsGeneral'
import { Button, type TabsProps } from 'antd';
import styles from './companies.module.css'
import ShowGeneral from '@/components/GeneralComponents/CRUDGeneral/ShowGeneral/ShowGeneral'
import TableGenral from '@/components/GeneralComponents/tableGeneral/TableGenral';
import { hederColumsformater } from '@/services/hederColumsformater.services';
import { useRouter } from 'next/navigation'
import useFetchCrudData from '@/hooks/useFetchCrudData';
import { dataSourcesFormater } from '@/services/dataSourcesFormater.serices';
import { DownOutlined } from '@ant-design/icons';
import type { TableColumnsType } from 'antd';
import { Badge, Dropdown, Space, Table } from 'antd';


export interface FetchCrudData {
    urlGeneral: string | any;
    methods: string;
    body?: any | any[]; // Tipo específico para el cuerpo de la solicitud
    idParams?: string;
}

interface ExpandedDataType {
    key: React.Key;
    date: string;
    name: string;
    upgradeNum: string;
}
const itemsData: any | any[] = [
    { key: '1', label: 'Action 1' },
    { key: '2', label: 'Action 2' },
];

const page = () => {
    const [gridFormatView, setGridFormatView] = useState<any | any[]>(true)
    const [columns, setColumns] = useState<any | any[]>()
    const [dataSource, setDataSource] = useState<any | any[]>()
    const [dataSourceSecondLine, setDataSourceSecondLine] = useState<any[]>([]); // Local state to store fetched data
    const [dataSourceThirdLine, setDataSourceThirdLine] = useState<any[]>([]); // Local state to store fetched data

    const [expandedRowKeysState, setExpandedRowKeysState] = useState<any | any[]>(['0']); // Initial expanded row



    const router = useRouter()

    const todoCRUDGet: FetchCrudData = {
        urlGeneral: "/Company/Company/",
        methods: 'GET',
        body: "",
        idParams: "",
    }

    const { loading, data, message, httpStatus, refetchData } = useFetchCrudData(todoCRUDGet); // Usa el hook personalizado
    useEffect(() => {
        refetchData();
    }, [window])


    //tabs 

    // id
    // company
    // companyPhone
    // companyEmail
    // urlCompany
    // status_company
    // createdAt
    // updatedAt

    const firstLine: any | any[] = [
        "id",
        "company",
        "companyPhone",
        "companyEmail",
        "urlCompany",
        "status_company",
        "createdAt",
        "updatedAt",
    ]
    const secondLine: any | any[] = [
        "Vacancies"
    ]
    const thirdLine: any | any[] = [
        "id",
        "title",
        "description",
        "requirements",
        "responsibilities",
        "location",
        "extra_data",
        "finish_vacancy",
        // "TypeVacancyId",
        "start_vacancy",
        "status_vacancy",
        "status_vacancy_work",
        "createdAt",
        "updatedAt",
    ]

    const fourthLine: any = [
        "Interviews"
    ]
    const fiveLine: any = [
        "InterviewVacance",
        "Interviewees",
    ]


















    //comportamiento
    // muestra compañias -> data  -> infografia ->cantidad de busquedas activas
    //                                          ->puesto de trabajo -> test_status
    //                                          ->Candidatos para esta empresa                                         
    //                                          ->Candidatos compitiendo
    //                                          -> 


    const columnsFirstLine = hederColumsformater(firstLine)
    const dataFirstLine = dataSourcesFormater(data, firstLine)
    const columnsThirdLine= hederColumsformater(thirdLine)
    const dataThirdLine = dataSourcesFormater(dataSourceSecondLine, firstLine)



    useEffect(() => {
        setColumns([
            ...columnsFirstLine,
            { title: 'Action', key: 'operation', render: () => <a>Publish</a> }
        ])
    }, [data])

    useLayoutEffect(() => {
        setDataSource(dataFirstLine)
    }, [data])





    
    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'Show Companies',
            children:
                <ShowGeneral
                    id=""
                    todoCRUD={todoCRUDGet}
                    gridFormatView={gridFormatView}
                    setGridFormatView={setGridFormatView}
                    dataInfo={data}
                    loading={loading}
                    data={data}
                    message={message}
                    httpStatus={httpStatus}
                >
                    <TableGenral
                        columns={columns}
                        dataSource={dataSource}
                        data={data}
                  
                    />

                </ShowGeneral >,
        },
        {
            key: '2',
            label: 'Tab 2',
            children: 'Content of Tab Pane 2',
        },
        {
            key: '3',
            label: 'Tab 3',
            children: 'Toma por mirón 3',
        },
    ];



    return (
        <div className={styles.body}>
            <div className={styles.title}>
                <h3>Companies</h3>
                <div className={styles.buttonsGroupReturn} onClick={() => router.push('/talents')}>
                    <Button className={styles.button} size="small" block >Return</Button>
                </div>

                <TabsGeneric
                    // className={styles.bodyTabs}
                    items={items}
                    defaultActiveKey="1"
                    tabPosition="left"
                // style={{ height: 220 }}
                />


            </div>
        </div>
    )
}

export default page