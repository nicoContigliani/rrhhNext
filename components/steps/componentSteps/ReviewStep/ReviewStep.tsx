import React, { useEffect, useState } from 'react'
import styles from "./ReviewStep.module.css"
import ModalCV from '../modalCV/ModalCV'
import { Button } from 'antd'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import useMessage from '@/hooks/useMessage'
import { preloadCVData } from '@/redux/features/CV/cvSlice'
import { useAppDispatch } from '@/redux/hooks'



const ReviewStep = (props: any) => {


  const [perInfData, setPerInfData] = useState()
  const [perDescData, setPerDescData] = useState()
  const [eduData, setEduData] = useState()
  const [experData, setExperData] = useState()
  const [experFreeData, setExperFreeData] = useState()
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
  const dispatch = useAppDispatch();

  const { success, error, warning, setContent } = useMessage();



  const {
    personalInformation: { personalInformationData },
    personalDescription: { personalDescriptionData },
    education: { educationData },
    experience: { experienceData },
    experienceFree: { experienceFreeData },
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
    setExperFreeData(experienceFreeData)
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
      experienceFreeData,
      selectedValues,
      selectedValuesSS,
      selectedValuesL,
      selectedValuesD,
      selectedValueT
    ])

  useEffect(() => {
    const dataForSend = {
      PersonalInformation: personalInformationData,
      PersonTitle: selectedValueT,
      PersonalDescription: personalDescriptionData,
      Education: educationData,
      Experience: experienceData,
      ExperienceFree: experienceFreeData,
      HardSkill: selectedValues,
      SoffSkill: selectedValuesSS,
      Lenguage: selectedValuesL,
      Disponibility: selectedValuesD
    }


    setDataModal(dataForSend)

  }, [personalInformationData,
    personalDescriptionData,
    educationData,
    experienceData,
    experienceFreeData,
    selectedValues,
    selectedValuesSS,
    selectedValuesL,
    selectedValuesD,
    selectedValueT])

  const {
    cv
  } = useSelector((state: any) => state);


  const router = useRouter()


  const handleClick = async () => {
    onSave();
    if (cv.httpStatus === 200) {
      await success();
      await setContent("The CV was Create");
      dispatch(preloadCVData())
    }
    if (cv.httpStatus === 500) {
      await error();
      await setContent("The CV wasn't Not Create");
      dispatch(preloadCVData())
    }
    //  await router.push('/');
    //  await location.reload();

  };

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
          experFreeData={experFreeData}
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
            onClick={handleClick}
          >
            Save
          </Button>

        </div>
      </div>
    </div>
  )
}

export default ReviewStep
