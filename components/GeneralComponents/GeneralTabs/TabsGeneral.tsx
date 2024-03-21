"use client"
import React from 'react'


import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import styles from './tabsGeneric.module.css'



const onChange = (key: string) => {
    console.log(key);
};


const TabsGeneric = (props: any) => {
    return (
        <div className={styles.body}>
            <Tabs {...props} onChange={onChange} />
        </div>
    )
}

export default TabsGeneric
