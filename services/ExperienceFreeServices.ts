import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setExperienceFreeData,
  addExperienceFreeEntry,
  updateExperienceFreeEntry,
  deleteExperienceFreeEntry,
} from '@/redux/features/stepss/experienceFree/experienceFreeSlice';


const ExperienceFreeService = () => {
  
  const experienceFreeData = useSelector(
    (state: any) => state.experience.experienceFreeData
  );
  const dispatch = useDispatch();

  const handleSave = (data: any) => {
    console.log('Saved personal information data:', data);
    dispatch(setExperienceFreeData(data));
  };

  const addExperienceFreeEntrys = () => {
    dispatch(addExperienceFreeEntry());
  };
  const updateExperienceFreeEntrys = (index: number, field: string, value: any) => {
    dispatch(updateExperienceFreeEntry({ index, field, value }));
  };

  const deleteExperienceFreeEntrys = (index: number) => {
    dispatch(deleteExperienceFreeEntry({ index }));
  };



  return {
    handleSave,
    addExperienceFreeEntrys,
    updateExperienceFreeEntrys,
    deleteExperienceFreeEntrys,
    experienceFreeData,
  };
};

export default ExperienceFreeService;