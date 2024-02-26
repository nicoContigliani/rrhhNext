import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import style from './button.module.css'
import { Icon } from '@mui/material'
import { Add, Remove, Search } from '@mui/icons-material'
import Show from './buttonSerchCRUD/Shows/Show';
import Adds from './buttonSerchCRUD/Adds/Adds';
import Updates from './buttonSerchCRUD/Updates/Updates';
import Deletes from './buttonSerchCRUD/Deletes/Deletes';
import { RootState } from '@/redux/store';
import { createCrud, fetchCrud, updateCrud } from '@/redux/features/CRUD/crudSlice';
import { deleteCrud } from '@/redux/features/CRUD/crudSlice';
import { sortSectionTypeId } from '@/services/sortSectionTypeId.services';
import { sectionsFormatForModal } from '@/services/sectionsFormatForModalservices';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import PersonDescriptionData from '../cvTodo/personDataGeneral/PersonDescriptionData';
import PersonDescription from '../cvTodo/personDescriptionData/PersonDescription';
import EducationsData from '../cvTodo/educateData/EducationsData';
import ExperienceWorkData from '../cvTodo/ExperienceWorkData/ExperienceWorkData';
import ExperienceWorkFreeData from '../cvTodo/ExperienceWorkFreeData/ExperienceWorkFreeData';
import HardSkillData from '../cvTodo/HardSkillData/HardSkillData';
import SoftSkillData from '../cvTodo/SoftSkillData/SoftSkillData';
import LenguageData from '../cvTodo/LenguagelData/LenguageData';
import Disponibility from '../cvTodo/DisponibilitylData/DisponibilityData';

export interface FetchCrudData {
    urlGeneral: string | any;
    methods: string;
    body?: any | any[]; // Tipo específico para el cuerpo de la solicitud
    idParams?: string;
}




const Buttonscrud = ({ urlGeneral, todo }: { urlGeneral: string | undefined, todo: any }) => {


    const [dataTotlaCV, setDataTotalCV] = useState<any | any[]>()
    const [sectionsData, setSectionsData] = useState<any | undefined>()
    const [dataGeneralCvs, setDataGeneralCvs] = useState<any | undefined>()

    useEffect(() => {
        const dataGetReturn = async () => {
            const { dataCVTodo, sections, genearlDataCV } = await sortSectionTypeId(todo)
            const dataSections = await sectionsFormatForModal(sections)
            console.log("🚀 ~ dataGetReturn ~ dataSections:", dataSections)
            await setSectionsData(dataSections)
            await setDataTotalCV(dataCVTodo)
            await setDataGeneralCvs(genearlDataCV)
        }
        dataGetReturn()
    }, [todo])


    console.log("🚀 ~ Buttonscrud ~ sectionsData:", sectionsData)

    const [pathNow, setPathNow] = useState<any>()
    const [methods, setMethods] = useState<any>()
    const [dataInformation, setDataInformation] = useState<any | any[]>()




    const dispatch = useDispatch();
    const dataCrud: any | any[] | undefined = useSelector((state: RootState) => state.crud?.dataCrud);
    const loading = useSelector((state: RootState) => state.crud.loading);
    const message = useSelector((state: RootState) => state.crud.message);
    const httpStatus = useSelector((state: RootState) => state.crud.httpStatus);


    // useEffect(() => {
    //     dispatch(fetchCrud(urlGeneral)); // Se carga los datos al montar el componente
    // }, [dispatch]);

    const handleCreate = () => {
        const todoCRUD: FetchCrudData = {
            urlGeneral: urlGeneral,
            methods: 'GET',
            body: "",
            idParams: "",
        }
        dispatch(createCrud(todoCRUD));
    };

    // const handleUpdate = (id: number) => {
    //     dispatch(updateCrud({ id, /* otros datos para actualizar */ }));
    // };

    const handleDelete = () => {
        const todoCRUD: any | undefined = {
            urlGeneral,
            methods: 'DELETE',
            body: dataTotlaCV,
            idParams: dataTotlaCV.id,
        }
        dispatch(deleteCrud(todoCRUD))

    };
    const handleGet = () => {



        const todoCRUD = {
            urlGeneral,
            methods: 'GET',
            body: "",
            idParams: "",
        }

        dispatch(fetchCrud(todoCRUD))
    };

    const handleUpdate = () => {

        // const todoCRUD = {
        //     urlGeneral,
        //     methods: 'GET',
        //     body: "",
        //     idParams: "",
        // }
        // dispatch(fetchCrud(todoCRUD))
    }
    const [data, setData] = useState<any | any[]>([])

    return (
        <div className={style.body}>
            {
                (sectionsData?.length !== 0) ? <Show
                    title="Show"
                    handleAction={handleGet}
                // sectionsData={sectionsData}
                // dataGeneralCvs={dataGeneralCvs}
                // dataTotlaCV={dataTotlaCV}
                >
                    {
                        sectionsData ?
                            <PersonDescriptionData
                                title="Show"
                                perInfData={sectionsData.perInfData}
                                data={data}
                                setData={setData}
                            />
                            : ""
                    }
                    {
                        sectionsData ?
                            <PersonDescription
                                title="Show"
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
                                title="Show"
                                titleSection="Education"
                                perDescData={sectionsData.eduData}
                                data={data}
                                setData={setData}
                            />
                            : ""
                    }
                    {
                        sectionsData ?
                            <ExperienceWorkData
                                title="Show"
                                titleSection="ExperienceWork"
                                perDescData={sectionsData.experData}
                                data={data}
                                setData={setData}
                            />
                            : ""
                    }


                    {
                        sectionsData ?
                            <ExperienceWorkFreeData
                                title="Show"
                                titleSection="ExperienceFreeWork"
                                perDescData={sectionsData.experFree}
                                data={data}
                                setData={setData}
                            />
                            : ""
                    }
                    {
                        sectionsData ?
                            <HardSkillData
                                title="Show"
                                titleSection="Hard Skill"
                                perDescData={sectionsData.hardSData}
                                data={data}
                                setData={setData}
                            />
                            : ""
                    }
                    {
                        sectionsData ?
                            <LenguageData
                                title="Show"
                                titleSection="Lenguage"
                                perDescData={sectionsData.lenguageData}
                                data={data}
                                setData={setData}
                            />
                            : ""
                    }
                    {
                        sectionsData ?
                            <Disponibility
                                title="Show"
                                titleSection="Disponibility"
                                perDescData={sectionsData.dispData}
                                data={data}
                                setData={setData}
                            />
                            : ""
                    }

                </Show>
                    : ""

            }
            {
                (sectionsData?.length !== 0) ? <Adds

                    handleAction={handleCreate}
                    todo={sectionsData} /> : ""

            }
            {
                (sectionsData?.length !== 0) ? <Updates
                    title="Update"
                    handleAction={handleUpdate}
                // sectionsData={sectionsData}
                // dataGeneralCvs={dataGeneralCvs}
                // dataTotlaCV={dataTotlaCV}
                >
                    {
                        sectionsData ?
                            <PersonDescriptionData
                                title="Update"
                                perInfData={sectionsData.perInfData}
                                data={data}
                                setData={setData}
                            />
                            : ""
                    }
                    {
                        sectionsData ?
                            <PersonDescription
                                title="Update"
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
                                title="Update"
                                titleSection="Education"
                                perDescData={sectionsData.eduData}
                                data={data}
                                setData={setData}
                            />
                            : ""
                    }
                    <button>hola</button>
                </Updates>
                    : ""




            }
            {
                (sectionsData?.length !== 0) ? <Deletes

                    handleAction={handleDelete}
                    todo={sectionsData} /> : ""

            }
        </div>
    )
}

export default Buttonscrud
