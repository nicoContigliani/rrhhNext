import React, { useState, useEffect } from 'react';
import style from './ExperienceFreeStep.module.css';
import Input from '@mui/material/Input';
import { useSelector } from 'react-redux';
import TextsArea from '@/components/TextArea/TextsArea';
import TextArea from 'antd/es/input/TextArea'
import { Button, Flex } from 'antd';

const ExperienceFreeStep = (props: any) => {
  const experienceFreeStorage: any | any[] = useSelector((state: any) => state);
  console.log("🚀 ~ experienceStep ~ experienceFreeStorage:", experienceFreeStorage)
  const [experienceFree, setExperienceFree] = useState<any[]>()
  useEffect(() => {
    const { experienceFree: { experienceFreeData } } = experienceFreeStorage
    setExperienceFree(experienceFreeData)

  }, [experienceFreeStorage])

  const {

    onAddExperienceFreeEntry,
    onUpdateExperienceFreeEntry,
    onSave,
    onDeleteExperienceFreeEntry,
  } = props;


  const handleChange = (index: any, field: any, value: any) => {
    onUpdateExperienceFreeEntry(index, field, value);
  };

  const handleClick = () => {
    onAddExperienceFreeEntry();
  };

  const handleSaveData = () => {
    onSave(experienceFree);
  };

  return (
    <div className={style.body}>
      <h3>{props.title}</h3>

      <div className={style.createInputs}>
        <Button
          type="primary"
          block
          color="primary"
          size="small"
          onClick={handleClick}
        >
          Agregar input
        </Button>
      </div>

      {experienceFree?.map((entry: any, index: any) => (
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
              autoFocus={false} color={''} defaultValue={undefined} disabled={false} id={''}
              rows={3}
              value={entry.detail_atribute || ''}
              onChange={(e) => handleChange(index, 'detail_atribute', e.target.value)}
            />



          </div>
          <br />
          <div className={style.deletes}>
            <Button
              block
              color="primary"
              size="small"
              danger
              ghost
              onClick={() => onDeleteExperienceFreeEntry(index)}
            >
              Delete
            </Button>
          </div>
        </div>
      ))}

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

export default ExperienceFreeStep;