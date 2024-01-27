import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setExperienceData,
  addExperienceEntry,
  updateExperienceEntry,
  deleteExperienceEntry,
} from '@/redux/features/stepss/experience/experienceSlice';


const ExperienceService = () => {
  
  const experienceData = useSelector(
    (state: any) => state.experience.experienceData
  );
  const dispatch = useDispatch();

  const handleSave = (data: any) => {
    console.log('Saved personal information data:', data);
    dispatch(setExperienceData(data));
  };

  const addExperienceEntrys = () => {
    dispatch(addExperienceEntry());
  };
  const updateExperienceEntrys = (index: number, field: string, value: any) => {
    dispatch(updateExperienceEntry({ index, field, value }));
  };

  const deleteExperienceEntrys = (index: number) => {
    dispatch(deleteExperienceEntry({ index }));
  };



  return {
    handleSave,
    addExperienceEntrys,
    updateExperienceEntrys,
    deleteExperienceEntrys,
    experienceData,
  };
};

export default ExperienceService;