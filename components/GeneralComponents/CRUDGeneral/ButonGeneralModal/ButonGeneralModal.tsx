'use client'
import React, { useEffect, useState } from 'react'
import Modalnew from '@/components/steps/componentSteps/ModalNew/Modalnew'
import { Button } from 'antd'
import styles from './buttonGeneral.module.css'
import CreateAutogenerateGeneral from './CreateAutogenerateGeneral/CreateAutogenerateGeneral'
import DeletesAutoGenreateGeneral from './DeletesAutoGenreateGeneral/DeletesAutoGenreateGeneral'
import { PlusOutlined } from '@ant-design/icons'
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import { useDispatch } from 'react-redux';
import { deleteCrud } from '@/redux/features/CRUD/crudSlice'
import Messages from '@/components/Messages/Messages'
import ShowAutoGenreateGeneral from './ShowAutoGenreateGeneral/ShowAutoGenreateGeneral'


export interface FetchCrudData {
  urlGeneral: string | any;
  methods: string;
  body?: any | any[]; // Tipo específico para el cuerpo de la solicitud
  idParams?: string;
}


const ButonGeneralModal = (props: any) => {
  const [createDatas, setCreateDatas] = useState<any | any[] | undefined>()
  const [createDatasSeconds, setCreateDatasSeconds] = useState<any | any[] | undefined>()

  const [dataGet, setDataGet] = useState<any | any[] | undefined>()
  const [pathStarts, setPathStarts] = useState<string | undefined | null>()
  const [nameModelStarts, setNameModelStarts] = useState<string | undefined | null>()
  const [messageS, setMessageS] = useState<any | any[] | undefined>()
  const [componentsAll, setComponentsAll] = useState<any | any[] | undefined>()

  const {
    todo,
    ids,
    creates,
    createData,
    createDataSeconds,
    updates,
    deletes,
    shows,
    settings,
    datas,
    pathStart,
    nameModelStart,
    componentForCreate,
    rules_create,
    createModelType
  } = props
  const dispatch = useDispatch();
  useEffect(() => {
    const todo = async () => {

      // props -> createDataStart -> [{ ids,paths,datas,datasKey,datakey,titleModal }]
      if (createData !== undefined) setCreateDatas(createData)
      if (createDataSeconds !== undefined) setCreateDatasSeconds(createDataSeconds)

      //get Data genera get of reducer ->  customerHooks
      if (datas !== undefined) setDataGet(datas)
      if (pathStart) setPathStarts(pathStart)
      if (nameModelStart) setNameModelStarts(nameModelStart)
      if (componentForCreate) setComponentsAll(componentForCreate)


    }
    todo()

  }, [props, props.datas])



  const handleActionDelete = (si: any) => {

    const todoCRUDGet: FetchCrudData = {
      urlGeneral: props?.pathStarts || '/RoadMap/RoadMap/',
      methods: 'Delete',
      body: "",
      idParams: props.ids,
    };

    try {
      const functionAsync = async () => {
        const response = await dispatch(deleteCrud(todoCRUDGet));
        const { payload: { status } } = response
        if (status === 200) {
          setMessageS(
            {
              keys: 200,
              content: "Succes, Delete complete!",
              loadings: false,
              resultProcess: "success"
            }
          )
        }
        if (status === 500 || status === 400) {
          setMessageS(
            {
              keys: 500,
              content: "Error, Delete incomplete!",
              loadings: false,
              resultProcess: "error"
            }
          )
        }

      }
      functionAsync()
      // return response?.payload?.data; // Suponiendo que el resultado deseado está en response.data
    } catch (error) {

      console.error('Error dispatching fetchCrud:', error);
      return null;
    }
  }



  const handleAction = (si: any) => {
    console.log(si, "*****")
  }

  return (
    <div className={styles.siderbarup}>
      {
        shows ?
          <Modalnew
            title="Show">
            <ShowAutoGenreateGeneral
              todo={todo}
            />

          </Modalnew>
          : ""
      }
      {
        updates ?

          <Modalnew
            title="Update">

            <Button onClick={() => handleAction(todo)}>Action</Button>
          </Modalnew>
          : ""
      }
      {
        deletes ?
          <Modalnew
            title="Delete">
            <DeletesAutoGenreateGeneral
              todo={todo}
            />
            <Button
              className={styles.buttons}
              // style={{ width: '100%' }}
              onClick={() => handleActionDelete(todo)}
              block
              type='primary'
            >
              <RemoveRoundedIcon />
            </Button>
            {messageS?.key !== null && (
              <Messages
                key={messageS?.key}
                content={messageS?.content}
                loadings={messageS?.loadings}
                resultProcess={messageS?.resultProcess}
              />
            )}
          </Modalnew>
          : ""
      }
      {
        creates ?
          <Modalnew
            title="Add"
          >
            <div>

              {createModelType === "roadMap" &&
                <CreateAutogenerateGeneral
                  createDatas={createDatas}
                  createDatasSeconds={createDatasSeconds}
                  rules_create={rules_create}

                  dataGet={dataGet}
                  pathStarts={pathStarts}
                  nameModelStarts={nameModelStarts}

                >
                  si llegó
                </CreateAutogenerateGeneral>
              }




            </div>
            {/* <Button onClick={() => handleAction(todo)}>Action</Button> */}
          </Modalnew>
          : ""
      }
      {
        settings ?
          <Modalnew
            title="Setting">

            <Button onClick={() => handleAction(todo)}>Action</Button>
          </Modalnew>
          : ""
      }
    </div>
  )
}

export default ButonGeneralModal
