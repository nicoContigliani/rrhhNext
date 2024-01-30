import { Switch } from 'antd'
import React from 'react'

const Switchs = (props:  any) => {
    const { data, setData } = props
    console.log("🚀 ~ Switchs ~ data:", data)
    const handlechange = (e: any) => {
        setData({
            ...data,
            [props.name]: e
        })
    }
    return (
        <div>
            <Switch  {...props} className={`${props.className}`} onChange={handlechange}  />

        </div>
    )
}

export default Switchs
