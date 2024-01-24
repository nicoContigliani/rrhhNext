import React, { useState, useEffect } from 'react';
import style from './SkillStephard.module.css'; // Assuming CSS file is named SoftSkillsStep.module.css
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

const HardSkillsStep = (props: any) => {
  const {
    hardSkillsData,
    onAddHardSkillEntry,
    onUpdateHardSkillEntry,
    onSave,
    onDeleteHardSkillEntry,
  } = props;

  const handleChange = (index: any, field: any, value: any) => {
    onUpdateHardSkillEntry(index, field, value);
  };

  const handleClick = () => {
    onAddHardSkillEntry();
  };

  const handleSaveData = () => {
    onSave(hardSkillsData);
  };

  return (
    <div className={style.body}>
      <h3>{props.title}</h3>

      <div className={style.createInputs}>
        <Button
          variant="outlined"
          color="primary"
          size="small"
          fullWidth
          onClick={handleClick}
        >
          Agregar soft skill
        </Button>
      </div>

      {hardSkillsData.map((entry: any, index: any) => (
        <div key={index}>
          <Input
            className="inputs"
            placeholder="Hard skill"
            name="hardSkill"
            type="text"
            value={entry.softSkill || ''}
            onChange={(e) => handleChange(index, 'hardSkill', e.target.value)}
          />
          <div className={style.deletes}>
            <Button
              variant="outlined"
              color="error"
              size="small"
              fullWidth
              onClick={() => onDeleteHardSkillEntry(index)}
            >
              Delete
            </Button>
          </div>
        </div>
      ))}

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