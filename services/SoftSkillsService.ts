import React, { useState } from 'react';

const SoftSkillsService = () => {
  const [softSkillsData, setSoftSkillsData] = useState([{}]);

  const handleSave = (data: any) => {
    console.log('Saved data:', data);

    // Perform additional actions with the saved data here (e.g., send to API)

    setSoftSkillsData(data);
  };

  const addSoftSkillEntry = () => {
    setSoftSkillsData([...softSkillsData, {}]);
  };

  const updateSoftSkillEntry = (index: any, field: any, value: any) => {
    setSoftSkillsData((prevData) => {
      const newData = [...prevData];
      newData[index] = { ...newData[index], [field]: value };
      return newData;
    });
  };

  const deleteSoftSkillEntry = (index: number) => {
    setSoftSkillsData((prevData) => {
      const newData = [...prevData];
      newData.splice(index, 1);
      return newData;
    });
  };

  return {
    handleSave,
    addSoftSkillEntry,
    updateSoftSkillEntry,
    deleteSoftSkillEntry,
    softSkillsData,
  };
};

export default SoftSkillsService;