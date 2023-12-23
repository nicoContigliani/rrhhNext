import React, { useEffect, useState } from 'react';

import { authAsync, selectAuth } from '@/redux/features/auth/authSlice'
import { readLocalStorage } from '@/services/storage.services';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';


import { Button, Drawer, Radio, Space } from 'antd';
import type { DrawerProps } from 'antd/es/drawer';
import type { RadioChangeEvent } from 'antd/es/radio';


import Exitprofile from '../Exitprofile/Exitprofile';
import Siderbox from '../siderbarBox/Siderbox';
import dynamic from 'next/dynamic';
import style from './navbar.module.css'

import Iconf from '@/components/images/flama.png'
import Menus from '@/components/images/menu.png'




const Logo = dynamic(() => import('@/components/Logo/Logo'), { ssr: false })

// const Menus =dynamic(() => import('../images/menu.png'), { ssr: false })

import menu from '../images/menu.png'
import Icons from '../Icons/Icons';
import Main from '../Main/Main';


import dotenv from "dotenv";
dotenv.config();





const Navbars = () => {

    const dispatch = useAppDispatch();

    const dataSearch: any[] = ["islogin"]

    const [isLogins, setIsLogins] = useState(false)
    const auth = useAppSelector(selectAuth);

    useEffect(() => {
        const todoR = async () => {
            const datas = await readLocalStorage(dataSearch);
            if (datas && datas.islogin) { // Asegúrate de verificar correctamente la propiedad
                setIsLogins(true);
            } else {
                setIsLogins(false);
            }
        };

        todoR();
    }, [auth]);








    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState<DrawerProps['placement']>('left');

    const showDrawer = () => {
        setOpen(true);
    };

    const onChange = (e: RadioChangeEvent) => {
        setPlacement(e.target.value);
    };

    const onClose = () => {
        setOpen(false);
    };


    return (
        <div>
            <div className={style.generalheader}>

                {
                    isLogins ?
                        <div className={style.menu} onClick={showDrawer}>
                            <Icons
                                src={Menus} alt={''}
                                className={style.menuIcon}
                            />
                        </div>
                        :
                        ""
                }


                <div className={style.presentation}>
                    <div className={style.icons}>
                        <Icons
                            src={Iconf} alt={''}
                            className={style.logo}
                        />
                    </div>
                    <div className={style.title}>
                        <Main />
                    </div>
                </div>
                {
                    isLogins ?
                        <div className={style.IconProfile}>
                            <Exitprofile />
                        </div>
                        : ""
                }
            </div>
            <Drawer
                title=""
                placement={placement}
                width={100}
                onClose={onClose}
                open={open}

            >
          

                <Siderbox />


            </Drawer>
        </div>
    )
}

export default Navbars
