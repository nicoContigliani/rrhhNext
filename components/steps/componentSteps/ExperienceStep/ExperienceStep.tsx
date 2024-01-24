import React, { useState, useEffect } from 'react';
import style from './ExperienceStep.module.css';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

const ExperienceStep = (props: any) => {
  const {
    experienceData,
    onAddExperienceEntry,
    onUpdateExperienceEntry,
    onSave,
    onDeleteExperienceEntry,
  } = props;

  const handleChange = (index: any, field: any, value: any) => {
    onUpdateExperienceEntry(index, field, value);
  };

  const handleClick = () => {
    onAddExperienceEntry();
  };

  const handleSaveData = () => {
    onSave(experienceData);
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
          Agregar input
        </Button>
      </div>

      {experienceData?.map((entry: any, index: any) => (
        <div key={index}>
          <Input
            className="inputs"
            placeholder="company"
            name="company"
            type="text"
            value={entry.company || ''}
            onChange={(e) => handleChange(index, 'company', e.target.value)}
          />
          <Input
            className="inputs"
            placeholder="job"
            name="job"
            type="text"
            value={entry.job || ''}
            onChange={(e) => handleChange(index, 'job', e.target.value)}
          />
          <div className={style.inputsData}>
            <Input
              className="inputs"
              placeholder="start"
              name="start"
              type="date"
              value={entry.start || ''}
              onChange={(e) => handleChange(index, 'start', e.target.value)}
            />
            <Input
              className="inputs"
              placeholder="finish"
              name="finish"
              type="date"
              value={entry.finish || ''}
              onChange={(e) => handleChange(index, 'finish', e.target.value)}
            />
          </div>
          <div className={style.deletes}>
            <Button
              variant="outlined"
              color="error"
              size="small"
              fullWidth
              onClick={() => onDeleteExperienceEntry(index)}
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

export default ExperienceStep;