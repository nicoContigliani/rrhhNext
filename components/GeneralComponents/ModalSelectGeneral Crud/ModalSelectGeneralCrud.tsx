import React, { useEffect, useMemo, useState } from 'react';
import diccionaryRoutesAndComponents from '@/diccionaryDataKey/diccionaryRoutesAndComponents.json'

type DictionaryRoutesAndComponents = typeof diccionaryRoutesAndComponents;
type DataTitle = keyof DictionaryRoutesAndComponents;

import styles from './modal.module.css'
const style = {
    position: 'absolute' as 'absolute',
    top: '47vh',
    left: '50vw',
    transform: 'translate(-50%, -50%)',
    width: 'calc(58vw - 48px)', // Adjust for desired padding (24px * 2)
    // Height:'calc(50vw - 48px)',
    minWidth: '343px', // Set minimum width for smaller screens
    backgroundColor: 'rgba(255, 255, 255, 0.001)',
    borderRadius: '10px',
    boxShadow: 'inset 0 0 0 0px rgba(0, 0, 0, 0.3)', // Adjust colors and size as needed
    padding: '1px',
    zIndex: 800,
    color: 'white',
    fontFamily: 'Arial, Helvetica, sans-serif'
};
import { useDispatch, useSelector } from 'react-redux';


import { Button, Input } from 'antd';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Inputs from '@/components/inputs/Inputs';
import { CloseOutlined, PlusOutlined } from '@ant-design/icons';
import { rulesType, rulesWordStartStatus } from '@/services/formaterInputs.services';
import { fetchCrud } from '@/redux/features/CRUD/crudSlice';
import Selectcrud from '../CRUDGeneral/SelectCrud/Selectcrud';
import { Height } from '@mui/icons-material';
import dataFetchForSelectService from '@/services/dataFetchForSelect.service';





const ModalSelectGeneralCrud = (props: any) => {

    const dispatch = useDispatch();


    const [open, setOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { objectKeys, IType, modalTitles, pathCrud } = props
    const [data, setData] = useState<any | any[]>()
    const [dataObjectKeys, setDataObjectKeys] = useState<any | any[] | undefined>()
    const [selectDataSources, setSelectDataSources] = useState<any | any[] | undefined>();
    const [dataSelectSecondary, setDataSelectSecondary] = useState<any | any[] | undefined>()



    useEffect(() => {
        const todoAsync = async () => {
            try {
                const dataReturnFilter = objectKeys?.filter((item: any) => item.title !== "key" && item.title !== "id" && item.title !== "createdAt" && item.title !== "updatedAt")
                setDataObjectKeys(dataReturnFilter)
                
            } catch (error) {

            }
            try {
                const dataWithIdForSelect = objectKeys?.filter((item: any) => item.title.includes("Id") && item.title !== "interviewTypeId");
                setSelectDataSources(dataWithIdForSelect)
            } catch (error) {

            }


        }
        todoAsync()
    }, [props?.objectKeys])


    console.log("🚀 ~ todoAsync ~ objectKeys:", objectKeys)
    



    const handlechange = (value: any) => {
        // setData(value)
    }

    const Send = () => {
        alert("si")

    }
    const showModal = () => {
        setIsModalOpen(!isModalOpen);
    };


    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    useEffect(() => {

    }, [])


    const todoD: any[] = [];

    const processDataSources = async () => {
        if (selectDataSources) {

            try {
                const dataR = await dataFetchForSelectService({ selectDataSources, dispatch });
                setDataSelectSecondary(dataR);
                todoD.push(dataR);
            } catch (error) {
                console.error("Error fetching data for select:", error);
            }

        }
    };

    useEffect(() => {
        processDataSources();
    }, [selectDataSources]); // Runs only when selectDataSources changes

    return (

        <div className={styles.body}>
            <div className={styles.button}>
                <Button onClick={handleOpen}>Create Item {modalTitles}</Button>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"

            >
                <Box sx={style}>

                    <Typography id="modal-modal-description" sx={{ mt: 0 }}>

                        <div onClick={handleClose} className={styles.close}>
                            <CloseOutlined />
                        </div>

                        Create {modalTitles && modalTitles}
                        <div className={styles.modal2}>

                            {props &&
                                dataObjectKeys?.map((item: any, index: number) => (
                                    <div>
                                        <div key={index} className={styles.input}>
                                            {

                                                (item.title === "key" || item.title === "id" || item.title === "createdAt" || item.title === "updatedAt") ? null :

                                                    (
                                                        item.title !== "interviewTypeId"
                                                        &&
                                                        item.title.includes('Id')
                                                    ) ?
                                                        // `${item.title}`
                                                        <div className={styles.selects}>

                                                            {
                                                                dataSelectSecondary && dataSelectSecondary?.map((item: any) =>
                                                                    <div key={item?.key || item?.dataIndex}>


                                                                        <Selectcrud
                                                                            data={data}
                                                                            setData={setData}
                                                                            todoSelect={item}
                                                                        />
                                                                    </div>
                                                                )
                                                            }
                                                        </div>
                                                        :
                                                        <div
                                                            className={styles.inputs}
                                                        >
                                                            <Inputs
                                                                name={item && item?.title}
                                                                placeholder={item && item?.title}
                                                                className={props?.className}
                                                                data={data}
                                                                setData={setData}
                                                                fullWidth
                                                                block

                                                                // type={item && item.types === "string" ? "text" : item.types}
                                                                type={
                                                                    rulesWordStartStatus(item.title) ||
                                                                    rulesType(item)}
                                                            />
                                                        </div>
                                            }
                                        </div>


                                    </div>
                                ))}

                        </div>

                        <Button
                            className={styles.buttons}
                            style={{ padding: '1px 20px' }}
                            onClick={Send}
                            block
                            type='primary'

                        >
                            <PlusOutlined />
                            <br />
                        </Button>

                    </Typography>
                </Box>
            </Modal>
        </div >
    )
}

export default ModalSelectGeneralCrud

