import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setPersonalInformationData,
  addPersonalInformationEntry,
  updatePersonalInformationEntry,
  deletePersonalInformationEntry,
} from '@/redux/features/stepss/personalnformation/personalnformationSlice';


const PersonalInformationService = () => {
  
  const personalInformationData = useSelector(
    (state: any) => state.personalInformation.personalInformationData
  );
  const dispatch = useDispatch();

  const handleSave = (data: any) => {
    console.log('Saved personal information data:', data);
    dispatch(setPersonalInformationData(data));
  };

  const addPersonalInformationEntrys = () => {
    dispatch(addPersonalInformationEntry());
  };
  const updatePersonalInformationEntrys = (index: number, field: string, value: any) => {
    dispatch(updatePersonalInformationEntry({ index, field, value }));
  };

  const deletePersonalInformationEntrys = (index: number) => {
    dispatch(deletePersonalInformationEntry({ index }));
  };



  return {
    handleSave,
    addPersonalInformationEntrys,
    updatePersonalInformationEntrys,
    deletePersonalInformationEntrys,
    personalInformationData,
  };
};

export default PersonalInformationService;