import React, { useEffect, useState } from 'react'
import { Descriptions } from 'antd';
import type { DescriptionsProps, TabsProps } from 'antd';
import style from './Descriptions.module.css'


const DescriptionS = (props: any|undefined) => {




  const { todo } = props
  const [data, setData] = useState<any | any[] | undefined>(todo)
  useEffect(() => {
    setData(todo)
  }, [props])


  const items: DescriptionsProps['items'] = [];

  if (data.length > 0) {
    const todoR = data.map((itemIn: any) => {
      console.log("🚀 ~ file: Descriptions.tsx:39 ~ todoR ~ data:", data)
      const {
        itemTitle,
        itemSection: {
          atribute,
          startDate,
          endDate
        }
      } = itemIn

      const toSend = {
        label: itemTitle,
        children: atribute,
        // span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 },
      };
      items.push(toSend);

      console.log("🚀 ~ file: Descriptions.tsx:25 ~ todoR ~ atribute:", itemTitle, atribute, startDate, endDate)
      // console.log("🚀 ~ file: Descriptions.tsx:23 ~ todoR ~ itemTitle:", itemTitle)
    })
  }




  return (
    <div>
      {/* <Descriptions
        title=""
        bordered
        // column={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 4 }}
        items={items}
      /> */}
      {data.map((item: any) => (
        <div>
          <li key={item.id}>{item.itemSection?.title_atribute}:{item.itemSection?.atribute}</li>


        </div>

      ))}





    </div>






  )
}

export default DescriptionS
