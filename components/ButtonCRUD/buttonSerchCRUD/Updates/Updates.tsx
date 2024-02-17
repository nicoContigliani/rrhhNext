import { Add } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import style from './adds.module.css'
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';

const Updates = (props: any) => {
    const { todo,
        pathNow,
        setPathNow,
        methods,
        setMethods,
        dataInformation,
        setDataInformation,
        handleAction
    } = props
    const [data, setData] = useState<any | any[] | undefined>()
    useEffect(() => {
        setData(todo)
    }, [])

    return (
        <div className={style.body}>
            <PublishedWithChangesIcon />
        </div>
    )
}

export default Updates
