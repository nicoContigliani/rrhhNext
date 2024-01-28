import React, { useState } from 'react';

const SoftSkillsService = () => {
  const [selectedValues, setSelectedValues] = useState<any[]>(['god man']);
  const [contentOptionSelect, setContentOptionSelect] = useState<any[]>([
     { value: 'God Man', label: 'God Man' },
    { value: 'Leadership', label: 'Leadership' },
    { value: 'Conflict resolution', label: 'Conflict resolution' },
    { value: 'Interpersonal relationships', label: 'Interpersonal relationships' },
    { value: 'Collaboration', label: 'Collaboration' },
    { value: 'Problem-solving and critical thinking', label: 'Problem-solving and critical thinking' },
    { value: 'Critical thinking', label: 'Critical thinking' },
    { value: 'Creativity', label: 'Creativity' },
    { value: 'Problem-solving', label: 'Problem-solving' },
    { value: 'Adaptability', label: 'Adaptability' },
    { value: 'Resilience', label: 'Resilience' },
    { value: 'Self-management', label: 'Self-management' },
    { value: 'Time management', label: 'Time management' },
    { value: 'Motivation', label: 'Motivation' },
    { value: 'Stress management', label: 'Stress management' },
    { value: 'Organization', label: 'Organization' },
    { value: 'Initiative', label: 'Initiative' }
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

export default SoftSkillsService;