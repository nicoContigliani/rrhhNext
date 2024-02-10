import { Select } from 'antd'
import React, { useEffect, useState } from 'react'

const Selectscomponent = (props: any) => {
    const { options, dataGeneralUser,dataFilter,setFilteredData } = props

    const [dataGeneralUserProps, setDataGeneralUserProps] = useState<any | any[]>()
    const [optionsProp, setOptionsProps] = useState<any | any[]>([])
    const [dataValue, setDataValue] = useState<any[] | any | undefined>()




    useEffect(() => {
        if (Array.isArray(options)) {
            setOptionsProps(options);
        } else {
            setOptionsProps([]);
        }
    }, [props])
    useEffect(() => {
        if (Array.isArray(dataGeneralUser)) {
            setDataGeneralUserProps(dataGeneralUser);
        } else {
            setDataGeneralUserProps([]);
        }
    }, [props])

    useEffect(() => {
        console.log(dataValue);
        // Filter dataGeneralUserProps based on dataValue
        if (dataValue && Array.isArray(dataGeneralUserProps)) {
            const filtered = dataGeneralUser.filter((item: any) => item.id === dataValue);
            setFilteredData(filtered);
        } else {
            setFilteredData([]);
        }
    }, [dataValue, dataGeneralUser]);


    const handleChange = (value: string) => {
        setDataValue(value)
    };
    const filterOption = (input: string, option: any) => {
        return option?.label.toLowerCase()?.includes(input.toLowerCase());
    };

    return (
        <div>
            {
                optionsProp?.length !== 0 ?
                    <div>
                        <Select
                            showSearch
                            defaultValue=''
                            style={{ width: 400 }}
                            placeholder="Search to Select"
                            optionFilterProp="children"
                            options={optionsProp}
                            onChange={handleChange}
                            // filterOption={(input, option) => (optionsProp?.label ?? '')?.includes(input)}
                            filterOption={filterOption}


                        />
                    </div>
                    : ""
            }
            {
                dataValue ? dataValue : ""
            }
        </div>
    )
}

export default Selectscomponent
