import React, { useState } from 'react';

const LenguageService = () => {
  const [selectedValues, setSelectedValues] = useState<any[]>(['Spanish']);
  const [contentOptionSelect, setContentOptionSelect] = useState<any[]>([
    { value: 'Englis', label: 'English' },
    { value: 'Aleman', label: 'Aleman' },
  ]);

  const MAX_COUNT = 3;

  const handleSelectChange = (newValues: any) => {
    if (newValues.length > MAX_COUNT) {
      return;
    }
    setSelectedValues(newValues);
  };

  const handleAddSelect = (newOption: any) => {
    setContentOptionSelect([...contentOptionSelect, newOption]);
    setSelectedValues([...selectedValues, newOption.value]);
  };

  const handleSaveData = () => {
    console.log('Saved data:', selectedValues);
  };

  return {
    selectedValues,
    contentOptionSelect,
    MAX_COUNT,
    handleSelectChange,
    handleAddSelect,
    handleSaveData,
  };
};


export default LenguageService;