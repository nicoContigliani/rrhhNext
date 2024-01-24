import React, { useState, useEffect } from 'react';
import style from './LenguajeStep.module.css'; // Assuming CSS file is named SoftSkillsStep.module.css
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

const SoftSkillsStep = (props: any) => {
  const {
    lenguageData,
    onAddLenguageEntry,
    onUpdateLenguageEntry,
    onSave,
    onDeleteLenguageEntry,
  } = props;

  const handleChange = (index: any, field: any, value: any) => {
    onUpdateLenguageEntry(index, field, value);
  };

  const handleClick = () => {
    onAddLenguageEntry();
  };

  const handleSaveData = () => {
    onSave(lenguageData);
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

      {lenguageData?.map((entry: any, index: any) => (
        <div key={index}>
          <Input
            className="inputs"
            placeholder="Lenguage"
            name="lenguage"
            type="text"
            value={entry.lenguage || ''}
            onChange={(e) => handleChange(index, 'lenguage', e.target.value)}
          />
          <div className={style.deletes}>
            <Button
              variant="outlined"
              color="error"
              size="small"
              fullWidth
              onClick={() => onDeleteLenguageEntry(index)}
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