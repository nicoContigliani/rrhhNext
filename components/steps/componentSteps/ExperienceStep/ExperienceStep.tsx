import React, { useState, useEffect } from 'react';
import style from './ExperienceStep.module.css';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import { useSelector } from 'react-redux';
import TextsArea from '@/components/TextArea/TextsArea';
import TextArea from 'antd/es/input/TextArea'

const ExperienceStep = (props: any) => {
  const experienceStorage: any | any[] = useSelector((state: any) => state);
  console.log("🚀 ~ experienceStep ~ experienceStorage:", experienceStorage)
  const [experience, setExperience] = useState<any[]>()
  useEffect(() => {
    const { experience: { experienceData } } = experienceStorage
    setExperience(experienceData)

  }, [experienceStorage])

  const {

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
    onSave(experience);
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

      {experience?.map((entry: any, index: any) => (
        <div>

          <div key={index} className={style.inputsData}>
            <div className={style.inputsData}>
              <Input
                className={style.inputs}
                placeholder="company"
                name="company"
                type="text"
                value={entry.company || ''}
                onChange={(e) => handleChange(index, 'company', e.target.value)}
              />
              <Input
                className={style.inputs}
                placeholder="job"
                name="job"
                type="text"
                value={entry.job || ''}
                onChange={(e) => handleChange(index, 'job', e.target.value)}
              />

              <label htmlFor="" className={style.inputs}>start</label>
              <Input
                className={style.inputs}
                placeholder="start"
                name="start"
                type="date"
                value={entry.start || ''}
                onChange={(e) => handleChange(index, 'start', e.target.value)}
              />
              <label htmlFor="" className={style.inputs}>finish</label>
              <Input
                className={style.inputs}
                placeholder="finish"
                name="finish"
                type="date"
                value={entry.finish || ''}
                onChange={(e) => handleChange(index, 'finish', e.target.value)}
              />

            </div>
          </div>
          <div className={style.inputsData}>
            {/* <Input
              className={style.inputs}
              placeholder="Details"
              name="detail_atribute"
              type="text"
              value={entry.job || ''}
              onChange={(e) => handleChange(index, 'job', e.target.value)}
            /> */}

            <TextArea
              className={style.textArea}
              placeholder="Details"
              name="detail_atribute"
              autoFocus={false} color={''} defaultValue={undefined} disabled={false}  id={''} 
              rows={3}
              value={entry.detail_atribute || ''}
              onChange={(e) => handleChange(index, 'detail_atribute', e.target.value)}
            />



          </div>
<br />
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