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





    return (
        <div className={styles.body}>
            <div className={styles.title}>
                <h3>Resource Managenent</h3>
            </div>

            <div className={styles.inputsGroup}>


                <Space wrap>
                    <Select
                        defaultValue="Google"
                        style={{ width: 820 }}
                        onChange={handleChange}
                        options={[
                            { value: 'Amazon', label: 'Amazon' },
                            { value: 'Google', label: 'Google' },
                            { value: 'Ubuntu', label: 'Ubuntu' },
                            { value: 'Windows', label: 'Disabled', disabled: true },
                        ]}
                    />

                </Space>



                <hr />

                <Inputs
                    className={styles.login_input}
                    data={data}
                    setData={setData}
                    placeholder="Title New Resource"
                    name="titleNewResource"
                    type={''}
                    autoFocus={true}
                    minLength={''} color={''} defaultValue={undefined} disabled={false} fullWidth={false} id={''} inputComponent={undefined} multiline={false} label={''} rows={''}
                />



                <TextsArea
                    className={styles.textArea}
                    data={data}
                    setData={setData}
                    placeholder="Description"
                    name="descriptionNewResource"
                    type={''}
                    minLength={''} autoFocus={false} color={''} defaultValue={undefined} disabled={false} fullWidth={false} id={''} inputComponent={undefined} multiline={false} label={''}
                    rows={4}
                    variant="solid"
                />
                <TextsArea
                    className={styles.textArea}
                    data={data}
                    setData={setData}
                    placeholder="responsibilities New Resource"
                    name="responsibilitiesNewResource"
                    type={''}
                    minLength={''} autoFocus={false} color={''} defaultValue={undefined} disabled={false} fullWidth={false} id={''} inputComponent={undefined} multiline={false} label={''} rows={''}
                    minRows={4}
                    variant="soft"

                />
                <TextsArea
                    className={styles.textArea}
                    data={data}
                    setData={setData}
                    placeholder="Requirements New Resource"
                    name="requirementsNewResource"
                    type={''}
                    minLength={''} autoFocus={false} color={''} defaultValue={undefined} disabled={false} fullWidth={false} id={''} inputComponent={undefined} multiline={false} label={''} rows={''}
                    minRows={4}
                    variant="soft"

                />
                <Switchs
                    className={styles.textArea}
                    data={data}
                    setData={setData}
                    placeholder="Description"
                    name="statusSerchnNewResource"
                    checkedChildren="Active" unCheckedChildren="desactive" defaultChecked
                />


            </div>
            <div className={styles.buttonsGroup}>
                <Flex gap="small" wrap="wrap">
                    <Modalsecurity
                        className={styles.button}
                        size="small"
                    />


                    <Button className={styles.button} size="small" >Clean</Button>
                    <Button className={styles.button} size="small" >Show Table</Button>
                </Flex>
            </div>
            <div className={styles.buttonsGroupReturn} onClick={() => router.push('/talents')}>
                <Button className={styles.button} size="small" block >Return</Button>
            </div>

        </div>
    )
}

export default Page
