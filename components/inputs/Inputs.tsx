import React from 'react'
// import { Input } from '@mui/material';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize'; // Import TextareaAutosize

import styles from './Inputs.module.css'




import { styled } from '@mui/system';


import style from './Inputs.module.css'
import { Switch } from 'antd';

const Inputs = (props: any) => {
    console.log("🚀 ~ Inputs ~ props:", props.type)




    const { data, setData, type } = props
    const handlechange = (event: any) => {
        try {
            const funtionReuire = () => {
                const trimmedValue = event?.target?.value?.trim(); // Trim leading and trailing spaces
                setData({
                    ...data,
                    [event?.target?.name]: trimmedValue,
                });

            }
            funtionReuire()

        } catch (error) {
            console.log("🚀 ~ Inputs ~ error:", error)
        }
    };

    const handleSwitchChange = (checked: boolean) => {

        try {
            const funtionReuire = () => {

                setData({
                    ...data,
                    [props.name]: checked, // Update data state with boolean value for switch
                });
            }
            funtionReuire()
        } catch (error) {
            console.log("🚀 ~ handleSwitchChange ~ error:", error)

        }

    };





    return (
        <div style={{ width: '100%' }}>
            {/* {(type === 'text' || type === 'bigint' || type === 'number' || type === 'email' || type === 'password' || type === 'date' || type === 'datetime-local' || type === 'description_steps') ?

                (type === 'description_steps') ?
                    <div
                    >
                        <br />
                        <TextareaAutosize
                            variant="standard"
                            size="small"
                            className={styles.textarea}
                            label={props?.name}
                            onChange={handlechange}
                            autoFocus={true}
                            {...props}
                        />
                        - {props?.name}-

                    </div>
                    :

                    <TextField
                        {...props}
                        variant="standard"

                        size="small"
                        fullWidth

                        className={`${props.className}`}
                        label={props?.name}
                        onChange={handlechange}
                        type={type ? type : 'text'}
                        autoFocus={true}

                    />
                :
                <div>
                    <br />
                    <span style={{
                        color: "grey",
                        paddingRight: '5px',
                        fontSize: 'small',
                        fontFamily: 'Arial, Helvetica, sans-serif'
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

            } */}

            {
                type === 'description_steps' &&
                <div
                >
                    <br />
                    <TextareaAutosize
                        variant="standard"
                        size="small"
                        className={styles.textarea}
                        label={props?.name}
                        onChange={handlechange}
                        autoFocus={true}
                        {...props}
                    />
                    - {props?.name}-

                </div>
            }
            {
                (type === 'boolean' || type === 'checkbox') &&
                <div>
                    <br />
                    <span style={{
                        color: "grey",
                        paddingRight: '5px',
                        fontSize: 'small',
                        fontFamily: 'Arial, Helvetica, sans-serif'
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

            {
                (type === 'text' || type === 'bigint' || type === 'number' || type === 'email' || type === 'password') &&
                <TextField
                    {...props}
                    variant="standard"

                    size="small"
                    fullWidth

                    className={`${props.className}`}
                    label={props?.name}
                    onChange={handlechange}
                    type={type ? type : 'text'}
                    autoFocus={true}

                />
            }
            {
                (type === 'date' || type === 'datetime-local' || type === 'description_steps') &&
                <div>

                    <TextField
                        {...props}
                        variant="standard"

                        size="small"
                        fullWidth

                        className={`${props.className}`}
                        label={props?.name}
                        onChange={handlechange}
                        type={type ? type : 'text'}
                        autoFocus={true}

                    />
                </div>
            }



        </div>
    )
}

export default Inputs