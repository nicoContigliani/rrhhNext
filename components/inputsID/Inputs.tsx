import React from 'react'
import { Input } from '@mui/material';
import style from './Inputs.module.css'

const InputsId = (props: any) => {
    const { data, setData } = props;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const id = props.id; // Obtener el id del prop
        setData((prevData: any | any[]) => ({
            ...prevData,
            [id]: { // Usar el id como clave en data
                ...prevData[id],
                [name]: value
            }
        }));
    };

    return (
        <Input {...props} className={`${props.className}`} onChange={handleChange} />
    )
}

export default InputsId