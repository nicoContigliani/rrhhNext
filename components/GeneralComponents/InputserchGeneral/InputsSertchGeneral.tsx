import { Input } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Select } from 'antd';
import Spinner from '../../spinner/Spinner';
import styles from './inputSertch.module.css'



const InputsSertchGeneral = (props: any) => {
    const [dataProp, setDataProp] = useState()
    const [columns, setColumns] = useState<any[]>();
    const [changeHeaders, setChangeHeader] = useState<any>()
    const [headers, setHeader] = useState<any[]>();
    const [headerSelect, setHeaderSelect] = useState<any>()
    const [headerColumnsS, setHeaderColumns] = useState<any | any[]>()
    const {
        columnsS,
        dataSourceS,
        headerColumns,
        setDataFilter
    } = props


    useEffect(() => {
        const todo = async () => {
            await setChangeHeader(columnsS)
            await setColumns(dataSourceS)
            await setHeaderColumns(headerColumns)
        }
        todo()

    }, [props]);


    const handlechange = (e: any) => {
        const dataR = columns?.filter((item: any) => (item?.[headerSelect] == e.target.value))
        const todo = e.target.value
        //  console.log("🚀 ~ handlechange ~ todo:", todo.length)
        if (todo.length === 0) setDataFilter([])
        if (dataR?.length !== 0) setDataFilter(dataR)
    }

    const handleChanges: any | any[] = (value: { value: string; label: React.ReactNode }) => {
        setHeaderSelect(value?.value)
    };

    return (
        <div>
            <div className={styles.body}>
                {
                    (handleChanges || headerColumnsS) ?
                        <Select
                            placeholder="Search to filter"
                            labelInValue
                            style={{ width: 290 }}
                            onChange={handleChanges}
                            options={headerColumnsS?.map((header: any) => ({ value: header, label: header }))}
                        />



                        : <Spinner />

                }
                {
                    props !== undefined ?

                        <Input {...props}
                            className={`${props.className}`}
                            onChange={handlechange}
                            placeholder='Serch'
                        />
                        :
                        <Spinner />
                }
            </div>
        </div>


    )
}


export default InputsSertchGeneral
