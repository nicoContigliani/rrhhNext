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



const ModalCV = (props: any) => {

    const {
        perInfData,
        perDescData,
        eduData,
        experData,
        hardSData,
        softSData,
        lenguageData,
        dispData,
        tittleData
    } = props

    const [isModalOpen, setIsModalOpen] = useState(false);



    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);


    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

  
    const dispatch = useDispatch();

    return (
        <>
            <Button type="primary"
                block
                onClick={showModal}>
                You could watch data add
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
       
        </>
    );
}

export default ModalCV
