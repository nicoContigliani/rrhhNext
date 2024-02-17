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

    const [pathNow, setPathNow] = useState<any>()
    const [methods, setMethods] = useState<any>()
    const [dataInformation, setDataInformation] = useState<any | any[]>()
    const handleAction = () => {
        console.log("si anda el metodo")
    }

    // pathNow, 
    // setPathNow
    // methods, 
    // setMethods
    // dataInformation, 
    // setDataInformation
    // handleAction







    return (
        <div className={style.body}>
            {
                (data?.length !== 0) ? <Show
                    pathNow={pathNow}
                    setPathNow={setPathNow}
                    methods={methods}
                    setMethods={setMethods}
                    dataInformation={dataInformation}
                    setDataInformation={setDataInformation}
                    handleAction={handleAction}
                    todo={data} /> : ""

            }
            {
                (data?.length !== 0) ? <Adds
                    pathNow={pathNow}
                    setPathNow={setPathNow}
                    methods={methods}
                    setMethods={setMethods}
                    dataInformation={dataInformation}
                    setDataInformation={setDataInformation}
                    handleAction={handleAction}
                    todo={data} /> : ""

            }
            {
                (data?.length !== 0) ? <Updates
                    pathNow={pathNow}
                    setPathNow={setPathNow}
                    methods={methods}
                    setMethods={setMethods}
                    dataInformation={dataInformation}
                    setDataInformation={setDataInformation}
                    handleAction={handleAction}
                    todo={data} /> : ""

            }
            {
                (data?.length !== 0) ? <Deletes
                    pathNow={pathNow}
                    setPathNow={setPathNow}
                    methods={methods}
                    setMethods={setMethods}
                    dataInformation={dataInformation}
                    setDataInformation={setDataInformation}
                    handleAction={handleAction}
                    todo={data} /> : ""

            }
        </div>
    )
}

export default Buttonscrud
