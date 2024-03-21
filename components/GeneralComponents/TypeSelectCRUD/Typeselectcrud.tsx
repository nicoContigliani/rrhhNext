"use client"

import React, { useState } from 'react'
import SelectGeneral from '../SelectGeneral/SelectGeneral'
import { DownOutlined } from '@ant-design/icons'

const Typeselectcrud = (props: any) => {
    const {
        sources,
        placeholder,
        MAX_COUNT,
        datakey,
        objectKeys
    } = props
    const [data, setData] = useState<any | any[]>()





    return (
        <div>
            <SelectGeneral
                // defaultValue=""
                // size="small"
                allowClear
                mode="single"
                showSearch
                placeholder={placeholder}
                style={{ width: 200 }}
                data={data}
                setData={setData}
                options={sources}
                MAX_COUNT={MAX_COUNT}
                IType="text"
                datakey={datakey}
                objectKeys={objectKeys}
            />
        </div>
    )
}

export default Typeselectcrud
