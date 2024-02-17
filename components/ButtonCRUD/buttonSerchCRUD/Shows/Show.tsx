import { Search } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import style from "./show.module.css"
import Modals from '@/components/Modals/Modals'

const Show = (props: any) => {
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
    const [data, setData] = useState<any | any[] | undefined>(todo)
    useEffect(() => {
        setData(todo)
    }, [props])

    //aca va el redux de show y los permisos 


    return (
        <div className={style.body}>
            <Modals todo={data}>
                <Search />
            </Modals>
        </div>
    )
}

export default Show
