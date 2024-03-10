import React from 'react'
import { Button, Flex, Select, Space } from 'antd'


const SelectGeneral = (props: any) => {
    const { data, setData } = props
    const handleChange = (value: any) => {
        setData(value)
    }
    return (
        <div>
            <Select
                {...props}
                onChange={handleChange}
            />
        </div>
    )
}

export default SelectGeneral
