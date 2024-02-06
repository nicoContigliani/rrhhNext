/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import React, { useEffect, useState } from 'react'
import Cards from '../Card/Cards';

import { Popover } from 'antd';
import { Button, notification, Space } from 'antd';
type NotificationType = 'success' | 'info' | 'warning' | 'error';


import styles from './Auth.module.css'; // Importa los estilos CSS
import Icons from '../Icons/Icons';
import profiles from '@/components/images/perfil.png'
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { authAsync, authAsyncRegister, selectAuth } from '@/redux/features/auth/authSlice';
import Buttons from '../Buttons /Buttons';
import Inputs from '../inputs/Inputs';
import registerServices from '@/services/register.services';

const Auths = () => {
    const [data, setData] = useState([])
    const [api, contextHolder] = notification.useNotification();

    const [register, setRegister] = useState(false)

    const dispatch = useAppDispatch();
    const auth = useAppSelector(selectAuth);
    const onAction = async () => {
        dispatch(authAsync(data))
    }
    const onActionRegister = async () => {
        const returnTodo = registerServices(data)
        if (!returnTodo) {
            const openNotificationWithIcon = (type: NotificationType) => {
                api[type]({
                    message: 'Error',
                    description:
                        'Debe completar todos los campos.',
                });
            };
            openNotificationWithIcon('error')
        }
        if (returnTodo) dispatch(authAsyncRegister(data))

    }

    return (
        <div className={styles.body}>
            <div className={styles.login__content}>

                {contextHolder}


                {
                    register ?
                        <Cards
                            className='login__form '
                            textlavel={'prueba'}
                            src={''}
                            variant={'top'}
                            title={'Tomá por Mirón'}        >
                            <div className={styles.center}>

                                <Icons
                                    src={profiles} alt={''}
                                    className={styles.perfil}

                                />
                            </div>

                            <div className={styles.login_inputs}>

                                <Popover content="email" >

                                    <Inputs
                                        className={styles.login_input}
                                        data={data}
                                        setData={setData}
                                        placeholder="email"
                                        name="email"
                                        type={''}
                                        minLength={''} autoFocus={false} color={''} defaultValue={undefined} disabled={false} fullWidth={false} id={''} inputComponent={undefined} multiline={false} label={''} rows={''} />
                                </Popover>
                                <Popover content="Fullname" >

                                    <Inputs
                                        className={styles.login_input}
                                        data={data}
                                        setData={setData}
                                        placeholder="fullname"
                                        name="fullname"
                                        type="text"
                                        minLength={''} autoFocus={false} color={''} defaultValue={undefined} disabled={false} fullWidth={false} id={''} inputComponent={undefined} multiline={false} label={''} rows={''} />
                                </Popover>

                                <Popover content="Phone" >

                                    <Inputs
                                        className={styles.login_input}
                                        data={data}
                                        setData={setData}
                                        placeholder="phone"
                                        name="phone"
                                        type="text"
                                        minLength={''} autoFocus={false} color={''} defaultValue={undefined} disabled={false} fullWidth={false} id={''} inputComponent={undefined} multiline={false} label={''} rows={''} />
                                </Popover>

                                <Popover content="Birthsday" >

                                    <Inputs
                                        className={styles.login_input}
                                        data={data}
                                        setData={setData}
                                        placeholder="birthday"
                                        name="birthday"
                                        type="date"
                                        minLength={''} autoFocus={false} color={''} defaultValue={undefined} disabled={false} fullWidth={false} id={''} inputComponent={undefined} multiline={false} label={''} rows={''} />
                                </Popover>


                                <Popover content="Password" >

                                    <Inputs
                                        className={styles.login_input}
                                        data={data}
                                        setData={setData}
                                        placeholder="Password Repeat"
                                        name="password"
                                        type="password"
                                        minLength={''} autoFocus={false} color={''} defaultValue={undefined} disabled={false} fullWidth={false} id={''} inputComponent={undefined} multiline={false} label={''} rows={''} />
                                </Popover>

                                <Popover content="Repeat Password" >

                                    <Inputs
                                        className={styles.login_input}
                                        data={data}
                                        setData={setData}
                                        placeholder="Password Repeat"
                                        name="passwordSecond"
                                        type="password"
                                        minLength={''} autoFocus={false} color={''} defaultValue={undefined} disabled={false} fullWidth={false} id={''} inputComponent={undefined} multiline={false} label={''} rows={''} />

                                </Popover>

                            </div>



                            <div className={styles.login_buttons}>
                                <Buttons
                                    textlavel="Register"
                                    id="todo"

                                    className={styles.login_button}
                                    onClick={() => onActionRegister()}
                                />
                                <Buttons
                                    textlavel="Login"
                                    id="todo"
                                    size="small"
                                    className={styles.second_button}
                                    onClick={() => setRegister(!register)}
                                />


                            </div>

                        </Cards>
                        : <Cards
                            className='login__form '
                            textlavel={'prueba'}
                            src={''}
                            variant={'top'}
                            title={'Tomá por Mirón'}        >
                            <div className={styles.center}>

                                <Icons
                                    src={profiles} alt={''}
                                    className={styles.perfil}

                                />
                            </div>

                            <div className={styles.login_inputs}>

                                <Inputs
                                    className={styles.login_input}
                                    data={data}
                                    setData={setData}
                                    placeholder="email"
                                    name="email"
                                    type={''}
                                    minLength={''} autoFocus={false} color={''} defaultValue={undefined} disabled={false} fullWidth={false} id={''} inputComponent={undefined} multiline={false} label={''} rows={''} />

                                <Inputs
                                    className={styles.login_input}
                                    data={data}
                                    setData={setData}
                                    placeholder="Password"
                                    name="password"
                                    type="password"
                                    minLength={''} autoFocus={false} color={''} defaultValue={undefined} disabled={false} fullWidth={false} id={''} inputComponent={undefined} multiline={false} label={''} rows={''} />
                            </div>



                            <div className={styles.login_buttons}>
                                <Buttons
                                    textlavel="Login"
                                    id="todo"
                                    className={styles.login_button}
                                    onClick={() => onAction()}
                                />
                                <Buttons
                                    textlavel="Register"
                                    id="todo"
                                    size="small"
                                    className={styles.second_button}
                                    onClick={() => setRegister(!register)}
                                />


                            </div>

                        </Cards>

                }


            </div>

        </div>
    )
}

export default Auths
