import React from 'react'
import Icons from '../Icons/Icons';
import styles from './Logo.module.css'; // Importa los estilos CSS
import Iconf from '@/components/images/flama.png'

const Logo = (props: any) => {
    return (
        <div className={styles.body} >
            <div>
                <Icons
                    src={Iconf} alt={''}
                    className={styles.logo}
                />
            </div>
            <div className={styles.logoletter}>LlakaScript</div>
        </div>
    )
}

export default Logo
