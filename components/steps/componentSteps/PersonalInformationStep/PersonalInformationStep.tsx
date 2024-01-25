import React, { useEffect, useState } from 'react';
import style from './PersonalInformationStep.module.css'; // Adjust path if needed
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

const PersonalInformationStep = (props: any) => {
  const {
    personalInformation,
    onAddPersonalInformationEntry,
    onUpdatePersonalInformationEntry,
    onSave,
    onDeletePersonalInformationEntry,
  } = props;

  const handleChange = (index: any, field: any, value: any) => {
    onUpdatePersonalInformationEntry(index, field, value);
  };

  const handleClick = () => {
    onAddPersonalInformationEntry();
  };

  const handleSaveData = () => {
    onSave(personalInformation);
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

      {personalInformation.map((entry: any, index: any) => (
        <div>

          <div key={index} className={style.inputsData}>
            <div className={style.inputsData}>
              <Input
                className={style.inputs}
                placeholder="fullname"
                name="fullname"
                type="text"
                value={entry.fullname || ''}
                onChange={(e) => handleChange(index, 'fullname', e.target.value)}
              />
              <Input
                className={style.inputs}
                placeholder="email"
                name="email"
                type="email"
                value={entry.email || ''}
                onChange={(e) => handleChange(index, 'email', e.target.value)}
              />
              <Input
                className={style.inputs}
                placeholder="phone"
                name="phone"
                type="tel"
                value={entry.phone || ''}
                onChange={(e) => handleChange(index, 'phone', e.target.value)}
              />
              <label htmlFor="" className={style.inputs}> birthsday: </label>
              <Input
                className={style.inputs}
                placeholder="birthsday"
                name="birthsday"
                type="date"
                value={entry.birthsday || ''}
                onChange={(e) => handleChange(index, 'birthsday', e.target.value)}
              />
            </div>
          </div>

          <div className={style.deletes}>
            <Button
              variant="outlined"
              color="error"
              size="small"
              fullWidth
              onClick={() => onDeletePersonalInformationEntry(index)}
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

export default PersonalInformationStep;
