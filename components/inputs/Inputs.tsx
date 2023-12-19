import React from 'react'
import { Input } from '@mui/material';


const Inputs = (props:  any) => {
    const { data, setData } = props
    const handlechange = (e: any) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    return (
        <Input {...props} onChange={handlechange} />
    )
}

export default Inputs