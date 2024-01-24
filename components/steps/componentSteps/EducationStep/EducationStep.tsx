import React, { useEffect, useState } from 'react'
import style from './EducationStep.module.css'
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';



const EducationStep = (props: any) => {
  const { educationData, onAddEducationEntry, onUpdateEducationEntry, onSave, onDeleteEducationEntry } = props
  const handleChange = (index: any, field: any, value: any) => {
    onUpdateEducationEntry(index, field, value);
  };

  const handleClick = () => {
    onAddEducationEntry();
  };

  const handleSaveData = () => {
    onSave(educationData);
  };

  return (
    <div className={style.body}>
      <h3>
        {props.title}
      </h3>

      <div className={style.createInputs}>
        <Button variant="outlined" color="primary" size="small" fullWidth
          onClick={handleClick}>Agregar input</Button>
      </div>

      {educationData.map((entry: any, index: any) => (
        <div key={index}>
          <Input
            className="inputs"
            placeholder="title"
            name="title"
            type="text"
            value={entry.title || ''}
            onChange={(e) => handleChange(index, 'title', e.target.value)}
          />
          <Input
            className="inputs"
            placeholder="institute"
            name="institute"
            type="text"
            value={entry.institute || ''}
            onChange={(e) => handleChange(index, 'institute', e.target.value)}
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
            <Button variant="outlined" color="error" size="small" fullWidth
              onClick={() => onDeleteEducationEntry(index)}

            >
              Delete
            </Button>
          </div>
        </div>
      ))}

      <div className={style.deletes}>
        <Button variant="outlined" color="primary" size="small" fullWidth
          onClick={handleSaveData}
        >
          Guardar Datos
        </Button>
      </div>

    </div>
  );
};


export default EducationStep
