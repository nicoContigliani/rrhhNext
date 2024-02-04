import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setPersonalDescriptionData,
  addPersonalDescriptionEntry,
  updatePersonalDescriptionEntry,
  deletePersonalDescriptionEntry,
} from '@/redux/features/stepss/personalDescription/personalDescriptionSlice';


const PersonalDescriptionService = () => {
  
  const personalDescriptionData = useSelector(
    (state: any) => state.personalInformation.personalDescriptionData
  );
  const dispatch = useDispatch();

  const handleSave = (data: any) => {
    console.log('Saved personal information data:', data);
    dispatch(setPersonalDescriptionData(data));
  };

  const addPersonalDescriptionEntrys = () => {
    dispatch(addPersonalDescriptionEntry());
  };
  const updatePersonalDescriptionEntrys = (index: number, field: string, value: any) => {
    dispatch(updatePersonalDescriptionEntry({ index, field, value }));
  };

  const deletePersonalDescriptionEntrys = (index: number) => {
    dispatch(deletePersonalDescriptionEntry({ index }));
  };



  return {
    handleSave,
    addPersonalDescriptionEntrys,
    updatePersonalDescriptionEntrys,
    deletePersonalDescriptionEntrys,
    personalDescriptionData,
  };
};

export default PersonalDescriptionService;