import { Add, Remove } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import style from './deletes.module.css'
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';

const Deletes = (props: any) => {
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
        <div className={style.body}
        
        >
            <Remove />
        </div>
    )
}

export default Deletes
