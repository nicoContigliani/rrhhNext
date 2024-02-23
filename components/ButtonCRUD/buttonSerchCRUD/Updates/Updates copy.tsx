import { Add } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import style from './adds.module.css'
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import Modals from '@/components/Modals/Modals'
import Modalnew from '@/components/steps/componentSteps/ModalNew/Modalnew';
import PersonDescriptionData from '@/components/cvTodo/personDataGeneral/PersonDescriptionData';
import PersonDescription from '@/components/cvTodo/personDescriptionData/PersonDescription';
import EducationsData from '@/components/cvTodo/educateData/EducationsData';

const Updates = (props: any) => {

    const {
        title,
        sectionsData,
        dataGeneralCvs,
        dataTotlaCV,
        handleAction,
    } = props
    const [data, setData] = useState<any | any[]>([])


    return (
        <div        >

            <Modalnew
                title={title}
                className={style.body}
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

export default Updates
