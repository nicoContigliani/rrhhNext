import React, { useEffect, useState } from 'react'

import style from './LenguajeStep.module.css'
import Inputs from '@/components/inputs/Inputs';
import uuid from 'react-uuid';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Lenguaje = (props: any) => {
    const { formData, setFormData, inputsLenguaje, setInputsLenguaje } = props
    const [data, setData] = useState<any | any[] | undefined>()
    useEffect(() => {

        if (data && data?.fullname && data?.email && data?.phone && data?.birthday) {
            console.log("llega")
            setFormData({
                ...data,
                formData
            })
        }
    }, [data])

    const handleClick = () => {
        const newInput = {
            value: "",
            id: uuid()
        };
        setInputsLenguaje([...inputsLenguaje, newInput]);
    };
    const handleDeleteClick = (idData: any) => {
        const dataReturn = inputsLenguaje.filter((idS: any) => idS.id !== idData)
        setInputsLenguaje(dataReturn)
    }



    return (
        <div className={style.body}>
            <h3 className={style.titles}>
                {props.title}
            </h3>

            {inputsLenguaje?.map((input: any) => (
                <div>
                    <Inputs
                        className="inputs"
                        data={data}
                        setData={setData}
                        placeholder="Lenguaje"
                        name="lenguaje"
                        type={''}
                        minLength={''} autoFocus={false} color={''}
                        defaultValue={formData?.lenguaje}
                        disabled={false}
                        fullWidth={false}
                        id={''}
                        inputComponent={undefined} multiline={false}
                        label={''} rows={''}
                        required
                    />



                    <div className={style.deletes}>
                        <Button variant="outlined" color="error" size="small" fullWidth
                            onClick={() => handleDeleteClick(input?.id)}
                        >
                            Delete
                        </Button>
                    </div>
                </div>

            ))}
            <div>
                <div className={style.createInputs}>
                    <Button variant="outlined" color="primary" size="small" fullWidth
                        onClick={handleClick}>Crear input</Button>
                </div>

            </div>


        </div>
    )
}

export default Lenguaje
