import React, { useState } from 'react';

const HardSkillsService = () => {
  const [hardSkillsData, setHardSkillsData] = useState([{}]);

  const handleSave = (data: any) => {
    console.log('Saved data:', data);

    // Perform additional actions with the saved data here (e.g., send to API)

    setHardSkillsData(data);
  };

  const addHardSkillEntry = () => {
    setHardSkillsData([...hardSkillsData, {}]);
  };

  const updateHardSkillEntry = (index: any, field: any, value: any) => {
    setHardSkillsData((prevData) => {
      const newData = [...prevData];
      newData[index] = { ...newData[index], [field]: value };
      return newData;
    });
  };

  const deleteHardSkillEntry = (index: number) => {
    setHardSkillsData((prevData) => {
      const newData = [...prevData];
      newData.splice(index, 1);
      return newData;
    });
  };

  return {
    handleSave,
    addHardSkillEntry,
    updateHardSkillEntry,
    deleteHardSkillEntry,
    hardSkillsData,
  };
};

export default HardSkillsService;