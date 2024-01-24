import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import styles from './steps.module.css'

import PersonalInformationStep from './componentSteps/PersonalInformationStep/PersonalInformationStep';
import EducationStep from './componentSteps/EducationStep/EducationStep';
import ExperienceStep from './componentSteps/ExperienceStep/ExperienceStep';
import ReviewStep from './componentSteps/ReviewStep/ReviewStep';
import { useMediaQuery } from '@mui/material';
import Forms from '../Forms/Forms';
import SkillsStepHard from './componentSteps/SkillsStepHard/SkillsStephard';
import SkillsStepSoft from './componentSteps/SkillsStepSoft/SkillsStepsoft';
import Lenguaje from './componentSteps/Lenguaje/Lenguage';
import Disponibility from './componentSteps/DisponibilityStep/Disponibility';

import EducationService from '@/services/EducationServices'; // Adjust path if needed
import PersonalInformationServices from '@/services/personalInformation.services';
import ExperienceService from '@/services/ExperienceServices';
import SoftSkillsService from '@/services/SoftSkillsService';
import HardSkillsService from '@/services/HardSkillsService';
import LenguageService from '@/services/LenguageService';



const Stepss = () => {
  const [formData, setFormData] = useState<any | any[]>()

  const educationService = EducationService();
  const personInformationServices = PersonalInformationServices()
  const experienceService = ExperienceService()
  const softSkillsService = SoftSkillsService()
  const hardSkillsService = HardSkillsService()
  const lenguageService = LenguageService()





  const [inputssSkillS, setInputssSkillS] = useState<any[]>([]);
  const [inputshSkillS, setInputshSkillS] = useState<any[]>([]);
  const [inputsExperience, setInputsExperience] = useState<any[]>([]);
  const [inputsLenguaje, setInputsLenguaje] = useState<any[]>([]);
  const [inputsDisponibility, setInputsDisponibility] = useState<any[]>([]);

  const steps = [
    'Personal Information',
    'Education',
    'Experience',
    'Soft Skills',
    'Hard Skills',
    'Lenguaje',
    'Disponibility',
    'Review',
  ];

  // handleSave, addPersonalInformationEntry, updatePersonalInformationEntry, deletePersonalInformationEntry, personalInformationData 




  const stepComponents = [
    <PersonalInformationStep
      title='PersonalInformationStep'
      personalInformation={personInformationServices.personalInformationData}
      onAddPersonalInformationEntry={personInformationServices.addPersonalInformationEntry}
      onUpdatePersonalInformationEntry={personInformationServices.updatePersonalInformationEntry}
      onDeletePersonalInformationEntry={personInformationServices.deletePersonalInformationEntry}
      onSave={personInformationServices.handleSave}
    />
    ,
    <EducationStep
      title="Education Details"
      educationData={educationService.educationData}
      onAddEducationEntry={educationService.addEducationEntry}
      onUpdateEducationEntry={educationService.updateEducationEntry}
      onDeleteEducationEntry={educationService.deleteEducationEntry}
      onSave={educationService.handleSave}
    />,
    <ExperienceStep
      title='Experience'
      experienceData={experienceService.experienceData}
      onAddExperienceEntry={experienceService.addExperienceEntry}
      onUpdateExperienceEntry={experienceService.updateExperienceEntry}
      onDeleteExperienceEntry={experienceService.deleteExperienceEntry}
      onSave={experienceService.handleSave}
    />,
    <SkillsStepSoft
      title='Soft Skills'
      softSkillsData={softSkillsService.softSkillsData}
      onAddSoftSkillEntry={softSkillsService.addSoftSkillEntry}
      onUpdateSoftSkillEntry={softSkillsService.updateSoftSkillEntry}
      onDeleteSoftSkillEntry={softSkillsService.deleteSoftSkillEntry}
      onSave={softSkillsService.handleSave}
    />,
    <SkillsStepHard
      title='Soft Skills'
      hardSkillsData={hardSkillsService.hardSkillsData}
      onAddHardSkillEntry={hardSkillsService.addHardSkillEntry}
      onUpdateHardSkillEntry={hardSkillsService.updateHardSkillEntry}
      onDeleteHardSkillEntry={hardSkillsService.deleteHardSkillEntry}
      onSave={hardSkillsService.handleSave}
    />,
    <Lenguaje
      title='Lenguaje'
      lenguageData={lenguageService.lenguageData}
      onAddLenguageEntry={lenguageService.addLenguageEntry}
      onUpdateLenguageEntry={lenguageService.updateLenguageEntry}
      onDeleteLenguageEntry={lenguageService.deleteLengageEntry}
      onSave={lenguageService.handleSave}
    />,
    <Disponibility
      title='Disponibility'
      formData={formData}
      setFormData={setFormData}

      inputsDisponibility={inputsDisponibility}
      setInputsDisponibility={setInputsDisponibility}
    />,
    <ReviewStep />,
  ];





  const isMobile = useMediaQuery('(max-width:600px)');

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const isStepOptional = (step: any) => {
    return step === 10;
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
              {steps.map((label, index) => (
                <Step key={label} completed={isStepSkipped(index)}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
        ) : (
          <Box className={styles.stepscontainer}>
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => (
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

