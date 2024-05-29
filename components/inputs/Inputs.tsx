import React from 'react'
// import { Input } from '@mui/material';
import TextField from '@mui/material/TextField';

import style from './Inputs.module.css'
import { Switch } from 'antd';

const Inputs = (props: any) => {
    console.log("🚀 ~ Inputs ~ props:", props.type)
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
        <div style={{width:'100%'}}>
            {(type === 'text' ||  type === 'bigint'|| type === 'number' || type === 'email' || type === 'password' || type === 'date' || type === 'datetime-local') ?

                <TextField {...props}
                    variant="standard"
                    size="small"
                    fullWidth

                    className={`${props.className}`}
                    label={props?.name}
                    onChange={handlechange}
                    type={type ? type : 'text'}

                />
                :
                <div>
                    <br />
                    <span style={{
                        color:"grey",
                        paddingRight:'5px',
                        fontSize:'small',
                        fontFamily:'Arial, Helvetica, sans-serif'
                        }}>
                            {props?.name}
                        <small>
                        </small>
                    </span>
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