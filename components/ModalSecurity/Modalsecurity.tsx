import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import Inputs from '../inputs/Inputs';
import styles from "./ModalSecurity.module.css"


const Modalsecurity = (props: any) => {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState()
    const { } = props




    return (
        <div>
            <Button  size="small" type="primary" onClick={() => setOpen(true)}>
                Create Ask
            </Button>
            <Modal
                title="Ingrese usuario y contraseña para confirmar"
                centered
                open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                width={500}
            >
                <span>Es responsabilidad de quien firma el pedido explicito del recurso </span>

                <div className={styles.inputsGroup} >
                    <Inputs
                        className={styles.login_input}
                        data={data}
                        setData={setData}
                        placeholder="mail"
                        name="mail"
                        type={''}
                        minLength={''} autoFocus={false} color={''} defaultValue={undefined} disabled={false} fullWidth={false} id={''} inputComponent={undefined} multiline={false} label={''} rows={''} />
                    <br />
                    <Inputs
                        className={styles.login_input}
                        data={data}
                        setData={setData}
                        placeholder="Password"
                        name="password"
                        type="password"
                        minLength={''} autoFocus={false} color={''} defaultValue={undefined} disabled={false} fullWidth={false} id={''} inputComponent={undefined} multiline={false} label={''} rows={''} />

                </div>

            </Modal>
        </div>
    )
}

export default Modalsecurity
