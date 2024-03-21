// @ts-nocheck
// use client
"use client"
import React, { ReactNode, useEffect, useLayoutEffect, useState } from 'react'
import TabsGeneric from '@/components/GeneralComponents/GeneralTabs/TabsGeneral'
import { Button, type TabsProps } from 'antd';
import styles from './humanresources.module.css'
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
    urlGeneral: "/Vacancy/Vacancy/",
    methods: 'GET',
    body: "",
    idParams: "",
  }
  const { loading, datas, message, httpStatus, refetchData } = useFetchCrudData(todoCRUDGet); // Usa el hook personalizado


  useEffect(() => {
    refetchData();
  }, [window])




  const firstLine: any | any[] =
    [
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
  const secondLine: any | any[] = "Companies"
  const thirdLine: any | any[] = [
    "id",
    "company",
    "companyPhone",
    "companyEmail",
    "urlCompany",
    "status_company",
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

  useEffect(() => {
    const columnsFirstLines = hederColumsformater(firstLine)
    const dataFirstLine = dataSourcesFormater(datas, firstLine)
    const columnsThirdLines = hederColumsformater(thirdLine)
    const dataThirdLine = dataSourcesFormater(dataSourceThirdLine, thirdLine)

    setDataSource(dataFirstLine)
    setColumnsFirstLine(columnsFirstLines)
    setColumnsThirdLine(columnsThirdLines)
  }, [datas])


  const dataObjectCreate = [
    {
      element: "title",
      type: "text"
    },
    {
      element: "description",
      type: "text"
    },
    {
      element: "requirements",
      type: "text"
    },
    {
      element: "responsibilities",
      type: "text"
    },
    {
      element: "location",
      type: "text"
    },
    {
      element: "extra_data",
      type: "text"
    },
    {
      element: "finish_vacancy",
      type: "text"
    },
    {
      element: "TypeVacancyId",
      type: "number"
    },
    {
      element: "start_vacancy",
      type: "text"
    },
    {
      element: "start_vacancy",
      type: "text"
    },
    {
      element: "status_vacancy_work",
      type: "text"
    }

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
          console.log("🚀 ~ todo ~ dataThirdLine:", dataThirdLine)
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
              <h4>Update Vacancies</h4>
              <InputsUpdateGeneralAll
                urlGeneral="/Vacancy/Vacancy/"
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
              <h4>Delete Vacancies</h4>
              <InputsDeleteGeneralAll
                urlGeneral="/Vacancy/Vacancy/"
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
      label: 'Vacancies',
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
                <h4>Create Vacancies</h4>
                <InputsCreateGeneralAll
                  dataObjectCreate={dataObjectCreate}
                  data={data}
                  setData={setData}
                  urlGeneral="/Vacancy/Vacancy/"
                  className={styles.createTabs}
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
        <h3>Human Resources</h3>
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
