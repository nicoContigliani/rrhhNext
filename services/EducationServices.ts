import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setEducationData,
  addEducationEntry,
  updateEducationEntry,
  deleteEducationEntry,
} from '@/redux/features/stepss/education/educationSlice';


const EducationService = () => {
  
  const EducationData = useSelector(
    (state: any) => state.Education?.EducationData
  );
  const dispatch = useDispatch();

  const handleSave = (data: any) => {
    console.log('Saved personal information data:', data);
    dispatch(setEducationData(data));
  };

  const addEducationEntrys = () => {
    dispatch(addEducationEntry());
  };
  const updateEducationEntrys = (index: number, field: string, value: any) => {
    dispatch(updateEducationEntry({ index, field, value }));
  };

  const deleteEducationEntrys = (index: number) => {
    dispatch(deleteEducationEntry({ index }));
  };



  return {
    handleSave,
    addEducationEntrys,
    updateEducationEntrys,
    deleteEducationEntrys,
    EducationData,
  };
};

export default EducationService;