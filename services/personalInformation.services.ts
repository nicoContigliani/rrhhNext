import React, { useState } from 'react';

const PersonalInformationService = () => {
  const [personalInformationData, setPersonalInformationData] = useState([{}]);

  const handleSave = (data: any) => {
    console.log('Saved personal information data:', data);

    // Perform additional actions with the saved data here (e.g., send to API)

    setPersonalInformationData(data);
  };

  const addPersonalInformationEntry = () => {
    setPersonalInformationData([...personalInformationData, {}]);
  };

  const updatePersonalInformationEntry = (index: any, field: any, value: any) => {
    setPersonalInformationData((prevData) => {
      const newData = [...prevData];
      newData[index] = { ...newData[index], [field]: value };
      return newData;
    });
  };

  const deletePersonalInformationEntry = (index: number) => {
    setPersonalInformationData((prevData) => {
      const newData = [...prevData];
      newData.splice(index, 1);
      return newData;
    });
  };

  return {
    handleSave,
    addPersonalInformationEntry,
    updatePersonalInformationEntry,
    deletePersonalInformationEntry,
    personalInformationData,
  };
};

export default PersonalInformationService;