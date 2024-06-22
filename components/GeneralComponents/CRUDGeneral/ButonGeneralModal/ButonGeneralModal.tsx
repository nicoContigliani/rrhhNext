'use client'
import React, { useEffect, useState } from 'react'
import Modalnew from '@/components/steps/componentSteps/ModalNew/Modalnew'
import { Button } from 'antd'
import styles from './buttonGeneral.module.css'
import SettingGeneral from './SettingGeneral/SettingGeneral'
import UpdateAutoGenerate from './UpdateAutoGenerate/UpdateAutoGenerate'



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
    updates,
    deletes,
    shows,
    settings,
    nameModelStart,


    settingData,
    columnSelectElement,
    setColumnSelectElement,



  } = props




  return (
    <div className={styles.siderbarup}>
      {
        shows ?
          <Modalnew
            title="Show">


          </Modalnew>
          : ""
      }
      {
        updates ?

          <Modalnew

            title="Update">
            < UpdateAutoGenerate
              nameModelStart={nameModelStart}

            />

          </Modalnew>
          : ""
      }
      {
        deletes ?
          <Modalnew
            title="Delete">

          </Modalnew>
          : ""
      }
      {
        creates ?
          <Modalnew
            title="Add"
          >
            <div>




            </div>
          </Modalnew>
          : ""
      }
      {
        settings ?
          <Modalnew
            title="Setting">
            <SettingGeneral
              settingData={settingData}
              columnSelectElement={columnSelectElement}
              setColumnSelectElement={setColumnSelectElement}
              nameModelStart={nameModelStart}

            />
            {props.children}

          </Modalnew>
          : ""
      }
    </div>
  )
}

export default ButonGeneralModal
