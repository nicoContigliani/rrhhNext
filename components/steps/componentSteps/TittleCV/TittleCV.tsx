import React, { useState, useEffect } from 'react';
import style from './SkillStephard.module.css'; // Assuming CSS file is named SoftSkillsStep.module.css
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';


import { DownOutlined } from '@ant-design/icons';
import { Select } from 'antd';
import Inputs from '@/components/inputs/Inputs';

const MAX_COUNT = 3;

const TittleCVStep = (props: any) => {
  const {
    onSave,
    selectedValues,
    contentOptionSelect,
    MAX_COUNT,
    handleSelectChange,
    handleAddSelect,
    handleSaveData,
  } = props;
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };


  return (
    <div className={style.body}>
      <h3>{props.title}</h3>

      <Select
        mode="multiple"
        value={selectedValues}
        onChange={handleSelectChange}
        style={{ width: '50%' }}
        // suffixIcon={suffix}
        placeholder="Please select"
        options={contentOptionSelect}
      />

      <div>
        <Input
          type="text"
          name="addSelect"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add"
          className={style.input}
        />

        <Button
          type="button"
          variant="outlined"
          color="primary"
          size="small"
          fullWidth
          onClick={() => handleAddSelect({ value: inputValue, label: inputValue })}
        >
          Add
        </Button>
      </div>
      <div className={style.deletes}>
        <Button
          type="button"
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

export default TittleCVStep;