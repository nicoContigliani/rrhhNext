import React, { useEffect, useState } from 'react'
import styles from './inputSertch.module.css'
import InputGeneral from '../InputGeneral/InputGeneral';
import InputsId from '@/components/inputsID/Inputs';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { createCrud, fetchCrud, updateCrud } from '@/redux/features/CRUD/crudSlice';
import { RootState } from '@/redux/store';
import Messages from '@/components/Messages/Messages';




export interface FetchCrudData {
    urlGeneral: string | any;
    methods: string;
    body?: any | any[]; // Tipo específico para el cuerpo de la solicitud
    idParams?: string;
}




const InputsUpdateGeneralAll = (props: any) => {
    const dispatch = useDispatch();

    const { dataObjectCreate, data, setData, todo, urlGeneral } = props;
    const [dataToSend, setDataToSend] = useState<any | any[] | undefined>()
    console.log("🚀 ~ InputsUpdateGeneralAll ~ dataToSend:", dataToSend)
    const id = todo['id']

    const [content, setContent] = useState<any>()
    const [keys, setKeys] = useState<any | any[]>()
    const [loadings, setLoadins] = useState<any | any[]>()


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        const dataReturn = (prevData: any) => {
            const newData = { ...prevData };

            if (newData[name] !== value) {
                delete newData[name];
                newData[name] = value;
            }
            newData.id = newData.id || id;

            return newData;
        }

        setData(dataReturn);
        setDataToSend(dataReturn);
    };

    useEffect(() => {
        const dataR = (prevData: any) => ({
            ...prevData,
            ...todo
        })
        setData(dataR);
        setDataToSend(dataR)
    }, [todo, setData, setDataToSend]);


    // const handleShowNewData = () => {
    //     const todoCRUDGet: FetchCrudData = {
    //         urlGeneral: "/Company/Company/",
    //         methods: 'GET',
    //         body: "",
    //         idParams: "",
    //     };
    //     const todoS = CrudDataAdapter(todoCRUDGet)
    // };


    const onclickUpdate = () => {
        const todoCRUD = {
            urlGeneral: urlGeneral,
            methods: 'POST',
            body: dataToSend,
            idParams: id,
        }
        dispatch(updateCrud(todoCRUD))
        location.reload()
    }

    const onclickGet = () => {
        const todoCRUD = {
            urlGeneral: urlGeneral,
            methods: 'GET',
            body: "",
            idParams: "",
        }
        dispatch(updateCrud(todoCRUD))
    }




    const dataCrud: any | any[] | undefined = useSelector((state: RootState) => state.crud?.dataCrud);
    const loading = useSelector((state: RootState) => state.crud.loading);
    const message = useSelector((state: RootState) => state.crud.message);
    const httpStatus = useSelector((state: RootState) => state.crud.httpStatus);


    useEffect(() => {
        setContent(message)
        setKeys(httpStatus)
        setLoadins(loading)

    }, [])

    return (
        <div className={styles.body}>
            {dataObjectCreate.map((item: any) => (
                <InputGeneral
                    key={item.element}
                    data={data}
                    handleInputChange={handleInputChange}
                    defaultValue={todo[item.element]}
                    placeholder={item.element}
                    name={item.element}
                    type={item.type}
                />
            ))}
          
            <Button onClick={onclickUpdate}
                className={styles.button}
                block
            >Update</Button>

            {/* {
                httpStatus ? "si" : "no"
            } */}

        </div>
    )
}

export default InputsUpdateGeneralAll



