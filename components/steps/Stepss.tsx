import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Button, Flex } from 'antd';

import styles from './steps.module.css'

import PersonalInformationStep from './componentSteps/PersonalInformationStep/PersonalInformationStep';
import PersonalDescriptionStep from './componentSteps/PesonalDescriptionStep/PersonalDescriptionStep';
import EducationStep from './componentSteps/EducationStep/EducationStep';
import ExperienceStep from './componentSteps/ExperienceStep/ExperienceStep';
import ReviewStep from './componentSteps/ReviewStep/ReviewStep';
import { useMediaQuery } from '@mui/material';
import SkillsStepHard from './componentSteps/SkillsStepHard/SkillsStephard';
import SkillsStepSoft from './componentSteps/SkillsStepSoft/SkillsStepsoft';
import Lenguaje from './componentSteps/Lenguaje/Lenguage';
import Disponibility from './componentSteps/DisponibilityStep/Disponibility';
import TittleCVStep from './componentSteps/TittleCV/TittleCV';

import EducationService from '@/services/EducationServices'; // Adjust path if needed
import PersonalInformationServices from '@/services/personalInformation.services';
import ExperienceService from '@/services/ExperienceServices';
import SoftSkillsService from '@/services/SoftSkillsService';
import HardSkillsService from '@/services/HardSkillsService';
import LenguageService from '@/services/LenguageService';
import DisponibilityService from '@/services/DisponibilityService';
import PersonalDescriptionService from '@/services/personaldescription.services';
import TittleCVServices from '@/services/TittleCV.Services'
import ReviewCVServices from '@/services/ReviewCV.services';


const Stepss = () => {

  const [dataModal,setDataModal] = useState()


  const educationService = EducationService();
  const personInformationServices = PersonalInformationServices()
  const personDescriptionServices = PersonalDescriptionService()
  const titleCVSerivcies = TittleCVServices()

  const experienceService = ExperienceService()
  const softSkillsService = SoftSkillsService()
  const hardSkillsService = HardSkillsService()
  const lenguageService = LenguageService()
  const disponibilityService = DisponibilityService()
  const reviewCVServices = ReviewCVServices()




  const steps = [
    'Personal Information',
    'Title Cv',
    'Personal Description',
    'Education',
    'Experience',
    'Soft Skills',
    'Hard Skills',
    'Lenguaje',
    'Disponibility',
    'Review',
  ];

  const stepComponents = [
    <PersonalInformationStep
      title='PersonalInformationStep'
      personalInformation={personInformationServices.personalInformationData}
      onAddPersonalInformationEntry={personInformationServices.addPersonalInformationEntrys}
      onUpdatePersonalInformationEntry={personInformationServices.updatePersonalInformationEntrys}
      onDeletePersonalInformationEntry={personInformationServices.deletePersonalInformationEntrys}
      onSave={personInformationServices.handleSave}
    />,
    <TittleCVStep
      title='Tittle Job for CV'
      selectedValues={titleCVSerivcies.selectedValues}
      contentOptionSelect={titleCVSerivcies.contentOptionSelect}
      MAX_COUNT={titleCVSerivcies.MAX_COUNT}
      handleSelectChange={titleCVSerivcies.handleSelectChange}
      handleAddSelect={titleCVSerivcies.handleAddSelect}
      handleSaveData={titleCVSerivcies.handleSaveData}

    // onSave={softSkillsService.handleSave}
    />,


    <PersonalDescriptionStep
      title='PersonalDescriptionStep'
      personalDescription={personDescriptionServices.personalDescriptionData}
      onAddPersonalDescriptionEntry={personDescriptionServices.addPersonalDescriptionEntrys}
      onUpdatePersonalDescriptionEntry={personDescriptionServices.updatePersonalDescriptionEntrys}
      onDeletePersonalDescriptionEntry={personDescriptionServices.deletePersonalDescriptionEntrys}
      onSave={personDescriptionServices.handleSave}
    />
    ,
    <EducationStep
      title="Education Details"
      educationData={educationService.EducationData}
      onAddEducationEntry={educationService.addEducationEntrys}
      onUpdateEducationEntry={educationService.updateEducationEntrys}
      onDeleteEducationEntry={educationService.deleteEducationEntrys}
      onSave={educationService.handleSave}
    />,
    <ExperienceStep
      title='Experience'
      experienceData={experienceService.experienceData}
      onAddExperienceEntry={experienceService.addExperienceEntrys}
      onUpdateExperienceEntry={experienceService.updateExperienceEntrys}
      onDeleteExperienceEntry={experienceService.deleteExperienceEntrys}
      onSave={experienceService.handleSave}
    />,
    <SkillsStepSoft
      title='Soft Skills'
      selectedValues={softSkillsService.selectedValues}
      contentOptionSelect={softSkillsService.contentOptionSelect}
      MAX_COUNT={softSkillsService.MAX_COUNT}
      handleSelectChange={softSkillsService.handleSelectChange}
      handleAddSelect={softSkillsService.handleAddSelect}
      handleSaveData={softSkillsService.handleSaveData}

    // onSave={softSkillsService.handleSave}
    />,
    <SkillsStepHard
      title='Hard  Skills'
      selectedValues={hardSkillsService.selectedValues}
      contentOptionSelect={hardSkillsService.contentOptionSelect}
      MAX_COUNT={hardSkillsService.MAX_COUNT}
      handleSelectChange={hardSkillsService.handleSelectChange}
      handleAddSelect={hardSkillsService.handleAddSelect}
      handleSaveData={hardSkillsService.handleSaveData}

    // onSave={hardSkillsService.handleSave}
    />,
    <Lenguaje
      title='Lenguaje'
      selectedValues={lenguageService.selectedValues}
      contentOptionSelect={lenguageService.contentOptionSelect}
      MAX_COUNT={lenguageService.MAX_COUNT}
      handleSelectChange={lenguageService.handleSelectChange}
      handleAddSelect={lenguageService.handleAddSelect}
      handleSaveData={lenguageService.handleSaveData}
    // onSave={lenguageService.handleSave}
    />,
    <Disponibility
      title='Disponibility'
      selectedValues={disponibilityService.selectedValues}
      contentOptionSelect={disponibilityService.contentOptionSelect}
      MAX_COUNT={disponibilityService.MAX_COUNT}
      handleSelectChange={disponibilityService.handleSelectChange}
      handleAddSelect={disponibilityService.handleAddSelect}
      handleSaveData={disponibilityService.handleSaveData}
    // onSave={disponibilityService.handleSave}
    />,
    <ReviewStep
      title='PersonalInformationStep'
      onAddReviewCVEntry={reviewCVServices.addReviewCVEntrys}
      onUpdateReviewCVEntry={reviewCVServices.updateReviewCVEntrys}
      onDeleteReviewCVEntry={reviewCVServices.deleteReviewCVEntrys}
      dataModal={dataModal}
      setDataModal={setDataModal}
      onSave={reviewCVServices.handleSave}
    

    />,
  ];


  const isMobile = useMediaQuery('(max-width:600px)');
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const isStepOptional = (step: any) => {
    return step === 12;
  };

  const isStepSkipped = (step: any) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={styles.body}>
      <Box className={styles.container}>
        {isMobile ? (
          <Box className={styles.stepscontainer}>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps?.map((label, index) => (
                <Step key={label} completed={isStepSkipped(index)}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
        ) : (
          <Box className={styles.stepscontainer}>
            <Stepper activeStep={activeStep}>
              {steps?.map((label, index) => (
                <Step key={label} completed={isStepSkipped(index)}>
                  <StepLabel>{label} </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
        )}
        <div>
          <Box className={styles.componentcontainer}>
            {stepComponents[activeStep]}
          </Box>
        </div>

      </Box>
      <Box className={styles.navigationcontainer}>
        <Button
          color="inherit"
          disabled={activeStep === 0}
          onClick={handleBack}
        >
          Back
        </Button>
        <Box sx={{ flex: '1 1 auto' }} />
        {isStepOptional(activeStep) && (
          <Button color="inherit" onClick={handleSkip}>
            Skip
          </Button>
        )}
        <Button onClick={handleNext}>
          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
        </Button>
      </Box>
    </div>
  )
}

export default Stepss

