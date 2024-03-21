"use client"

import React, { ReactNode, useEffect, useLayoutEffect, useState } from 'react'
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
import { ButtonBase } from '@mui/material';
import Modalnew from '@/components/steps/componentSteps/ModalNew/Modalnew';
import ComponentModalTable from '@/components/GeneralComponents/componentModalTable/ComponentModalTable';
import CreateGeneral from '@/components/GeneralComponents/CRUDGeneral/CreateGeneral/CreateGeneral';
import InputsCreateGeneralAll from '@/components/GeneralComponents/InputsCreateGeneralAll/InputsCreateGeneralAll';
import Inputs from '@/components/inputs/Inputs';
import InputsUpdateGeneralAll from '@/components/GeneralComponents/InputsUpdateGeneralAll /InputsUpdateGeneralAll';
import InputsDeleteGeneralAll from '@/components/GeneralComponents/InputsDeleteGeneralAll /InputsDeleteGeneralAll';
import TreeGeneral from '@/components/GeneralComponents/TreeGeneral/TreeGeneral';
import { forEach } from 'lodash';
import { filteredDataObjectPlusArray } from '@/services/fileredDataObjectPlusArray.services';


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
    const [filteredData, setFilteredData] = useState<any | any[] | undefined>()

    const [columnsFirstLine, setColumnsFirstLine] = useState<any | any[]>()
    const [columnsThirdLine, setColumnsThirdLine] = useState<any | any[]>()

    const [Views, setViews] = useState<any | any[]>(false)



    const [recordData, setRecordData] = useState<any | any[]>()
    const [data, setData] = useState<any | any[]>()


    const router = useRouter()



    const todoCRUDGet: FetchCrudData = {
        urlGeneral: "/Company/Company/",
        methods: 'GET',
        body: "",
        idParams: "",
    }



    const { loading, datas, message, httpStatus, refetchData } = useFetchCrudData(todoCRUDGet); // Usa el hook personalizado



    useEffect(() => {
        refetchData();
    }, [window])







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
    const secondLine: any | any[] = "Vacancies"
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
        // "createdAt",
        // "updatedAt",
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



    const handleShowNewData = () => {
        const todoCRUDGet: FetchCrudData = {
            urlGeneral: "/Company/Company/",
            methods: 'GET',
            body: "",
            idParams: "",
        };
    };

    useEffect(() => {
        const columnsFirstLines = hederColumsformater(firstLine)
        const dataFirstLine = dataSourcesFormater(datas, firstLine)
        const columnsThirdLines = hederColumsformater(thirdLine)
        const dataThirdLine = dataSourcesFormater(dataSourceThirdLine, thirdLine)

        setDataSource(dataFirstLine)
        setColumnsFirstLine(columnsFirstLines)
        setColumnsThirdLine(columnsThirdLines)
    }, [datas])



    //create
    const dataCreate = [
        "id",
        "company",
        "companyPhone",
        "companyEmail",
        "urlCompany",
        "status_company",
        "createdAt",
        "updatedAt",
    ]

    const dataObjectCreate = [


        {
            element: "company",
            type: "text"
        },
        {
            element: "companyPhone",
            type: "text"
        },
        {
            element: "companyEmail",
            type: "email"
        },
        {
            element: "urlCompany",
            type: "text"
        },
        {
            element: "status_company",
            type: "boolean"
        },
    ]



    useEffect(() => {
        const todo = async () => {
            try {
                const filteredData = await datas?.find((item: any) => item.id === recordData.id);
                try {
                    const dataR = await filteredData[secondLine]
                    console.log("🚀 ~ todo ~ dataR:", dataR)
                    //primero hay que comprobar cual es array 
                    //con el que es array hay que 

                    const dataThirdLine = await dataSourcesFormater(dataR, thirdLine)
                    if (dataThirdLine && dataThirdLine !== undefined) await setDataSourceThirdLine(dataThirdLine)
                } catch (error) {
                    console.log("🚀 ~ todo ~ error:", error)
                }
            } catch (error) {
                console.log("🚀 ~ todo ~ error:", error)
            }
        }
        todo()
    }, [recordData])

    useEffect(() => {
        const todo = async () => {
            try {
                //patrones dentro del array para objetos y array general para los indices de tree
                const { filteredData, arrayValues, nonArrayValues } = await filteredDataObjectPlusArray({ datas, recordData })
                console.log("🚀 ~ todo ~ filteredData, arrayValues, nonArrayValues:", await filteredData, await arrayValues, await nonArrayValues)


            } catch (error) {
                console.error("Error filtering data:", error);
                // Consider throwing or handling the error appropriately
            }
        };

        todo();
    }, [recordData, datas]);




    useEffect(() => {

        setColumns(columnsFirstLine?.concat({
            title: 'Action',
            key: 'action',
            width: '5%',
            render: (_: any, record: {
                title: ReactNode;
                name: any | undefined;
                key: any
            }) =>
            (
                <div>

                    <Modalnew
                        title="Show"
                    // className={style.body}
                    >
                        <div className={styles.bodyTreeAndComponent}>
                            {/* <div className={styles.tree}>
                                <TreeGeneral />
                            </div> */}
                            <div>

                                <ComponentModalTable
                                    todo={record}
                                    setRecordData={setRecordData}
                                >
                                    <TableGenral
                                        columns={columnsThirdLine}
                                        dataSource={dataSourceThirdLine}
                                        data={datas}
                                        pagination={pages}
                                        views="false"
                                        bordered

                                    />
                                </ComponentModalTable>
                            </div>
                        </div>

                    </Modalnew>
                    <Modalnew
                        title="Update">

                        <CreateGeneral
                            gridFormatView={gridFormatView}
                        >
                            <h4>Update Companies</h4>
                            <InputsUpdateGeneralAll
                                urlGeneral="/Company/Company/"
                                dataObjectCreate={dataObjectCreate}
                                data={data}
                                setData={setData}
                                todo={record}
                            />
                            <br />

                        </CreateGeneral>


                    </Modalnew>

                    <Modalnew
                        title="Delete">

                        <CreateGeneral
                            gridFormatView={gridFormatView}
                        >
                            <h4>Delete Companies</h4>
                            <InputsDeleteGeneralAll
                                urlGeneral="/Company/Company/"
                                dataObjectCreate={dataObjectCreate}
                                data={data}
                                setData={setData}
                                todo={record}
                            />
                            <br />
                        </CreateGeneral>
                    </Modalnew>

                </div>

            ),

        }))






    }, [datas, dataSourceThirdLine])



    const pages: any = 2

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'Companies',
            children:
                <ShowGeneral
                    id=""
                    todoCRUD={todoCRUDGet}
                    gridFormatView={gridFormatView}
                    setGridFormatView={setGridFormatView}
                    dataInfo={datas}
                    loading={loading}
                    data={datas}
                    message={message}
                    httpStatus={httpStatus}
                >
                    <Button
                    >
                        <Modalnew
                            title="Add">
                            <CreateGeneral
                                gridFormatView={gridFormatView}
                            >
                                <h4>Create Companies</h4>
                                <InputsCreateGeneralAll
                                    dataObjectCreate={dataObjectCreate}
                                    data={data}
                                    setData={setData}
                                    urlGeneral="/Company/Company/"
                                />
                                <br />

                            </CreateGeneral>
                        </Modalnew>
                    </Button>
                    <TableGenral
                        columns={columns}
                        dataSource={dataSource}
                        data={datas}
                        pagination={pages}
                        views="true"



                    />

                </ShowGeneral >,
        },
        {
            key: '2',
            label: 'Apis Companies',
            children:
                <CreateGeneral
                    gridFormatView={gridFormatView}
                >


                </CreateGeneral>
            ,
        },
        {
            key: '3',
            label: 'Tab 3',
            children: 'Toma por mirón 3',
        },
        {
            key: '4',
            label: 'Tab 4',
            children: 'Toma por mirón 4',
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
                    className={styles.bodyTabs}
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