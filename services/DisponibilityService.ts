import React, { useState } from 'react';

const disponibilityService = () => {
  const [selectedValues, setSelectedValues] = useState<any[]>(['8:00 - 13:00']);
  const [contentOptionSelect, setContentOptionSelect] = useState<any[]>([
    { value: '8:00 a 13:00', label: '8:00 a 13:00' },
    { value: '8:00 a 17:00', label: '8:00 a 13:00' },
    { value: '13:00 a 22:00', label: '13:00 a 22:00' },
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

export default disponibilityService;