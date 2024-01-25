import React, { useState, useEffect } from 'react';
import style from './Disponibility.module.css'; // Assuming CSS file is named SoftSkillsStep.module.css
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

const SoftSkillsStep = (props: any) => {
  const {
    disponibilityData,
    onAddDisponibilityEntry,
    onUpdateDisponibilityEntry,
    onSave,
    onDeleteDisponibilityEntry,
  } = props;

  const handleChange = (index: any, field: any, value: any) => {
    onUpdateDisponibilityEntry(index, field, value);
  };

  const handleClick = () => {
    onAddDisponibilityEntry();
  };

  const handleSaveData = () => {
    onSave(disponibilityData);
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

      {disponibilityData?.map((entry: any, index: any) => (
        <div key={index}>
          <Input
            className="inputs"
            placeholder="disponibility"
            name="disponibility"
            type="text"
            value={entry.disponibility || ''}
            onChange={(e) => handleChange(index, 'disponibility', e.target.value)}
          />
          <div className={style.deletes}>
            <Button
              variant="outlined"
              color="error"
              size="small"
              fullWidth
              onClick={() => onDeleteDisponibilityEntry(index)}
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