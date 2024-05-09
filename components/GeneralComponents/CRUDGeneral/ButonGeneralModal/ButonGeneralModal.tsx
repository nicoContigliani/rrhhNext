'use client'
import React, { useEffect, useState } from 'react'
import Modalnew from '@/components/steps/componentSteps/ModalNew/Modalnew'
import { Button } from 'antd'
import styles from './buttonGeneral.module.css'
import CreateAutogenerateGeneral from './CreateAutogenerateGeneral/CreateAutogenerateGeneral'

const ButonGeneralModal = (props: any) => {
  const [createDatas, setCreateDatas] = useState<any | any[] | undefined>()
  const [dataGet, setDataGet] = useState<any | any[] | undefined>()
  const {
    todo,
    ids,
    creates,
    createData,
    updates,
    deletes,
    shows,
    settings,
    datas
  } = props
  useEffect(() => {
    const todo = async () => {
      if (createData !== undefined) setCreateDatas(createData)
      if (datas !== undefined) setDataGet(datas)

    }
    todo()

  }, [props, props.datas])








  const handleAction = (si: any) => {
    console.log(si, "*****")
  }
  return (
    <div className={styles.siderbarup}>
      {
        shows ?
          <Modalnew
            title="Show">
            show
            {/* <Button onClick={() => handleAction(todo)}>Action</Button> */}
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

            <Button onClick={() => handleAction(todo)}>Action</Button>
          </Modalnew>
          : ""
      }
      {
        creates ?
          <Modalnew
            title="Add"
          >
            <div>

              <CreateAutogenerateGeneral
                createDatas={createDatas}
                dataGet={dataGet}
              />
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
