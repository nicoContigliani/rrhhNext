
import React, { useEffect, useRef, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Divider, Input, Space } from 'antd';
import { Select } from 'antd';
import type { InputRef } from 'antd';
import styles from './selectCrud.module.css'
import Inputs from '@/components/inputs/Inputs';



const Selectcrud = (props: any) => {




    const { todoSelect } = props
    // console.log("🚀 ~ Selectcrud ~ todoSelect:", todoSelect)
    const onChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    const [selectedValue, setSelectedValue] = useState('');
    const [data, setData] = useState<any | any[] | undefined>()
    const [dataArray, setDataArray] = useState<any | any[] | undefined>(todoSelect)
    const [dataArrayFilter, setDataArrayFilter] = useState<any | any[] | undefined>(todoSelect)


    const handleChange = (event: any) => {
        setSelectedValue(event.target.value);
    };

    useEffect(() => {
        if (data === undefined && data?.sertch === undefined) setDataArray(todoSelect)
        if (data !== undefined && data?.sertch !== undefined) {

            const todoReturn = () => {
                const dataFilterReturn = dataArray?.filter((item: any) => (parseInt(data.sertch) === item.value || item.label.includes(data.sertch)))
                if (dataFilterReturn.length > 0) setDataArrayFilter(dataFilterReturn)
            }
            todoReturn()
        }
    }, [data])


    return (
        <div className={styles.body}>
            <div className={styles.selects}>
                {
                    dataArray &&
                    <div className={styles.selects}>
                        <div className={styles.inputs}>
                            <Inputs
                                className={styles.input}
                                data={data}
                                setData={setData}
                                placeholder="sertch"
                                name="sertch"
                                type={"text"}
                                autoFocus={true}
                                minLength={''} color={''} defaultValue={undefined} disabled={false} fullWidth={false} id={''} inputComponent={undefined} multiline={false} label={''} rows={''}
                            />
                        </div>
                        <div>
                            <div className={styles.custom_select}>
                                <select value={selectedValue} onChange={handleChange}>
                                    {(dataArrayFilter.length > 0 ? dataArrayFilter : dataArray)?.map((option: any) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                                <div className={styles.select_arrow}></div>
                            </div>
                        </div>

                    </div>
                }
            </div>
        </div>
    );
};

export default Selectcrud;