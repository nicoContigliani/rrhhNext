import { Search } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import style from "./show.module.css"
import Modals from '@/components/Modals/Modals'
import ModalCV from '@/components/steps/componentSteps/modalCV/ModalCV'

const Show = (props: any) => {
    const {
        todo,
        handleAction,
    } = props
    const [data, setData] = useState<any | any[] | undefined>(todo)
    useEffect(() => {

        setData(todo)
    }, [props])

    //aca va el redux de show y los permisos 


    return (
        <div>
        {todo && todo.perDescData !== undefined ? (
            <div className={style.body} onClick={handleAction}>
                {/* <ModalCV
                    perInfData={data && data.perInfData} // Verificar si data está definido
                    perDescData={data && data.perDescData} // Verificar si data está definido
                    eduData={data && data.eduData} // Verificar si data está definido
                    experData={data && data.experData} // Verificar si data está definido
                    hardSData={data && data.hardSData} // Verificar si data está definido
                    softSData={data && data.softSData} // Verificar si data está definido
                    lenguageData={data && data.lenguageData} // Verificar si data está definido
                    dispData={data && data.dispData} // Verificar si data está definido
                    tittleData={data && data.tittleData} // Verificar si data está definido
                /> */}
                <Search />
            </div>
        ) : (
            <Search />
        )}
    </div>
)
}

export default Show

