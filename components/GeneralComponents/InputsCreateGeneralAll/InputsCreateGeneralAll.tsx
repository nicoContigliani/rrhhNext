import Inputs from '@/components/inputs/Inputs'
import React from 'react'
import styles from './inputSertch.module.css'
import { Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import { createCrud, fetchCrud, updateCrud } from '@/redux/features/CRUD/crudSlice';
import { RootState } from '@/redux/store';


const InputsCreateGeneralAll = (props: any) => {
    const dispatch = useDispatch();

    const { dataObjectCreate, data, setData, urlGeneral } = props
    console.log("🚀 ~ InputsCreateGeneralAll ~ urlGeneral:", urlGeneral)
    console.log("🚀 ~ InputsCreateGeneralAll ~ data:", data)


    const onclickUpdate = () => {
        const todoCRUD = {
            urlGeneral: urlGeneral,
            methods: 'POST',
            body: data,
            idParams: null,
        }
        console.log("🚀 ~ onclickUpdate ~ todoCRUD:", todoCRUD)
        dispatch(createCrud(todoCRUD))
        location.reload()
    }


    return (
        <div className={styles.body}>
            <div className={styles.divs}>
                {dataObjectCreate.map((item: any) => (
                    <Inputs
                        key={item.element} // Provide a unique key for each element
                        // className={styles.login_input}
                        data={data} // Assuming each item has the properties needed by Inputs
                        setData={setData}
                        placeholder={item.element}
                        defaultValue={item.element}
                        name={item.element}
                        type={item.type} // Set type to 'email' for email inputs
                        // ... other props as needed (minLength, autoFocus, etc.)
                        required={true}
                    />
                ))}
            </div>
            <br /><br />
            <Button className={styles.button}
                onClick={onclickUpdate}
                size="small" block >Create</Button>

        </div>
    )
}

export default InputsCreateGeneralAll



