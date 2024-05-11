"use client"


import React, { useEffect, useState } from 'react'
import styles from "./page.module.css"

import { IFetchCrudData } from '@/app/Interfaces/IFetchCrudData'
import useFetchCrudData from '@/hooks/useFetchCrudData'
import { formaterDataArray } from '@/services/formaterDataArray'
import { formatDataAllElementNotArray, formaterDataArrayAll } from '@/services/formaterDataArrayAll'
import { Button, Table, Form, Input } from "antd";
import type { CheckboxOptionType, TableColumnsType } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { createCrud, fetchCrud, updateCrud } from '@/redux/features/CRUD/crudSlice';

import Modalnew from '@/components/steps/componentSteps/ModalNew/Modalnew'
import ButonGeneralModal from '@/components/GeneralComponents/CRUDGeneral/ButonGeneralModal/ButonGeneralModal'
import { RootState } from '@/redux/store'
import Typeselectcrud from '@/components/GeneralComponents/TypeSelectCRUD/Typeselectcrud'



export interface FetchCrudData {
  urlGeneral: string | any;
  methods: string;
  body?: any | any[]; // Tipo específico para el cuerpo de la solicitud
  idParams?: string;
}





const page = () => {

  const [sources, setSources] = useState<any | any[]>()
  const [objectKeys, setObjectKeys] = useState<any | any[]>()

  const [dataSource, setDataSource] = useState([]);
  const [editingRow, setEditingRow] = useState(null);
  const [form] = Form.useForm();


  const [data, setData] = useState<any | any[] | undefined>()
  const [col1, setCol1] = useState<any | any[]>()
  const [data1, setData1] = useState<any | any[]>()
  const [checkedList, setCheckedList] = useState();


  const [dataSelect1, setDataSelect1] = useState<any | any[]>()
  const [interviewsData, setInterviewsData] = useState<any | any[] | undefined>()
  const [vacanciesData, setVacanciesData] = useState<any | any[] | undefined>()




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
        fixed: 'right',
        width: 100,
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

    const todo = async () => {
      const dataReturn = await formaterDataArrayAll(datas, fl2, fl1)
      const dataReturns = await formatDataAllElementNotArray(datas, fl2, fl1)
      setData1(dataReturns)

      // setData1(dataReturn.todoElements)
    }
    todo()
    setData(datas)

  }, [datas])

  const dispatch = useDispatch();






  const todoData: any[] | any | undefined = []

  const fetchData = async (url: string) => {
    const todoCRUDGet: FetchCrudData = {
      urlGeneral: url,
      methods: 'GET',
      body: '',
      idParams: '',
    };

    try {
      const response = await dispatch(fetchCrud(todoCRUDGet));
      return response?.payload?.data; // Suponiendo que el resultado deseado está en response.data
    } catch (error) {
      console.error('Error dispatching fetchCrud:', error);
      return null;
    }
  };

  useEffect(() => {
    const fetchInterviewsAndVacancies = async () => {
      const interviews = await fetchData('/Interview/Interview');
      const vacancies = await fetchData('/Vacancy/Vacancy');

      const updatedData: any[] = [];

      if (interviews) {
        // const dataKeyGeneralInterviewsData = Object.keys(interviewsData[0])
        // console.log("🚀 ~ page ~ dataKeyGeneralInterviewsData:", dataKeyGeneralInterviewsData)

        setInterviewsData(interviews)
        // updatedData.push(interviews);
      }

      if (vacancies) {
        // const dataKeyGeneralVacanciesData = Object.keys(vacanciesData[0])
        // console.log("🚀 ~ page ~ dataKeyGeneralVacanciesData:", dataKeyGeneralVacanciesData)

        setVacanciesData(vacancies)
        // updatedData.push(vacancies);
      }
    };

    fetchInterviewsAndVacancies();
  }, [dispatch]);







  const createDataStart = {
    col: col1,
    colIdPath: [
      {
        ids: "InterviewId",
        paths: "/Interview/Interview",
        datas: interviewsData,
        datakey: ['id', 'interviewers']

      },
      {
        ids: "VacancyId",
        paths: "/Vacancy/Vacancy",
        datas: vacanciesData,
        datakey: ['id', 'title']
      }
    ]
  }



  return (
    <div className={styles.body}>


      {/* <Typeselectcrud
        placeholder="Select"
        datas={datas}
        sources={sources}
        todo=""
        MAX_COUNT={1}
        datakey={datakey}
        objectKeys={objectKeys}
        nameReturn="TypeVacancyId"
      />  */}


      <div className={styles.siderTop} >
        <ButonGeneralModal
          todo={data1}
          ids="0"
          creates={true}
          createData={createDataStart}
          updates={false}
          deletes={false}
          shows={false}
          settings={true}
          datas={data}

        ></ButonGeneralModal>
      </div>


      <div className={styles.tables}>


        <Table
          dataSource={data1}
          columns={col1}
          bordered
          scroll={{ x: 'auto' }}
          style={{ minWidth: '360px' }} // Establece un ancho mínimo para la tabla

          expandable={{
            rowExpandable: (record) => true,
            expandedRowRender: (record) => {
              return <div>{record.id}</div>
            }

          }}
        />;
      </div>




    </div>
  )
}

export default page
