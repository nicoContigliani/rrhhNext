"use client"



import React, { useEffect, useRef, useState } from 'react';


import Select, { SelectChangeEvent } from '@mui/material/Select';

import ButonGeneralModal from '@/components/GeneralComponents/CRUDGeneral/ButonGeneralModal/ButonGeneralModal'



import styles from './selectCrud.module.css'
import Inputs from '@/components/inputs/Inputs';

import Form from 'react-bootstrap/Form';

const Selectcrud = (props: any) => {
    const { todoSelect, data, setData } = props


    // console.log("🚀 ~ onChange ~ todoSelect[0].ids:", todoSelect[0].ids)

    const [age, setAge] = React.useState('');

    const handleChanges = (event: SelectChangeEvent) => {
        setSelectedValue(event.target.value);
    };

    // const [data, setData] = useState<any | any[] | undefined>()
    const [dataArray, setDataArray] = useState<any | any[] | undefined>(todoSelect)
    const [dataArrayFilter, setDataArrayFilter] = useState<any | any[] | undefined>(todoSelect)
    const [dataFilterComponente, setDataFilterComponente] = useState<any | any[] | undefined>(todoSelect)
    const [selectedValue, setSelectedValue] = useState<any | any[] | undefined>('');

    useEffect(() => {
        // if (data === undefined && data?.sertch === undefined) setDataArray(todoSelect)
        if (data !== undefined && data?.sertch !== undefined) {

            const todoReturn = async () => {
                const dataFilterReturn = dataArray?.filter((item: any) => (parseInt(data.sertch) === item.value || item.label.includes(data?.sertch)))
                if (dataFilterReturn.length > 0) await setDataArrayFilter(dataFilterReturn)
            }
            todoReturn()
        }
    }, [data])


    useEffect(() => {
        setDataFilterComponente(dataArrayFilter?.length !== 0 ? dataArrayFilter : dataArray)
    }, [dataArrayFilter, props])


    useEffect(() => {

    }, [dataArrayFilter.length === 1])



    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement | any>) => {
        const value = e.target.value;
        setSelectedValue(value);
    };

    useEffect(() => {
        if (selectedValue !== undefined) {

            setData({
                ...data,
                [dataFilterComponente[0].ids]: selectedValue,
            });
        }
    }, [selectedValue])


    return (
        <div className={styles.body}>
            {/* <div className={styles.selects}> */}

                {
                    dataArray &&
                    <div className={styles.selects}>
                        <div className={styles.inputs}>
                            <Inputs
                                className={styles.input}
                                data={data}
                                setData={setData}
                                placeholder={(dataFilterComponente[0] !== undefined) ? `Search ${dataFilterComponente[0]?.titleModal}` : "Serch"}
                                name="sertch"
                                type={"text"}
                                autoFocus={true}
                                
                                minLength={''} color={''} defaultValue={undefined} disabled={false} fullWidth={false} id={''} inputComponent={undefined} multiline={false} label={''} rows={''}
                            />
                        </div>

                            <div className={styles.custom_select}>

                                {dataFilterComponente.length !== 1 ? (
                                    <Form.Select aria-label="Default select example" size="sm" onChange={handleSelectChange} value={selectedValue}>
                                        {dataFilterComponente.map((option: any | any[]) => (
                                            <option key={option.value} value={option.value}>
                                                {option.value}  {option.label}
                                            </option>
                                        ))}
                                    </Form.Select>
                                ) : (
                                    <div onClick={() => setSelectedValue(dataFilterComponente[0].value)}>{dataFilterComponente[0].label}</div>
                                )}

                            </div>

                    </div>
                }
            {/* </div> */}
        </div>
    );
};

export default Selectcrud;