import React, { useEffect, useState } from 'react'
import style from './button.module.css'
import { Icon } from '@mui/material'
import { Add, Remove, Search } from '@mui/icons-material'
import Show from './buttonSerchCRUD/Shows/Show';
import Adds from './buttonSerchCRUD/Adds/Adds';
import Updates from './buttonSerchCRUD/Updates/Updates';
import Deletes from './buttonSerchCRUD/Deletes/Deletes';

const Buttonscrud = ({ todo }: { children: React.ReactNode | any, todo: any }) => {

    const [data, setData] = useState()
    useEffect(() => {
        setData(todo)
    }, [])



    return (
        <div className={style.body}>
            <Show todo={data} />
            <Adds todo={data} />
            <Updates todo={data} />
            <Deletes todo={data} />
        </div>
    )
}

export default Buttonscrud
