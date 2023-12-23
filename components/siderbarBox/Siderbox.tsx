import React, { useEffect, useMemo, useState } from 'react'

import styles from './SidebarBox.module.css';
import Icons from '../Icons/Icons';
import Image from 'next/image'

import Link from 'next/link';


import Iconf from '@/components/images/flama.png'
// import { Iconflama } from '@/services/iconsImportList.services';
import { Home, Iconflama, certificado, cv, documentoLegal, rrhh, lupahuman, lupahumans, module, reporte, clienteS, panel } from '../../services/iconsImportList.services'


const Siderbox = (props: any) => {
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
    const [data, setData] = useState(
        todo
    );
    
    useEffect(() => {
        setData(todo)
    }, [])


    // Use useMemo to memoize the result of the map function
    const memoizedData = useMemo(() => {
        return data.map((item,key) => (
            <div key={key} className={styles.todo}>
                <Link href={item.routesLink}>
                    <Image src={item.urls} alt={''} className={styles.image} />
                </Link>                 
               
                <hr />
                <div className={styles.separator} />
            </div>
        ));
    }, [data]);







    return (
        <div className={styles.box}>{memoizedData}</div>

    )
}

export default Siderbox
