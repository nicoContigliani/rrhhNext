import { Input } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Select } from 'antd';
import Spinner from '../spinner/Spinner';
import styles from './inputSertch.module.css'



const InputsSertch = (props: any) => {
    const [dataProp, setDataProp] = useState()
    const [columns, setColumns] = useState<any[]>();
    const [changeHeaders, setChangeHeader] = useState<any>()
    const [headers, setHeader] = useState<any[]>();
    const [headerSelect, setHeaderSelect] = useState<any>()

    const { dataFilter, setDataFilter } = props

    useEffect(() => {
        const todo = async () => {

            const columnsS = props?.dataAll?.Columns;
            const headersS = props?.dataAll?.Header;


            if (props !== undefined) {
                const changeHeader = await headersS?.map((item: any) => {
                    return {
                        value: item,
                        label: item,
                        title: item,
                        disabled: false
                    }
                })
                setChangeHeader(changeHeader)
                setColumns(columnsS)
            }

        }
        todo()

    }, [props]);


    const handlechange = (e: any) => {
        const dataR = columns?.filter((item: any) => (item?.[headerSelect] == e.target.value))
        const todo = e.target.value
        console.log("🚀 ~ handlechange ~ todo:", todo.length)
        if(todo.length===0)setDataFilter([])
        if (dataR?.length !== 0) setDataFilter(dataR)
    }

    const handleChanges = (value: { value: string; label: React.ReactNode }) => {
        setHeaderSelect(value?.value)
    };

    return (
        <div>
            {
                props !== undefined ?
                    <div className={styles.body}>
                        <Select
                            placeholder="Search to filter"
                            labelInValue
                            style={{ width: 230 }}
                            onChange={handleChanges}
                            options={changeHeaders}
                        />
                        <Input {...props} className={`${props.className}`} onChange={handlechange} />
                    </div>
                    :
                    <Spinner />
            }
        </div>


    )
}


export default InputsSertch
