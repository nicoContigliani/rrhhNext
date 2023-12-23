import { Search } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import style from "./show.module.css"
import Modals from '@/components/Modals/Modals'

const Show = (props: any) => {
    const { todo } = props
    const [data, setData] = useState<any | any[] | undefined>()
    useEffect(() => {
        setData(todo)
    }, [])

    return (
        <div className={style.body}>
            <Modals todo={data}>
                <Search />
            </Modals>
        </div>
    )
}

export default Show
