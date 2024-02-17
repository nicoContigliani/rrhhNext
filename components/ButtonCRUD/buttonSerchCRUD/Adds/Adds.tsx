import { Add } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import style from './adds.module.css'
const Adds = (props: any) => {
    const {
        todo,
        pathNow,
        setPathNow,
        methods,
        setMethods,
        dataInformation,
        setDataInformation,
        handleAction,
    } = props
    const [data, setData] = useState<any | any[] | undefined>()
    useEffect(() => {
        setData(todo)
    }, [])

    return (
        <div className={style.body}
        onClick={handleAction}
        >
            <Add />
        </div>
    )
}

export default Adds
