import React, { useState, useEffect } from 'react';
import style from './SkillStepsoft.module.css'; // Assuming CSS file is named SoftSkillsStep.module.css
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';


import { DownOutlined } from '@ant-design/icons';
import { Select } from 'antd';
import Inputs from '@/components/inputs/Inputs';

const MAX_COUNT = 3;

const SoftSkillsStep = (props: any) => {
  const {
    onSave,
    selectedValues,
    setSelectedValues,
    contentOptionSelect,
    setContentOptionSelect
  } = props;



  const suffix = (
    <>
      <span>{selectedValues?.length} / {MAX_COUNT}</span>
      <DownOutlined />
    </>
  );

  const handleSelectChange = (newValues: any) => {
    if (newValues.length > MAX_COUNT) {
      return;
    }
    setSelectedValues(newValues);
  };

  const [inputValue, setInputValue] = useState('');

  const handleAddSelect = () => {
    const newOption = { value: inputValue, label: inputValue };
    setContentOptionSelect([...contentOptionSelect, newOption]);
    setSelectedValues([...selectedValues, newOption.value]); // Select the newly added option
    setInputValue(''); // Clear the input field
  };
  const handleSaveData = () => {
    onSave(selectedValues);
  };

  return (
    <div className={style.body}>
      <h3>{props.title}</h3>

      <Select
        mode="multiple"
        value={selectedValues}
        onChange={handleSelectChange}
        style={{ width: '50%' }}
        suffixIcon={suffix}
        placeholder="Please select"
        options={contentOptionSelect}
      />

      <div>
        <Input
          type="text"
          name="addSelect"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Add"
          className={style.input}
        />

        <Button
          type="button"
          variant="outlined"
          color="primary"
          size="small"
          fullWidth
          onClick={handleAddSelect}
        >
          Add
        </Button>
      </div>
      <div className={style.deletes}>
        <Button
          variant="outlined"
          color="primary"
          size="small"
          fullWidth
          onClick={handleSaveData}
        >
          Guardar Datos
        </Button>
      </div>
    </div>
  );
};

export default SoftSkillsStep;