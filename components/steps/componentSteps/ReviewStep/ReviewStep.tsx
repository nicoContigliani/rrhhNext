import React, { useEffect, useState } from 'react'
import styles from "./ReviewStep.module.css"
import ModalCV from '../modalCV/ModalCV'
import { Button } from 'antd'
import { useSelector } from 'react-redux'
const ReviewStep = (props: any) => {


  const [perInfData, setPerInfData] = useState()
  const [perDescData, setPerDescData] = useState()
  const [eduData, setEduData] = useState()
  const [experData, setExperData] = useState()
  const [hardSData, setHardSData] = useState()
  const [softSData, setSoftSData] = useState()
  const [lenguageData, setLenguageData] = useState()
  const [dispData, setDispData] = useState()
  const [tittleData, setTittleData] = useState()

  const {
    onSave,
    onAddReviewCVEntry,
    onUpdateReviewCVEntry,
    onDeleteReviewCVEntry,
    dataModal,
    setDataModal
  } = props




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

  useEffect(() => {
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

    // const dataForSend: any =
    // {
    //   "PersonalInformation": [
    //     {
    //       "fullname": "Nicolás Contigliani",
    //       "email": "nico.contigliani@gmail.com",
    //       "phone": "2612444106",
    //       "birthsday": "2024-02-11"
    //     }
    //   ],
    //   "PersonTitle": [
    //     "Developer"
    //   ],
    //   "PersonalDescription": [
    //     {
    //       "persondescription": "Soy un profesional..."
    //     }
    //   ],
    //   "Education": [
    //     {
    //       "title": "Developer",
    //       "institute": "IIESSB",
    //       "start": "2024-02-14",
    //       "finish": "2024-02-17"
    //     }
    //   ],
    //   "Experience": [
    //     {
    //       "company": "OPENDEV",
    //       "start": "2024-02-18",
    //       "finish": "2024-02-18"
    //     }
    //   ],
    //   "HardSkill": [
    //     "React.js",
    //     "Node"
    //   ],
    //   "SoffSkill": [
    //     "god man",
    //     "Conflict resolution"
    //   ],
    //   "Lenguage": [
    //     "Englis"
    //   ],
    //   "Disponibility": [
    //     "8:00 - 13:00"
    //   ]
    // }
    setDataModal(dataForSend)

  }, [personalInformationData,
    personalDescriptionData,
    educationData,
    experienceData,
    selectedValues,
    selectedValuesSS,
    selectedValuesL,
    selectedValuesD,
    selectedValueT])





  return (
    <div className={styles.body}>
      <div className={styles.ModalCV}>

        <div className={styles.paraghrp}>
          <h3>
            CV ATS
          </h3>
          <span>
            Sistema de Seguimiento de Candidatos, es un tipo de software de gestión de candidaturas utilizado por los reclutadores y empleadores de las empresas.
          </span>
        </div>


        <ModalCV
          perInfData={perInfData}
          perDescData={perDescData}
          eduData={eduData}
          experData={experData}
          hardSData={hardSData}
          softSData={softSData}
          lenguageData={lenguageData}
          dispData={dispData}
          tittleData={tittleData}
        />

        <div className={styles.createInputs}>
          <Button
            type="primary"
            block
            ghost

            color="primary"
            size="small"
            onClick={onSave}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ReviewStep
