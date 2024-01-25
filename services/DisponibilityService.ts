import React, { useState } from 'react';

const disponibilityService = () => {
  const [disponibilityData, setDisponibilityData] = useState([{}]);

  const handleSave = (data: any) => {
    console.log('Saved data:', data);

    // Perform additional actions with the saved data here (e.g., send to API)

    setDisponibilityData(data);
  };

  const addDisponibilityEntry = () => {
    setDisponibilityData([...disponibilityData, {}]);
  };

  const updateDisponibilityEntry = (index: any, field: any, value: any) => {
    setDisponibilityData((prevData) => {
      const newData = [...prevData];
      newData[index] = { ...newData[index], [field]: value };
      return newData;
    });
  };

  const deleteDisponibilityEntry = (index: number) => {
    setDisponibilityData((prevData) => {
      const newData = [...prevData];
      newData.splice(index, 1);
      return newData;
    });
  };

  return {
    handleSave,
    addDisponibilityEntry,
    updateDisponibilityEntry,
    deleteDisponibilityEntry,
    disponibilityData,
  };
};

export default disponibilityService;