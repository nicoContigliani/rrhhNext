import { Add } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import style from './adds.module.css'
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import Modals from '@/components/Modals/Modals'

const Updates = (props: any) => {
    const {
        todo,
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

            <Modals todo={data}
                actions="Update"
            >
                <PublishedWithChangesIcon />
            </Modals>


        </div>
    )
}

export default Updates
