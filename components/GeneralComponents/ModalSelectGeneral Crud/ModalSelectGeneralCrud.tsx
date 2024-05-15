import React, { useMemo, useState } from 'react';
// import { Button, Input, Modal } from 'antd';

// import { PlusOutlined } from '@ant-design/icons';
// import Inputs from '@/components/inputs/Inputs';
import styles from './modal.module.css'
import Backdrop from '@mui/material/Backdrop';


import { Button, Input } from 'antd';


import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Inputs from '@/components/inputs/Inputs';
import { PlusOutlined } from '@ant-design/icons';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    backgroundColor: 'rgba(255, 255, 255, 0.01)', // Adjust opacity for desired transparency
    borderRadius: '10px',
    boxShadow: 'inset 0 0 0 0px rgba(0, 0, 0, 0.3)', // Adjust colors and size as needed
    padding: '24px',
    zIndex: 800,
    color: 'white',
    fontFamily: 'Arial, Helvetica, sans-serif'
};


const ModalSelectGeneralCrud = (props: any) => {
    const [open, setOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { objectKeys, IType, modalTitles } = props
    const [data, setData] = useState<any | any[]>()
    const [dataObjectKeys, setDataObjectKeys] = useState<any | any[] | undefined>()

    useMemo(() => {
        const todoAsync = async () => {
            const dataReturnFilter = objectKeys?.filter((item: any) => item.title !== "key" && item.title !== "id" && item.title !== "createdAt" && item.title !== "updatedAt")
            setDataObjectKeys(dataReturnFilter)
        }
        todoAsync()
    }, [props])






    const handlechange = (value: any) => {
        // setData(value)
    }

    const Send = () => {

    }
    const showModal = () => {
        setIsModalOpen(!isModalOpen);
    };


    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    objectKeys?.map((item: any, index: number) => console.log("🚀 ~ ModalSelectGeneralCrud ~ item: any, index: number:", item, index)
    )
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

                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Create {modalTitles && modalTitles}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div className={styles.modal2}>

                            {props &&
                                dataObjectKeys?.map((item: any, index: number) => (
                                    <div key={index} className={styles.input}>
                                        {

                                            (item.title !== "key" && item.title !== "id" && item.title !== "createdAt" && item.title !== "updatedAt") ?
                                                <Inputs
                                                    name={item && item?.title}
                                                    placeholder={item && item?.title}
                                                    className={props?.className}
                                                    data={data}
                                                    setData={setData}
                                                    type={item && item.types === "string" ? "text" : item.types}
                                                    block
                                                /> : ""
                                        }
                                    </div>
                                ))}

                        </div>
                        <br />

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
        </div>
    )
}

export default ModalSelectGeneralCrud

