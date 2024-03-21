import React, { useState } from 'react';
import { Button, Input, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Inputs from '@/components/inputs/Inputs';
import styles from './modal.module.css'



const ModalSelectGeneral = (props: any) => {
    const [open, setOpen] = useState(false);
    const { objectKeys, IType } = props
    const [data, setData] = useState<any | any[]>()

    const handlechange = (value: any) => {
        console.log("🚀 ~ handleChange ~ value:", value)
        // setData(value)
    }

    const Send = () => {

    }


    return (
        <div className={styles.body}>
            <div className={styles.button}>
                <Button
                    // type="primary" 
                    onClick={() => setOpen(true)}
                    icon={<PlusOutlined />}
                >
                    Add item
                </Button>
            </div>
            <Modal
                className={styles.modal}
                title="Add Items"
                // centered
                // open={open}
                centered
                open={open}
                footer={null}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
            // width={1000}
            >
                {props &&
                    objectKeys?.map((item: any, index: number) => ( // Agregar un índice único para cada elemento
                        <div key={index}>
                            {
                                (item === 'id' || item === 'createdAt' || item === 'updatedAt') ? "" :

                                    <Inputs
                                        name={item}
                                        placeholder={item}
                                        className={props.className}
                                        data={data}
                                        setData={setData}
                                        type={item.includes("status") ? "bolean" : IType}
                                        block
                                    />
                            }



                            <br />
                        </div>
                    ))}
                <br />
                <Button
                    onClick={Send}
                    block
                    type='primary'
                >
                    <PlusOutlined />
                </Button>
            </Modal>
        </div>
    )
}

export default ModalSelectGeneral

