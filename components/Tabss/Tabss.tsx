"use client"
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import style from '@/components/Tabss/tabss.module.css'

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DescriptionS from '../Descriptions/Descriptions';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




const Tabss = (props: any) => {


  const { todo } = props
  const { todo: { Sections } } = props
  const [data, setData] = useState()


  const [sectionsS, setSectionsS] = useState<any | any[] | undefined>()
  const [dataStructure, setDataStructure] = useState<any | any[]>()
  const [dataItem, setDataItem] = useState<any | any[] | undefined>()



  useEffect(() => {
    setData(todo)

  }, [props])
  useEffect(() => {
    const SectionsSync = async () => {
      if (Sections) {
        const dataR = await (Sections?.slice()?.reverse())
        await setSectionsS(dataR)
      }
    }
    SectionsSync()
  }, [props])

  useEffect(() => {
    let elementMap = sectionsS?.map((section: { title: any; Items: any; }) => ({
      label: section.title,
      content: [...section.Items].reverse(),
    })); // Use optional chaining and nullish coalescing
    setDataStructure(elementMap)
  }, [props, sectionsS])


  const handleSend = (dataSend: any) => {
    setDataItem(dataSend)
  }
  const handleSendTodo = () => {
    const allContent = []?.concat(...dataStructure?.map((item: any) => item.content));
    handleSend(allContent);
  }

  useEffect(() => {
    if (dataStructure) {
      handleSendTodo();
    }
  }, [dataStructure]);




  return (
    <Container fluid>

      <div className={style.body}>
        <div className={style.sider}>
          <div
            className={style.sliderItem}
            onClick={() => handleSendTodo()}
            key="alpha">
            <h3 >Todo</h3>
          </div>
          {
            dataStructure?.map((item: any) => (
              <div
                className={style.sliderItem}
                onClick={() => handleSend(item.content)}
                key={item?.label}>
                <h3 >{item?.label}</h3>
              </div>
            ))
          }
        </div>
        <div className={style.bodySlice}>
          {
            dataItem?.length > 0 ?
              <DescriptionS todo={dataItem} /> : "Elija"
          }
        </div>


      </div>
    </Container>
  )
}

export default Tabss
