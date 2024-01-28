import React, { useState } from 'react';

const HardSkillsService = () => {
  const [selectedValues, setSelectedValues] = useState<any[]>(['React.js']);
  const [contentOptionSelect, setContentOptionSelect] = useState<any[]>([
    { value: 'React.js', label: 'React.js' },
    { value: 'Node', label: 'Node' },
    { value: 'Python', label: 'Python' },]);

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

export default HardSkillsService;