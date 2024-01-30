"use client"
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


import { useSearchParams } from 'next/navigation'


const Logo = dynamic(() => import('@/components/Logo/Logo'), { ssr: false })

// const Menus =dynamic(() => import('../images/menu.png'), { ssr: false })

import menu from '../images/menu.png'
import Icons from '../Icons/Icons';
import Main from '../Main/Main';

import { Home, Iconflama, certificado, cv, documentoLegal, rrhh, lupahuman, lupahumans, module, reporte, clienteS, panel } from '../../services/iconsImportList.services'







import dotenv from "dotenv";
import routerLocationServices from '@/services/RoutesLocation.services';
dotenv.config();

const todo = [
    {
        module: "RRHH",
        label: "home",
        urls: Home,
        actions: "",
        routesLink: "/"
    },

    {
        module: "RRHH",
        label: "module",
        urls: module,
        actions: "",
        routesLink: "/humansrresources"
    },

    {
        module: "RRHH",
        label: "home",
        urls: rrhh,
        actions: "",
        routesLink: "/talents"
    },
    {
        module: "RRHH",
        label: "home",
        urls: cv,
        actions: "",
        routesLink: "/curriculum"
    },
    {
        module: "RRHH",
        label: "home",
        urls: certificado,
        actions: "",
        routesLink: "/humansrresources"
    },
    {
        module: "RRHH",
        label: "home",
        urls: documentoLegal,
        actions: "",
        routesLink: "/humansrresources"
    },
    {
        module: "RRHH",
        label: "home",
        urls: reporte,
        actions: "",
        routesLink: "/humansrresources"
    },
    {
        module: "RRHH",
        label: "home",
        urls: panel,
        actions: "",
        routesLink: "/humansrresources"
    }

]




const Navbars = () => {
     //TODO sericio para saber donde estoy y con un servicio listo para verificar cosas 
    // const searchParams = location.href
    // const {data } = routerLocationServices(searchParams)
    // console.log("🚀 ~ Navbars ~ todo:", todo)

    // console.log("🚀 ~ Navbars ~ searchParams:", searchParams)
    // if (searchParams.includes('talents')) {
    //     console.log("si exxiste")
    // } else {
    //     console.log("no existe")
    // }







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


                <Siderbox todo={todo} />


            </Drawer>

            



        </div>
    )
}

export default Navbars
