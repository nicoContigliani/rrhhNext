import React, { useState } from 'react';
// import { Button, Input, Modal } from 'antd';

// import { PlusOutlined } from '@ant-design/icons';
// import Inputs from '@/components/inputs/Inputs';
import styles from './modal.module.css'


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
    zIndex: 1000,
    color: 'white',
    fontFamily:'Arial, Helvetica, sans-serif'
};


const ModalSelectGeneralCrud = (props: any) => {
    const [open, setOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { objectKeys, IType } = props
    console.log("🚀 ~ ModalSelectGeneralCrud ~ objectKeys:", objectKeys)
    const [data, setData] = useState<any | any[]>()

    const handlechange = (value: any) => {
        console.log("🚀 ~ handleChange ~ value:", value)
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
        // <div className={styles.body}>
        //     <div className={styles.button}>
        //         <Button
        //             // type="primary" 
        //             // onClick={() => setOpen(true)}
        //             onClick={showModal}
        //             icon={<PlusOutlined />}
        //         >
        //             Add item
        //         </Button>
        //     </div>
        //     <Modal
        //         className={styles.modal}
        //         title="Add Items"
        //         // centered
        //         // open={open}
        //         open={isModalOpen}
        //         centered
        //         // open={open} // Descomenta esta línea
        //         footer={null}
        //         onOk={() => setOpen(false)}
        //         onCancel={() => setOpen(false)}
        //     // width={1000}
        //     >
        //         {/* {props &&
        //             objectKeys?.map((item: any, index: number) => ( // Agregar un índice único para cada elemento
        //                 <div key={index}>
        //                     {
        //                         (item === 'id' || item === 'createdAt' || item === 'updatedAt') ? "" :

        //                             <Inputs
        //                                 name={item || item?.title}
        //                                 placeholder={item || item?.title}
        //                                 className={props?.className}
        //                                 data={data}
        //                                 setData={setData}
        //                                 // type={item?.includes("status") ? "bolean" : IType || item?.types}
        //                                 block
        //                             />
        //                     }



        //                     <br />
        //                 </div>
        //             ))}
        //         <br />
        //         <Button
        //             onClick={Send}
        //             block
        //             type='primary'
        //         >
        //             <PlusOutlined />
        //         </Button> */}
        //     </Modal>
        // </div>
        <div className={styles.body}>
            <div className={styles.button}>
                <Button onClick={handleOpen}>Open modal</Button>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div className={styles.modal2}>
                     
                            {props &&
                                objectKeys?.map((item: any, index: number) => (
                                    <div key={index} className={styles.input}>
                                        {
                                            (item === 'id' || item === 'createdAt' || item === 'updatedAt') ? "" :
                                                <Inputs
                                                    name={item && item?.title}
                                                    placeholder={item && item?.title}
                                                    className={props?.className}
                                                    data={data}
                                                    setData={setData}
                                                    type={item && item.types === "string" ? "text" : item.types}
                                                    block
                                                />
                                        }
                                    </div>
                                ))}
                             <br />
                             <br />
                           <hr />
                            <Button
                                style={{ padding: '10px 20px' }}
                                onClick={Send}
                                block
                                type='primary'
                            >
                                <PlusOutlined />
                            </Button>
                        </div>
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}

export default ModalSelectGeneralCrud

