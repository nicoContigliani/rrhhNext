import React, { useEffect, useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Radio, Tabs } from 'antd';
import type { TabsProps } from 'antd';

const Tabss = (props: any) => {
  const { todo } = props
  console.log("🚀 ~ file: Tabss.tsx:8 ~ Tabss ~ todo:", todo)
  const [data, setData] = useState()
  useEffect(() => {
    setData(todo)
  }, [props])


  const [mode, setMode] = useState<any>('left');

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Tab 1',
      children: 'Content of Tab Pane 1',
    },
    {
      key: '2',
      label: 'Tab 2',
      children: 'Content of Tab Pane 2',
    },
    {
      key: '3',
      label: 'Tab 3',
      children: 'Content of Tab Pane 3',
    },
  ];


  const onChange = (key: string) => {
    console.log("🚀 ~ file: Tabss.tsx:37 ~ onChange ~ key:", key)
  };

  return (
    <div>

      {
        !data ?
          <Tabs
            defaultActiveKey="1"
            tabPosition={mode}
            style={{ height: 220 }}
            items={items} onChange={onChange}
          /> : ""
      }

    </div>
  )
}

export default Tabss
