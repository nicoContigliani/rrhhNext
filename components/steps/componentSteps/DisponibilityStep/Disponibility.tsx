import React, { useState, useEffect } from 'react';
import style from './Disponibility.module.css'; // Assuming CSS file is named SoftSkillsStep.module.css
import { Button, Flex } from 'antd';
import Input from '@mui/material/Input';
import { Select } from 'antd';

const SoftSkillsStep = (props: any) => {
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
  console.log("🚀 ~ SoftSkillsStep ~ inputValue:", inputValue)

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
          type="primary"
          block
          color="primary"
          size="small"
          onClick={() => handleAddSelect({ value: inputValue, label: inputValue })}
        >
          Add
        </Button>
      </div>
      <div className={style.deletes}>
        {/* <Button
          size="small"
          block
          onClick={handleSaveData}
        >
          Guardar Datos
        </Button> */}
      </div>
    </div>
  );
};

export default SoftSkillsStep;