"use client"


import React, { useEffect, useState } from 'react'

import { IFetchCrudData } from '@/app/Interfaces/IFetchCrudData'
import useFetchCrudData from '@/hooks/useFetchCrudData'
import { formaterDataArray } from '@/services/formaterDataArray'
import { formatDataAllElementNotArray, formaterDataArrayAll } from '@/services/formaterDataArrayAll'
import { Button, Table, Form, Input } from "antd";
import type { CheckboxOptionType, TableColumnsType } from 'antd';

import Modalnew from '@/components/steps/componentSteps/ModalNew/Modalnew'
import ButonGeneralModal from '@/components/GeneralComponents/CRUDGeneral/ButonGeneralModal/ButonGeneralModal'

const page = () => {

  const [sources, setSources] = useState<any | any[]>()
  const [objectKeys, setObjectKeys] = useState<any | any[]>()

  const [dataSource, setDataSource] = useState([]);
  const [editingRow, setEditingRow] = useState(null);
  const [form] = Form.useForm();


  const [data, setData] = useState<any | any[]>()
  const [col1, setCol1] = useState<any | any[]>()
  const [data1, setData1] = useState<any | any[]>()
  const [checkedList, setCheckedList] = useState();




  //crud typeGeneral
  //Get
  //TODO require la url y la key para setear el value del select 
  // const todoCRUDGet: IFetchCrudData = {
  //   urlGeneral: "/TypeVacancy/TypeVacancy/",
  //   methods: 'GET',
  //   body: "",
  //   idParams: "",
  // }





  // const { loading, datas, message, httpStatus, refetchData } = useFetchCrudData(todoCRUDGet); // Usa el hook personalizado
  // const datakey = ['id', 'name_vacancy_type']
  // useEffect(() => {
  //   const todo = () => {
  //     try {
  //       const dataResult: any | any[] | undefined = dataFormaterToSelect(datakey, datas)
  //       setSources(dataResult)
  //     } catch (error) {
  //     }

  //     try {
  //       const dataKeyGeneral = Object.keys(datas[0])
  //       if (dataKeyGeneral !== undefined) setObjectKeys(dataKeyGeneral)
  //     } catch (error) {

  //     }


  //   }
  //   todo()
  // }, [datas])





  const todoCRUDGetS: IFetchCrudData = {
    urlGeneral: "/RoadMap/RoadMap/",
    methods: 'GET',
    body: "",
    idParams: "",
  }

  const { loading, datas, message, httpStatus, refetchData } = useFetchCrudData(todoCRUDGetS); // Usa el hook personalizado


  const fl1 =
    ["id",
      "InterviewId",
      "VacancyId",
      "responsibilityDescription",
      "status_roadmap",
      "order",
      "required",
      "description",
      "duration",
      "location",
      "scheduledDateTime",
      "completionDateTime",
      "outcome",
      "nextSteps",
      "nextActionDateTime",
      "image",
      "createdAt",
      "updatedAt"
    ]

  const fl2: any = [
    "Interviews"
  ]

  const fl3: any = [
    "TypeInterviewId",
    "comments",
    "createdAt",
    "duration",
    "id",
    "inerview_result",
    "interviewDateTime",
    "interviewMethod",
    "interviewTypeId",
    "interviewers",
    "nextActionDateTime",
    "rating",
    "requiredActions",
    "status_interview",
    "updatedAt",
  ]
  const fl31 = ['InterviewResponsible']

  const fl311 = ["InterviewId",
    "RoadMapId",
    "UserId",
    "createdAt",
    "responsibilityDescription",
    "status_interview_responsible",
    "updatedAt"]


  const fl32 = ['Interviewees']
  const fl321 = [
    "Score",
    "birthday",
    "createdAt",
    "email",
    "fullname",
    "id",
    "password",
    "phone",
    "status_user",
    "updatedAt"]




  const fl33 = ['Responsibles']
  const fl331 = [
    "Score",
    "birthday",
    "createdAt",
    "email",
    "fullname",
    "id",
    "password",
    "phone",
    "status_user",
    "updatedAt"]



  const fl34 = ['Vacancies']

  const fl341 = ["TypeVacancyId",
    "createdAt",
    "description",
    "extra_data",
    "finish_vacancy",
    "id",
    "location",
    "requirements",
    "responsibilities",
    "start_vacancy",
    "status_vacancy",
    "status_vacancy_work",
    "title",
    "updatedAt"]

  const fl342 = ["InterviewVacance"]
  const fl3421 = ["InterviewId",
    "VacancyId",
    "comments",
    "createdAt",
    "interviewDateTime",
    "results",
    "status_interview_vacancy_",
    "updatedAt"]


  const handleAction = (si: any) => {
    console.log(si, "*****")
  }




  //formatea la columna principal
  useEffect(() => {
    const todo = async () => {
      let todos = await formaterDataArray(fl1)





      const todosS = [...todos,
      {
        title: 'Action',
        key: 'action',
        render: (text: any, record: any) => (
          <div>
            <ButonGeneralModal
              todo={record}
              ids={record.id}
              creates={false}
              updates={true}
              deletes={true}
              shows={true}
              settings={false}
            >

            </ButonGeneralModal>

            {/* <Button onClick={() => handleAction(record.id)}>Action</Button>
            <Button onClick={() => handleAction(record.id)}>Action</Button> */}
          </div>
        ),
      }
      ]

      await setCol1(todosS)

    }
    todo()
  }, [])

  useEffect(() => {
    console.log(datas)

    const todo = async () => {
      const dataReturn = await formaterDataArrayAll(datas, fl2, fl1)
      console.log("🚀 ~ todo ~ dataReturn:", dataReturn)
      const dataReturns = await formatDataAllElementNotArray(datas, fl2, fl1)
      setData1(dataReturns)

      // setData1(dataReturn.todoElements)
    }
    todo()
    setData(datas)

  }, [datas])


  return (
    <div>

      {/* 
      <Typeselectcrud
        placeholder="Select"
        datas={datas}
        sources={sources}
        todo=""
        MAX_COUNT={1}
        datakey={datakey}
        objectKeys={objectKeys}
        nameReturn="TypeVacancyId"
      /> */}


      <div >
        <ButonGeneralModal
          todo={data1}
          ids="0"
          creates={true}
          createData={{
            col: col1,
            colIdPath: [
              {
                ids: "InterviewId",
                paths:"/"
            }
            ]


          }}
          updates={false}
          deletes={false}
          shows={false}
          settings={true}

        ></ButonGeneralModal>
      </div>




      <Table
        dataSource={data1}
        columns={col1}
        bordered

        expandable={{
          rowExpandable: (record) => true,
          expandedRowRender: (record) => {
            return <div>{record.id}</div>
          }

        }}
      />;




    </div>
  )
}

export default page
