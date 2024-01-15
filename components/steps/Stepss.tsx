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
import SkillsStep from './componentSteps/SkillsStep/SkillsStep';
import ReviewStep from './componentSteps/ReviewStep/ReviewStep';
import { useMediaQuery } from '@mui/material';
import Forms from '../Forms/Forms';



const steps = [
  'Personal Information',
  'Education',
  'Experience',
  'Skills',
  'Review',
];

// Define un array de componentes correspondientes a cada paso
const stepComponents = [
  <PersonalInformationStep

    title='PersonalInformationStep'
  >
  </PersonalInformationStep>,
  <EducationStep />,
  <ExperienceStep />,
  <SkillsStep />,
  <ReviewStep />,
];



const Stepss = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const isStepOptional = (step: any) => {
    return step === 3;
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


        <Box className={styles.componentcontainer}>
          {stepComponents[activeStep]}
        </Box>
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

