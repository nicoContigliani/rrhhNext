"use clients"
import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';
import styles from './ModalCV.module.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import makekeyvaluecv from '@/services/makekeyvaluecv.services';
import CVSectionHeader from '../CV/CVSectionHeader/CVSectionHeader';
import CVsectionheaderdescription from '../CV/CVSectionHeaderDescription/CVsectionheaderdescription';
import CvSectionEducation from '../CV/CVSectionEducation/CvSectionEducation';
import Cvsection from '../CV/CVSection/Cvsection';
import Cvsectionjobs from '../CV/CVSectionJobs/Cvsectionjobs';
import CVSectionhardskill from '../CV/CvSectionHardSkill/CVSectionhardskill';
import CVSectionsoftskill from '../CV/CvSectionSoftSkill/CVSectionsoftskill';
import CVSectionlenguage from '../CV/CvSectionLenguage/CVSectionlenguage';
import CvSectionDisponibility from '../CV/CvSectionDisponibility/CVSectionDisponibility';
import CVSectionTittleCV from '../CV/CvSectionTittleCV/CVSectionTittleCV';



const ModalCV = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [perInfData, setPerInfData] = useState()
    const [perDescData, setPerDescData] = useState()
    const [eduData, setEduData] = useState()
    const [experData, setExperData] = useState()
    const [hardSData, setHardSData] = useState()
    const [softSData, setSoftSData] = useState()
    const [lenguageData, setLenguageData] = useState()
    const [dispData, setDispData] = useState()
    const [tittleData, setTittleData] = useState()





    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const {
        personalInformation: { personalInformationData },
        personalDescription: { personalDescriptionData },
        education: { educationData },
        experience: { experienceData },
        hardSkills: { selectedValues },
        tittleCV: { selectedValues: selectedValueT },
        softSkills: { selectedValues: selectedValuesSS },
        lenguage: { selectedValues: selectedValuesL },
        disponibility: { selectedValues: selectedValuesD }
    } = useSelector((state: any) => state);
    useEffect(() => {
        const data = {}

        setPerInfData(personalInformationData)
        setPerDescData(personalDescriptionData)
        setEduData(educationData)
        setExperData(experienceData)
        setHardSData(selectedValues)
        setSoftSData(selectedValuesSS)
        setLenguageData(selectedValuesL)
        setDispData(selectedValuesD)
        setTittleData(selectedValueT)
    },
        [
            personalInformationData,
            personalDescriptionData,
            educationData,
            experienceData,
            selectedValues,
            selectedValuesSS,
            selectedValuesL,
            selectedValuesD,
            selectedValueT
        ])




    const dispatch = useDispatch();

    const handleClick = () => {
        // console.log("**********************************",
        //     "**********************************",
        //     "<Personal information>",
        //     personalInformationData,
        //     "**********************************",
        //     "**********************************",
        //     "<Person Title>",
        //     selectedValueT,
        //     "**********************************",
        //     "**********************************",
        //     "<Personal Description>",
        //     personalDescriptionData,
        //     "**********************************",
        //     "**********************************",
        //     "<Education>",
        //     educationData,
        //     "**********************************",
        //     "**********************************",
        //     "<Experience>",
        //     experienceData,
        //     "**********************************",
        //     "**********************************",
        //     "<Hard Skill>",
        //     selectedValues,
        //     "**********************************",
        //     "**********************************",
        //     "<SoffSkill>",
        //     selectedValuesSS,
        //     "**********************************",
        //     "**********************************",
        //     "<Lenguage>",
        //     selectedValuesL,
        //     "**********************************",
        //     "**********************************",
        //     "<Disponibility>",
        //     selectedValuesD,
        //     "**********************************************"

        // )
   
        const dataForSend = {
            PersonalInformation:personalInformationData,
            PersonTitle:selectedValueT,
            PersonalDescription:personalDescriptionData,
            Education:educationData,
            Experience:experienceData,
            HardSkill:selectedValues,
            SoffSkill:selectedValuesSS,
            Lenguage:selectedValuesL,
            Disponibility:selectedValuesD
        }



        console.log(dataForSend)
    }




    return (
        <>
            <Button type="primary"
                block
                onClick={showModal}>
                Open Modal
            </Button>
            <Modal title="Mi CV"
                className={styles.modal}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >

                <div>
                    {
                        (perInfData) ?
                            <div>
                                <CVSectionHeader
                                    perInfData={perInfData}

                                >
                                    {
                                        (tittleData) ?
                                            <div>
                                                <CVSectionTittleCV
                                                    titleHeader="Job"
                                                    data={tittleData}

                                                />
                                            </div> : ""

                                    }

                                </CVSectionHeader>

                            </div> : ""

                    }
                    {
                        (perDescData) ?
                            <div>
                                <CVsectionheaderdescription
                                    titleHeader="Description Person"
                                    perDescData={perDescData}
                                />
                            </div> : ""
                    }
                    {
                        (perDescData) ?
                            <div>
                                <CvSectionEducation
                                    titleHeader="Education"
                                    eduData={eduData}
                                />
                            </div> : ""
                    }
                    {
                        (experData) ?
                            <div>
                                <Cvsectionjobs
                                    titleHeader="Experience"
                                    data={experData}
                                />
                            </div> : ""
                    }

                    {
                        (hardSData) ?
                            <div>
                                <CVSectionhardskill
                                    titleHeader="Hard Skill"
                                    data={hardSData}
                                />
                            </div> : ""
                    }
                    {
                        (softSData) ?
                            <div>
                                <CVSectionsoftskill
                                    titleHeader="Soft Skill"
                                    data={softSData}
                                />
                            </div> : ""
                    }
                    {
                        (lenguageData) ?
                            <div>
                                <CVSectionlenguage
                                    titleHeader="Lenguage"
                                    data={lenguageData}
                                />
                            </div> : ""
                    }

                    {
                        (dispData) ?
                            <div>
                                <CvSectionDisponibility
                                    titleHeader="Disponibility"
                                    data={dispData}
                                />
                            </div> : ""
                    }



                </div>




            </Modal>
            <div className={styles.createInputs}>
                <Button
                    type="primary"
                    block
                    ghost

                    color="primary"
                    size="small"
                    onClick={handleClick}
                >
                    Save
                </Button>
            </div>
        </>
    );
}

export default ModalCV
