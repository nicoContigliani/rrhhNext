import React, { useEffect, useMemo, useState } from 'react'
import { Button, Popover } from 'antd';

import styles from './SidebarBox.module.css';
import Icons from '../Icons/Icons';
import Image from 'next/image'

import Link from 'next/link';


import Iconf from '@/components/images/flama.png'
// import { Iconflama } from '@/services/iconsImportList.services';
import { Home, Iconflama, certificado, cv, documentoLegal, rrhh, lupahuman, lupahumans, module, reporte, clienteS, panel } from '../../services/iconsImportList.services'


const Siderbox = (props: any) => {
    const [dataSiderbar, setDataSiderbar] = useState<any | any[]>()
    useEffect(() => {
        const { todo } = props
        setDataSiderbar(todo)
    }, [props])


    const memoizedData = useMemo(() => {
        return dataSiderbar?.map((item: any, key: any) => (
            <div key={key} className={styles.todo}>
                <Link href={item.routesLink}>

                    {
                        item.module === "RRHH" ?
                            <Popover content={item.label} >
                                <Image src={item.urls} alt={''} className={styles.image} />
                            </Popover>
                            : ""

                    }
                    {
                        item.module === "RRHH_TALENTS" ?
                            <div className={styles.stileDiv}>
                                <Popover content={item.label} >
                                    <Image src={item.urls} alt={''} className={styles.image} /><br />
                                </Popover>
                            </div>
                            : ""
                    }


                </Link>

                <hr />
                <div className={styles.separator} />
            </div>
        ));
    }, [dataSiderbar]);

    return (
        <div className={styles.box}>{memoizedData}</div>
    )
}

export default Siderbox
