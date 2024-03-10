"use client"

import React, { useState } from 'react'
import styles from './ResourceManagement.module.css'
import Inputs from '@/components/inputs/Inputs'
import TextsArea from '@/components/TextArea/TextsArea'
import { Button, Flex, Select, Space } from 'antd'

import { SizeType } from 'antd/es/config-provider/SizeContext'
import { useRouter } from 'next/navigation'
import Modalsecurity from '@/components/ModalSecurity/Modalsecurity'
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Switch } from 'antd';
import Switchs from '@/components/switchinputs/Switchs'
import TabsGeneric from '@/components/GeneralComponents/GeneralTabs/TabsGeneral'

import type { TabsProps } from 'antd';
import CreateResource from './CreateResources/CreateResource'



const Page = () => {
    const router = useRouter()



    const [data, setData] = useState<any>([])

    const [size, setSize] = useState<SizeType>('small'); // default is 'middle'

    const [openTable, setOpenTable] = useState(true)




    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };


    const onChange = (checked: boolean) => {
        console.log(`switch to ${checked}`);
    };

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'Create Resources',
            children: <CreateResource/>,
        },
        {
            key: '2',
            label: 'Tab 2',
            children: 'Content of Tab Pane 2',
        },
        {
            key: '3',
            label: 'Tab 3',
            children: 'Toma por mirón 3',
        },
    ];



    return (
        <div className={styles.body}>
            <div className={styles.title}>
                <h3>Resource Managenent</h3>
            </div>

            <TabsGeneric
                className={styles.bodyTabs}
                items={items}
                defaultActiveKey="1" 
                tabPosition="left"
                // style={{ height: 220 }}
            />

        </div>
    )
}

export default Page
