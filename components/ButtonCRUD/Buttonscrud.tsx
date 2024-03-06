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
import ButtonFloat from '../BittoonFloat/ButtonFloat';
import { Button } from 'antd';



export interface FetchCrudData {
    urlGeneral: string | any;
    methods: string;
    body?: any | any[]; // Tipo específico para el cuerpo de la solicitud
    idParams?: string;
}

const Buttonscrud = ({ urlGeneral, todo, children }: { urlGeneral: string | undefined, todo: any, children: any }) => {


    const [dataTotlaCV, setDataTotalCV] = useState<any | any[]>()
    const [sectionsData, setSectionsData] = useState<any | undefined>()
    const [dataGeneralCvs, setDataGeneralCvs] = useState<any | undefined>()

    const [updateToSend, setUpdateToSend] = useState<any | any | undefined>()
    const [updateToSendSprite, setUpdateToSendSprite] = useState<any | any | undefined>()






    useEffect(() => {
        const todo = async () => {
            if (updateToSend) {
                setUpdateToSendSprite((prevState: any) => ({
                    ...prevState,
                    ...updateToSend,
                }));
            }
        }
        todo()
    }, [updateToSend]);

    console.log("🚀 ~ Buttonscrud ~ updateToSendSprite:", updateToSendSprite)


    useEffect(() => {
        const dataGetReturn = async () => {
            const { dataCVTodo, sections, genearlDataCV } = await sortSectionTypeId(todo)
            const dataSections = await sectionsFormatForModal(sections)
            await setSectionsData(dataSections)
            await setDataTotalCV(dataCVTodo)
            await setDataGeneralCvs(genearlDataCV)
        }
        dataGetReturn()
    }, [todo])



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
    const sendUpdate = () => {
        const todoCRUD = {
            urlGeneral: "/itemsection/itemsection",
            methods: 'POST',
            body: [updateToSendSprite],
            idParams: 0,
        }
        dispatch(updateCrud(todoCRUD))
        location.reload();

    }
    const [data, setData] = useState<any | any[]>([])

    const [personDescriptionDataS, setPersonDescriptionDataS] = useState<boolean>(true)
    const [personDescriptionS, setPersonDescriptionS] = useState<boolean>(true)
    const [educationsDataS, setEducationsDataS] = useState<boolean>(true)
    const [experienceWorkDataS, setExperienceWorkDataS] = useState<boolean>(true)
    const [experienceWorkFreeDataS, setExperienceWorkFreeDataS] = useState<boolean>(true)
    const [hardSkillData, setHardSkillDatas] = useState<boolean>(true)
    const [softSkillDataS, setSoftSkillDataS] = useState<boolean>(true)
    const [lenguageDataS, setLenguageDatas] = useState<boolean>(true)
    const [disponibilityS, setDisponibilityS] = useState<boolean>(true)
    const [gridFormatView, setGridFormatView] = useState<boolean>(true)





    return (
        <div className={style.body}>

            {

                (sectionsData?.length !== 0) ? <Show
                    title="Show"
                    handleAction={handleGet}

                    personDescriptionDataS={personDescriptionDataS}
                    personDescriptionS={personDescriptionS}
                    educationsDataS={educationsDataS}
                    experienceWorkDataS={experienceWorkDataS}
                    experienceWorkFreeDataS={experienceWorkFreeDataS}
                    hardSkillData={hardSkillData}
                    softSkillDataS={softSkillDataS}
                    lenguageDataS={lenguageDataS}
                    disponibilityS={disponibilityS}
                    setPersonDescriptionDataS={setPersonDescriptionDataS}
                    setPersonDescriptionS={setPersonDescriptionS}
                    setEducationsDataS={setEducationsDataS}
                    setExperienceWorkDataS={setExperienceWorkDataS}
                    setExperienceWorkFreeDataS={setExperienceWorkFreeDataS}
                    setHardSkillDatas={setHardSkillDatas}
                    setSoftSkillDataS={setSoftSkillDataS}
                    setLenguageDatas={setLenguageDatas}
                    setDisponibilityS={setDisponibilityS}

                    gridFormatView={gridFormatView}
                    setGridFormatView={setGridFormatView}
                >
                    {
                        sectionsData && personDescriptionDataS ?
                            <PersonDescriptionData
                                title="Show"
                                perInfData={sectionsData.perInfData}
                                data={data}
                                setData={setData}
                                gridFormatView={gridFormatView}
                                setGridFormatView={setGridFormatView}
                                setUpdateToSend={setUpdateToSend}

                            />
                            : ""
                    }
                    {
                        sectionsData && personDescriptionS ?
                            <PersonDescription
                                title="Show"
                                titleSection="Description Person"
                                perDescData={sectionsData.perDescData}
                                data={data}
                                setData={setData}
                                gridFormatView={gridFormatView}
                                setGridFormatView={setGridFormatView}
                                setUpdateToSend={setUpdateToSend}

                            />
                            : ""
                    }

                    {
                        sectionsData && educationsDataS ?
                            <EducationsData
                                title="Show"
                                titleSection="Education"
                                perDescData={sectionsData.eduData}
                                data={data}
                                setData={setData}
                                gridFormatView={gridFormatView}
                                setGridFormatView={setGridFormatView}
                                setUpdateToSend={setUpdateToSend}

                            />
                            : ""
                    }
                    {
                        sectionsData && experienceWorkDataS ?
                            <ExperienceWorkData
                                title="Show"
                                titleSection="ExperienceWork"
                                perDescData={sectionsData.experData}
                                data={data}
                                setData={setData}
                                gridFormatView={gridFormatView}
                                setGridFormatView={setGridFormatView}
                                setUpdateToSend={setUpdateToSend}

                            />
                            : ""
                    }


                    {
                        sectionsData && experienceWorkFreeDataS ?
                            <ExperienceWorkFreeData
                                title="Show"
                                titleSection="ExperienceFreeWork"
                                perDescData={sectionsData.experFree}
                                data={data}
                                setData={setData}
                                gridFormatView={gridFormatView}
                                setGridFormatView={setGridFormatView}
                                setUpdateToSend={setUpdateToSend}

                            />
                            : ""
                    }
                    {
                        sectionsData && hardSkillData ?
                            <HardSkillData
                                title="Show"
                                titleSection="Hard Skill"
                                perDescData={sectionsData.hardSData}
                                data={data}
                                setData={setData}
                                gridFormatView={gridFormatView}
                                setGridFormatView={setGridFormatView}
                                setUpdateToSend={setUpdateToSend}

                            />
                            : ""
                    }
                    {
                        sectionsData && softSkillDataS ?
                            <SoftSkillData
                                title="Show"
                                titleSection="Hard Skill"
                                perDescData={sectionsData.softSData}
                                data={data}
                                setData={setData}
                                gridFormatView={gridFormatView}
                                setGridFormatView={setGridFormatView}
                                setUpdateToSend={setUpdateToSend}

                            />
                            : ""
                    }
                    {
                        sectionsData && lenguageDataS ?
                            <LenguageData
                                title="Show"
                                titleSection="Lenguage"
                                perDescData={sectionsData.lenguageData}
                                data={data}
                                setData={setData}
                                gridFormatView={gridFormatView}
                                setGridFormatView={setGridFormatView}
                                setUpdateToSend={setUpdateToSend}

                            />
                            : ""
                    }
                    {
                        sectionsData && disponibilityS ?
                            <Disponibility
                                title="Show"
                                titleSection="Disponibility"
                                perDescData={sectionsData.dispData}
                                data={data}
                                setData={setData}
                                gridFormatView={gridFormatView}
                                setGridFormatView={setGridFormatView}
                                setUpdateToSend={setUpdateToSend}

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
                                setUpdateToSend={setUpdateToSend}
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
                                setUpdateToSend={setUpdateToSend}

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
                                setUpdateToSend={setUpdateToSend}

                            />
                            : ""
                    }
                    {
                        sectionsData ?
                            <ExperienceWorkData
                                title="Update"
                                titleSection="ExperienceWork"
                                perDescData={sectionsData.experData}
                                data={data}
                                setData={setData}
                                setUpdateToSend={setUpdateToSend}

                            />
                            : ""
                    }
                    {
                        sectionsData ?
                            <ExperienceWorkFreeData
                                title="Update"
                                titleSection="ExperienceFreeWork"
                                perDescData={sectionsData.experFree}
                                data={data}
                                setData={setData}
                                setUpdateToSend={setUpdateToSend}

                            />
                            : ""
                    }
                    {
                        sectionsData ?
                            <HardSkillData
                                title="Update"
                                titleSection="Hard Skill"
                                perDescData={sectionsData.hardSData}
                                data={data}
                                setData={setData}
                                setUpdateToSend={setUpdateToSend}

                            />
                            : ""
                    }
                    {
                        sectionsData ?
                            <SoftSkillData
                                title="Update"
                                titleSection="Hard Skill"
                                perDescData={sectionsData.softSData}
                                data={data}
                                setData={setData}
                                setUpdateToSend={setUpdateToSend}

                            />
                            : ""
                    }
                    {
                        sectionsData ?
                            <LenguageData
                                title="Update"
                                titleSection="Lenguage"
                                perDescData={sectionsData.lenguageData}
                                data={data}
                                setData={setData}
                                setUpdateToSend={setUpdateToSend}
                            />
                            : ""
                    }
                    {
                        sectionsData ?
                            <Disponibility
                                title="Update"
                                titleSection="Disponibility"
                                perDescData={sectionsData.dispData}
                                data={data}
                                setData={setData}
                                setUpdateToSend={setUpdateToSend}

                            />
                            : ""
                    }

                    <Button
                        type="primary"
                        block
                        ghost

                        color="primary"
                        size="small"
                        onClick={sendUpdate}
                    >
                        Save
                    </Button>
                </Updates>
                    : ""




            }
            {
                (sectionsData?.length !== 0) ? <Deletes

                    handleAction={handleDelete}
                    todo={sectionsData} /> : ""

            }
        </div >
    )
}

export default Buttonscrud
