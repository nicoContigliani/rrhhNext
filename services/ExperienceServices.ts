import React, { useState } from 'react';

const ExperienceService = () => {
  const [experienceData, setExperienceData] = useState([{}]);

  const handleSave = (data: any) => {
    console.log('Saved data:', data);

    // Perform additional actions with the saved data here (e.g., send to API)

    setExperienceData(data);
  };

  const addExperienceEntry = () => {
    setExperienceData([...experienceData, {}]);
  };

  const updateExperienceEntry = (index: any, field: any, value: any) => {
    setExperienceData((prevData) => {
      const newData = [...prevData];
      newData[index] = { ...newData[index], [field]: value };
      return newData;
    });
  };

  const deleteExperienceEntry = (index: number) => {
    setExperienceData((prevData) => {
      const newData = [...prevData];
      newData.splice(index, 1);
      return newData;
    });
  };

  return {
    handleSave,
    addExperienceEntry,
    updateExperienceEntry,
    deleteExperienceEntry,
    experienceData,
  };
};

export default ExperienceService;