// @ts-nocheck
// use client

import React from 'react'
import Icons from '../Icons/Icons'
import profiles from '@/components/images/perfil.png'
import { writedLocalStorage } from '@/services/storage.services';

import styles from './Exitprofile.module.css'

const Exitprofile = () => {

    const initialState: AuthState = {
        token: "",
        islogin: false,
        user: {},
        id: ""
    };





    const clearStorage = () => {
        window.location.reload(false);
        writedLocalStorage(initialState)
    }

    return (
        <div>
            <Icons
                src={profiles} alt={''}
                className={styles.perfil}
                onClick={clearStorage}
            />
            
        </div>
    )
}

export default Exitprofile
