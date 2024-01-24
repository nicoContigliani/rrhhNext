import React, { useState, useEffect } from 'react';
import style from './SkillStepsoft.module.css'; // Assuming CSS file is named SoftSkillsStep.module.css
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

const SoftSkillsStep = (props: any) => {
  const {
    softSkillsData,
    onAddSoftSkillEntry,
    onUpdateSoftSkillEntry,
    onSave,
    onDeleteSoftSkillEntry,
  } = props;

  const handleChange = (index: any, field: any, value: any) => {
    onUpdateSoftSkillEntry(index, field, value);
  };

  const handleClick = () => {
    onAddSoftSkillEntry();
  };

  const handleSaveData = () => {
    onSave(softSkillsData);
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

      {softSkillsData.map((entry: any, index: any) => (
        <div key={index}>
          <Input
            className="inputs"
            placeholder="soft skill"
            name="softSkill"
            type="text"
            value={entry.softSkill || ''}
            onChange={(e) => handleChange(index, 'softSkill', e.target.value)}
          />
          <div className={style.deletes}>
            <Button
              variant="outlined"
              color="error"
              size="small"
              fullWidth
              onClick={() => onDeleteSoftSkillEntry(index)}
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

export default SoftSkillsStep;