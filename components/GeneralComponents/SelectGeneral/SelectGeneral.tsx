"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Button, Flex, Select, Space } from 'antd'
import type { InputRef } from 'antd';
import ModalSelectGeneral from '../ModalSelectGeneral/ModalSelectGeneral';
import styles from './selectGeneral.module.css'

const SelectGeneral = (props: any) => {
    const { data, setData, sources, MAX_COUNT, IType, datakey, objectKeys } = props
    const [sourcesData, setSourcesData] = useState<any | any[]>(0)
    const [showAdd, setShowAdd] = useState<any | any[]>(false)
    useEffect(() => {
        setSourcesData(sources)
    }, [sources])

    const inputRef = useRef<InputRef>(null);

    const [dataFilter, setDataFilter] = useState<any | any[]>()

    const [value, setValue] = React.useState<string[]>([]);



    return (




        <div className={styles.body}>


            <Select
                {...props}

                defaultValue={value}
                optionFilterProp="label"
                placeholder="Please select"
                onChange={setValue}
                dropdownRender={(menu) => (
                    <>
                        {menu}
                        <Space style={{ padding: '0 8px 4px' }}>
                            <div className={styles.modal}>
                                <ModalSelectGeneral
                                    objectKeys={objectKeys}
                                    IType={IType}
                                />

                            </div>
                        </Space>
                    </>
                )}

            />

            <br />


            <br />





        </div>
    )
}

export default SelectGeneral
