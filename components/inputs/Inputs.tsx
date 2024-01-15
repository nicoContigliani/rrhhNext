import React from 'react'
import { Input } from '@mui/material';
import style from './Inputs.module.css'

const Inputs = (props:  any) => {
    console.log("🚀 ~ Inputs ~ props:", props)
    const { data, setData } = props
    const handlechange = (e: any) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    return (
        <Input {...props} className={`${props.className}`} onChange={handlechange} />
    )
}

export default Inputs