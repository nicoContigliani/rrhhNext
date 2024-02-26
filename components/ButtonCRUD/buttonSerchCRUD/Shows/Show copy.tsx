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
    const [data, setData] = useState<any | any[]>([])


    const {
        title,
        sectionsData,
        dataGeneralCvs,
        dataTotlaCV,
        handleAction,
    } = props


    //aca va el redux de show y los permisos 

    return (
        <div className={style.body}>

            <Modalnew
                title={title}
              
            >
                {
                    sectionsData ?
                        <PersonDescriptionData
                            title={title}
                            perInfData={sectionsData.perInfData}
                            data={data}
                            setData={setData}
                        />
                        : ""
                }
                {
                    sectionsData ?
                        <PersonDescription
                            title={title}
                            titleSection="Description Person"
                            perDescData={sectionsData.perDescData}
                            data={data}
                            setData={setData}
                        />
                        : ""
                }

                {
                    sectionsData ?
                        <EducationsData
                            title={title}
                            titleSection="Education"
                            perDescData={sectionsData.eduData}
                            data={data}
                            setData={setData}
                        />
                        : ""
                }





            </Modalnew>

        </div>
    )
}

export default Show

