import React, { useState, useEffect } from 'react';
import style from './SkillStephard.module.css'; // Assuming CSS file is named SoftSkillsStep.module.css
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';


import { DownOutlined } from '@ant-design/icons';
import { Select } from 'antd';
import Inputs from '@/components/inputs/Inputs';

const MAX_COUNT = 3;

const HardSkillsStep = (props: any) => {
  const {
    onSave,
    selectedValuess,
    setSelectedValuess,
    contentOptionSelects,
    setContentOptionSelects
  } = props;



  const suffix = (
    <>
      <span>{selectedValuess?.length} / {MAX_COUNT}</span>
      <DownOutlined />
    </>
  );

  const handleSelectChange = (newValues: any) => {
    if (newValues.length > MAX_COUNT) {
      return;
    }
    setSelectedValuess(newValues);
  };

  const [inputValue, setInputValue] = useState('');

  const handleAddSelect = () => {
    const newOption = { value: inputValue, label: inputValue };
    setContentOptionSelects([...contentOptionSelects, newOption]);
    setSelectedValuess([...selectedValuess, newOption.value]); // Select the newly added option
    setInputValue(''); // Clear the input field
  };
  const handleSaveData = () => {
    onSave(selectedValuess);
  };

  return (
    <div className={style.body}>
      <h3>{props.title}</h3>
      <div className={style.selects}>
        <Select
          mode="multiple"
          value={selectedValuess}
          onChange={handleSelectChange}
          style={{ width: '100%' }}
          suffixIcon={suffix}
          placeholder="Please select"
          options={contentOptionSelects}
        />
      </div>

      <div>
        <Input
          type="text"
          name="addSelect"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Add"
          className={style.input}
        />
      </div>
      <div className={style.deletes}>
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

export default HardSkillsStep;