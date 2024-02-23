import { Search } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import style from "./show.module.css"
import Modals from '@/components/Modals/Modals'
import ModalCV from '@/components/steps/componentSteps/modalCV/ModalCV'
import Modalnew from '@/components/steps/componentSteps/ModalNew/Modalnew'
import PersonDescription from '@/components/cvTodo/personDescriptionData/PersonDescription'
import PersonDescriptionData from '@/components/cvTodo/personDataGeneral/PersonDescriptionData'
import EducationsData from '@/components/cvTodo/educateData/EducationsData'

const Show = (props: any) => {
    // const [data, setData] = useState<any | any[]>([])


    const {
        title,
        children
    } = props


    //aca va el redux de show y los permisos 

    return (
        <div>

            <Modalnew
                title={title}
                className={style.body}
            >
                {children}
            </Modalnew>

        </div>
    )
}

export default Show

