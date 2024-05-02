import Modalnew from '@/components/steps/componentSteps/ModalNew/Modalnew'
import { Button } from 'antd'
import React from 'react'
import styles from './buttonGeneral.module.css'

const ButonGeneralModal = (props: any) => {
  const {
    todo,
    ids,
    creates,
    updates,
    deletes,
    shows,
    settings
  } = props
  const handleAction = (si: any) => {
    console.log(si, "*****")
  }
  return (
    <div className={styles.siderbarup}>
      {
        shows ?
          <Modalnew
            title="Show">

            <Button onClick={() => handleAction(todo)}>Action</Button>
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
            title="Add">

            <Button onClick={() => handleAction(todo)}>Action</Button>
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
