import { Select } from 'antd'
import React, { useEffect, useState } from 'react'

const Selectscomponent = (props: any) => {
    const { options, dataGeneralUser, dataFilter, setFilteredData } = props

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
        const dataGetAsync = async () => {
            if (Array.isArray(dataGeneralUser)) {
                await setDataGeneralUserProps(dataGeneralUser);
            } else {
                await setDataGeneralUserProps([]);
            }
        }
        dataGetAsync()
    }, [props])

    useEffect(() => {
        if (dataValue && Array.isArray(dataGeneralUser)) {
            const filtered = dataGeneralUser?.filter((item) => item.id === dataValue);
            setFilteredData(filtered);
        } else {
            // Handle cases where dataGeneralUser is not an array
            console.error('dataGeneralUser is not an array');
            // setFilteredData([]); // Or display an appropriate message/error
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
                            style={{ width: 250 }}
                            placeholder="Search to Select"
                            optionFilterProp="children"
                            options={optionsProp}
                            onChange={handleChange}
                            // filterOption={(input, option) => (optionsProp?.label ?? '')?.includes(input)}
                            filterOption={filterOption}


                        />
                        <hr />

                    </div>
                    : ""
            }
        </div>
    )
}

export default Selectscomponent
