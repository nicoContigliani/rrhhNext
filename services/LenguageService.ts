import React, { useState } from 'react';

const LenguageService = () => {
  const [lenguageData, setLenguageData] = useState([{}]);

  const handleSave = (data: any) => {
    console.log('Saved data:', data);

    // Perform additional actions with the saved data here (e.g., send to API)

    setLenguageData(data);
  };

  const addLenguageEntry = () => {
    setLenguageData([...lenguageData, {}]);
  };

  const updateLenguageEntry = (index: any, field: any, value: any) => {
    setLenguageData((prevData) => {
      const newData = [...prevData];
      newData[index] = { ...newData[index], [field]: value };
      return newData;
    });
  };

  const deleteLenguageEntry = (index: number) => {
    setLenguageData((prevData) => {
      const newData = [...prevData];
      newData.splice(index, 1);
      return newData;
    });
  };

  return {
    handleSave,
    addLenguageEntry,
    updateLenguageEntry,
    deleteLenguageEntry,
    lenguageData,
  };
};

export default LenguageService;