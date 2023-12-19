/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import React, { useEffect, useState } from 'react'
import Cards from '../Card/Cards';

import styles from './Auth.module.css'; // Importa los estilos CSS
import Icons from '../Icons/Icons';
import profiles from '@/components/images/perfil.png'
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { authAsync, selectAuth } from '@/redux/features/auth/authSlice';
import Buttons from '../Buttons /Buttons';
import Inputs from '../inputs/Inputs';

const Auths = () => {
    const [data, setData] = useState([])

    const dispatch = useAppDispatch();
    const auth = useAppSelector(selectAuth);
    const onAction = async () => {
        dispatch(authAsync(data))
    }

    return (
        <div className={styles.body}>
            <div className={styles.login__content}>

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

                        <Inputs
                            className={styles.login_input}
                            data={data}
                            setData={setData}
                            placeholder="mail"
                            name="mail"
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
                            textlavel="todo"
                            id="todo"
                            className={styles.login_button}
                            onClick={() => onAction()}
                        />


                    </div>

                </Cards>
            </div>

        </div>
    )
}

export default Auths
