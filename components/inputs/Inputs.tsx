import React from 'react'
import { Input } from '@mui/material';
import style from './Inputs.module.css'
import { Switch } from 'antd';

const Inputs = (props: any) => {
    const { data, setData, type } = props
    console.log("🚀 ~ Inputs ~ data:", data)

    const handlechange = (event: any) => {
        const trimmedValue = event.target.value.trim(); // Trim leading and trailing spaces
        setData({
            ...data,
            [event.target.name]: trimmedValue,
        });
    };

    const handleSwitchChange = (checked: boolean) => {
        setData({
            ...data,
            [props.name]: checked, // Update data state with boolean value for switch
        });
    };


    return (
        <div>

            {(type === 'text' || type === 'number' || type === 'email'||type==='password' ||type==='date') ?

                <Input {...props}
                    className={`${props.className}`}
                    onChange={handlechange}
                    type={type ? type : 'text'}
                />
                :
                <div>
                    <br />
                    <Switch
                        unCheckedChildren="Desactive"
                        checkedChildren="Active"
                        // defaultChecked
                        onChange={handleSwitchChange} />
                </div>

            }



        </div>
    )
}

export default Inputs