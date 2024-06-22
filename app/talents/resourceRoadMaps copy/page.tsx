"use client"


import React, { useEffect, useLayoutEffect, useMemo, useState } from 'react'
import dynamic from 'next/dynamic'

import styles from "./page.module.css"

import { IFetchCrudData } from '@/app/Interfaces/IFetchCrudData'
import { formaterDataArray } from '@/services/formaterDataArray'
import { formatDataAllElementNotArray, formaterDataArrayAll } from '@/services/formaterDataArrayAll'
import { Table } from "antd";
import { createCrud, fetchCrud } from '@/redux/features/CRUD/crudSlice';
const ButonGeneralModal = dynamic(() => import('@/components/GeneralComponents/CRUDGeneral/ButonGeneralModal/ButonGeneralModal'), { ssr: false })
export interface FetchCrudData {
  urlGeneral: string | any;
  methods: string;
  body?: any | any[]; // Tipo específico para el cuerpo de la solicitud
  idParams?: string;
}


import diccionaryRoutesAndComponents from '@/diccionaryDataKey/diccionaryRoutesAndComponents.json'
import { rootsAsync, selectRoots } from '@/redux/features/roots/rootsSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import TestForCreate from '@/components/TestForCreate/TestForCreate'
import { interViewDataId, preloadInterViewData, preloadRoadMapsData, preloadUserData, preloadVacancyData, roadMapsDataId, selectRoadMap, updateColStart, updateCool1, updateData1, updateDataSecond, updateInterviewData, updateInterviewDataKey, updateVacanciesData, updateVacanciesDataKey, userDataId, userIntreviewDataId, userIntreviewResponsibleDataId, vacancyDataId } from '@/redux/features/RoadMaps/roadmapsSlice'


type DictionaryRoutesAndComponents = typeof diccionaryRoutesAndComponents;


const page = () => {

  const [data, setData] = useState<any | any[] | undefined>()
  const [datas, setDatas] = useState<any | any[] | undefined>()
  const [iterviewUsersKey, setInterviewUserKey] = useState<any | any[] | undefined>()
  const [userKey, setUserKey] = useState<any | any[] | undefined>()
  const [catchId, setCatchId] = useState<any | any[] | undefined>()


  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    dispatch(rootsAsync());
    dispatch(preloadRoadMapsData())
    dispatch(preloadInterViewData())
    dispatch(preloadVacancyData())
    dispatch(preloadUserData())

    // dispatch(roadMapsDataId(1))
    // dispatch(vacancyDataId(1))



  }, [])



  const roots = useAppSelector(selectRoots);
  const { col_structure } = roots

  const roadMap = useAppSelector(selectRoadMap);
  const {
    dataGetRoadMap,
    colStart,
    data1,
    interviewsData,
    interviewsDataKey,
    vacanciesData,
    vacanciesDataKey,
    col1,
    users,  
    dataRoadMapIdData,

  } = roadMap


  const todoCRUDGetS: IFetchCrudData = {
    urlGeneral: "/RoadMap/RoadMap/",
    methods: 'GET',
    body: "",
    idParams: "",
  }


  // const { loading, datas: dataGetRoadMap, message, httpStatus, refetchData } = useFetchCrudData(todoCRUDGetS); // Usa el hook personalizado
  const sortedData = useMemo(() => {
    if (dataGetRoadMap && Array.isArray(dataGetRoadMap)) {
      return [...dataGetRoadMap].sort((a: any, b: any) => a.id - b.id);
    }
    return dataGetRoadMap;
  }, [dataGetRoadMap]);

  useLayoutEffect(() => {
    try {
      setDatas(sortedData);
    } catch (error) {
      console.log("🚀 ~ useEffect ~ error:", error);
    }
  }, [sortedData]);






  useLayoutEffect(() => {
    const todo = async () => {
      try {
        if (Array.isArray(col_structure)) {



          const tableStructure = col_structure.find(
            (obj: any) => obj.table_fullname === "RoadMaps"
          );

          // Uso de encadenamiento opcional para evitar errores y obtener los nombres de las columnas
          const columnNames = tableStructure?.table_columns.map((column: any) => column.column_name) ?? [];

          await dispatch(updateColStart(columnNames));

          const funtionTodo = (id: any) => {

            dispatch(roadMapsDataId(id))
            dispatch(vacancyDataId(id))
            dispatch(userDataId(id))
            dispatch(userIntreviewDataId(id))
            dispatch(userIntreviewResponsibleDataId(id))
            dispatch(interViewDataId(id))




            dispatch(rootsAsync());
            dispatch(preloadRoadMapsData())
            dispatch(preloadInterViewData())
            dispatch(preloadVacancyData())
            dispatch(preloadUserData())

          }


          try {
            let todos = await formaterDataArray(columnNames, "Roadmap")

            const todosS = [...todos,
            {
              title: 'Action',
              key: 'action',
              fixed: 'right',
              width: 100,
              render: (text: any, record: any) => (
                <div onClick={() => funtionTodo(record.id)}>
                  <ButonGeneralModal
                    todo={record}
                    ids={record.id}
                    creates={false}
                    updates={true}
                    deletes={true}
                    shows={true}
                    settings={false}
                    pathStart="/RoadMap/RoadMap/"
                    nameModelStart="RoadMaps"
                    createModelType={"roadMap"}
                    modulesName={['RoadMaps', 'Vacancies', 'InterviewResponsibles', 'InterviewUsers', 'Users']}





                  >

                  </ButonGeneralModal>

                </div >
              ),
            }
            ]
            dispatch(updateCool1(todosS))

          } catch (error) {
            console.log("🚀 ~ todo ~ error:", error)
          }

        }

      } catch (error) {
        console.log("🚀 ~ todo ~ error:", error)

      }

    }
    todo()
  }, [col_structure, dataGetRoadMap]);

  const title = [
    "roadMapsDataId",
    "vacancyDataId",
    "userDataId",
    "userIntreviewDataId",
    "userIntreviewResponsibleDataId",
    "interViewDataId",
  ]

  const fl1 =
    [

      "id",
      "VacancyId",
      "responsibilityDescription",
      "status_roadmap",
      "required",
      "description",
      "duration",
      "location",
      "scheduledDateTime",
      "start_DateTime",
      "finish_DateTime",
      "completionDateTime",
      "outcome",
      "before_steps",
      "after_steps",
      "nextActionDateTime",
      "image",
      "all_Steps",
      "order_Steps",
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
    "interviewers",
    "nextActionDateTime",
    "rating",
    "requiredActions",
    "status_interview",
    "updatedAt",
  ]

  const f130_interviewsArray: any = [
    "Test",
    "Vacancies"
  ]
  const f130_1_vacanciesArray: any = [
    "Companies",
    "Interviews",
    "TypeVacancyId"
  ]

  const fl31 = ['InterviewResponsible']

  const fl311 = [
    "InterviewId",
    "RoadMapId",
    "UserId",
    "createdAt",
    "responsibilityDescription",
    "status_interview_responsible",
    "updatedAt"
  ]


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
    "updatedAt"
  ]


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
    "updatedAt"
  ]

  const fl34 = ['Vacancies']

  const fl341 = [
    "TypeVacancyId",
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
    "updatedAt"
  ]

  const fl342 = ["InterviewVacance"]
  const fl3421 = [
    "InterviewId",
    "VacancyId",
    "comments",
    "createdAt",
    "interviewDateTime",
    "results",
    "status_interview_vacancy_",
    "updatedAt"
  ]



  useLayoutEffect(() => {

    const todo = async () => {
      try {
        const dataReturn = await formaterDataArrayAll(datas, fl2, fl1)
      } catch (error) {

      }
      try {
        const dataReturns = await formatDataAllElementNotArray(datas, fl2, colStart)
        dispatch(updateData1(dataReturns))

      } catch (error) {

      }

      // setData1(dataReturn.todoElements)
    }
    todo()
    //TODO I may whitch effect in the code wen I will change it (Data)
    setData(datas)

  }, [datas])



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
      try {
        const interviews = await fetchData('/Interview/Interview');
        const vacancies = await fetchData('/Vacancy/Vacancy');
        const usersGetAxios = await fetchData('/User/User/');



        if (interviews) {
          try {
            dispatch(updateInterviewData(interviews))
            const interviewsKeys = Object.keys(interviews[0])
            let formaterDataArrayInterViewsKeys = await formaterDataArray(interviewsKeys, "Interviews")
            dispatch(updateInterviewDataKey(formaterDataArrayInterViewsKeys))

          } catch (error) {
            console.log("🚀 ~ fetchInterviewsAndVacancies ~ error:", error)
          }
        }


        if (vacancies) {
          try {
            dispatch(updateVacanciesData(vacancies))

            const vacanciesKeys = Object.keys(vacancies[0])
            let formaterDataArrayVacanciesKeys = await formaterDataArray(vacanciesKeys, "Vacancies")
            dispatch(updateVacanciesDataKey(formaterDataArrayVacanciesKeys))
          } catch (error) {
            console.log("🚀 ~ fetchInterviewsAndVacancies ~ error:", error)
          }
        }


        if (usersGetAxios) {
          try {
            // setUsers(usersGetAxios)
            const usersKeyGetAxios = Object.keys(usersGetAxios[0])
            let formaterDataArrayInterviewUserKeys = await formaterDataArray(usersKeyGetAxios, "Users")//ojo no esta comprobado
            setInterviewUserKey(formaterDataArrayInterviewUserKeys)
          } catch (error) {
            console.log("🚀 ~ fetchInterviewsAndVacancies ~ error:", error)
          }
        }
      } catch (error) {
        console.log("🚀 ~ fetchInterviewsAndVacancies ~ error:", error)

      }




    };

    fetchInterviewsAndVacancies();
  }, [dispatch]);



  const createDataStart = {
    col: col1,
    colIdPath: [
      {
        ids: "VacancyId",
        paths: "/Vacancy/Vacancy",
        datas: vacanciesData,
        datasKey: vacanciesDataKey,
        datakey: ['id', 'title'],
        titleModal: 'Vacancy',
        rules: {
          isMultiple: false
        }
      },

    ]
  }

  const createDataSeconds = {
    col: col1,
    colIdPath: [
      {
        ids: "InterviewId",
        paths: "/Interview/Interview",
        datas: interviewsData,
        datasKey: interviewsDataKey,
        datakey: ['id', 'interviewers'],
        titleModal: 'Interview',
        rules: {
          isMultiple: false
        }


      },
      {
        ids: "UserId",
        paths: "/User/User",
        datas: users,
        datasKey: userKey,
        datakey: ['id', 'fullname'],
        titleModal: 'Interview Users',
        rules: {
          isMultiple: true
        }
      },
      {
        ids: "UserId",
        paths: "/User/User",
        datas: users,
        datasKey: userKey,
        datakey: ['id', 'fullname'],
        titleModal: 'Interview Responsibles',
        rules: {
          isMultiple: true
        }
      },
    ]
  }

  useEffect(() => {
    const funtionAsync = async () => {
      const modulesName = ['RoadMaps', 'Vacancies', 'InterviewResponsibles', 'InterviewUsers', 'Users']
      const createDataStart = {
        colIdPath: [
          {
            ids: "RoadMapId",
            paths: " /RoadMap/RoadMap/",
            datakey: ['id', 'description'],
            titleModal: 'Vacancy',
            rules: {
              isMultiple: false
            }
          },

        ]
      }

      const createDataSecond = {
        colIdPath: [
          {
            ids: "VacancyId",
            paths: "/Vacancy/Vacancy",
            datakey: ['id', 'title'],
            titleModal: 'Vacancy',
            rules: {
              isMultiple: false
            }
          },

        ]
      }
      const dataThirds = {
        colIdPath: [
          {
            ids: "InterviewId",
            paths: "/Interview/Interview",
            datakey: ['id', 'interviewers'],
            titleModal: 'Interview',
            rules: {
              isMultiple: false
            }


          },
          {
            ids: "UserId",
            paths: "/User/User",
            datakey: ['id', 'fullname'],
            titleModal: 'Interview Users',
            rules: {
              isMultiple: true
            }
          },
          {
            ids: "UserId",
            paths: "/User/User",
            datakey: ['id', 'fullname'],
            titleModal: 'Interview Responsibles',
            rules: {
              isMultiple: true
            }
          },
        ]
      }
    }
    funtionAsync()

  }, [dispatch])






  const rules_creates = {
    Interview_Responsibles: true,
    Interview_Users: true,
    Vacancy: false,
    Interview: false
  }


  return (
    <div className={styles.body}>


      <div className={styles.siderTop} >
        <ButonGeneralModal
          todo={data1}
          ids="0"
          creates={true}
          createData={createDataStart}
          createDataSeconds={createDataSeconds}
          rules_create={rules_creates}


          updates={false}
          deletes={false}
          shows={false}
          settings={true}
          datas={data}
          pathStart="/RoadMap/RoadMap/"
          nameModelStart="RoadMaps"
          createModelType={"roadMap"}
        >

        </ButonGeneralModal>
      </div>


      <div className={styles.tables}>

        {
          (col1 && data1) &&
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
          />
        }

      </div>

    </div>
  )
}

export default page
