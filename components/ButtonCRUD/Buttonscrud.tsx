import React, { useEffect, useState } from 'react'
import style from './button.module.css'
import { Icon } from '@mui/material'
import { Add, Remove, Search } from '@mui/icons-material'
import Show from './buttonSerchCRUD/Shows/Show';
import Adds from './buttonSerchCRUD/Adds/Adds';
import Updates from './buttonSerchCRUD/Updates/Updates';
import Deletes from './buttonSerchCRUD/Deletes/Deletes';

const Buttonscrud = ({ todo }: { children: React.ReactNode | any | undefined, todo: any }) => {

    const [data, setData] = useState<any | any[]>()
    useEffect(() => {
        setData(todo)
    }, [todo])



    return (
        <div className={style.body}>
            {
                (data?.length !== 0) ? <Show todo={data} /> : ""

            }
            {
                (data?.length !== 0) ? <Adds todo={data} /> : ""

            }
            {
                (data?.length !== 0) ? <Updates todo={data} /> : ""

            }
            {
                (data?.length !== 0) ? <Deletes todo={data} /> : ""

            }
        </div>
    )
}

export default Buttonscrud
