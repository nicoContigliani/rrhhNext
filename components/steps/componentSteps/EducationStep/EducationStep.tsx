import React, { useEffect, useState } from 'react'
import style from './EducationStep.module.css'
import { Button, Flex } from 'antd';
import Input from '@mui/material/Input';
import { useSelector, useDispatch } from 'react-redux';


const EducationStep = (props: any) => {

  const dataEducationStorage: any | any[] = useSelector((state: any) => state);
  console.log("🚀 ~ EducationStep ~ dataEducationStorage:", dataEducationStorage)
  const [education, setEducation] = useState<any[]>()
  useEffect(() => {
    const { education: { educationData } } = dataEducationStorage
    setEducation(educationData)

  }, [dataEducationStorage])

  const {

    onAddEducationEntry,
    onUpdateEducationEntry,
    onSave,
    onDeleteEducationEntry,
  } = props;


  const handleChange = (index: any, field: any, value: any) => {
    onUpdateEducationEntry(index, field, value);
  };

  const handleClick = () => {
    onAddEducationEntry();
  };

  const handleSaveData = () => {
    onSave(education);
  };

  return (
    <div className={style.body} >
      <h3>
        {props.title}
      </h3>

      <div className={style.createInputs}>
        <Button
          type="primary"
          color="primary"
          size="small"
          block
          onClick={handleClick}>Agregar input</Button>
      </div>

      {education?.map((entry: any, index: any) => (
        <div>

          <div key={index} className={style.inputsData}>
            <div className={style.inputsData}>
              <Input
                className={style.inputs}
                placeholder="title"
                name="title"
                type="text"
                value={entry.title || ''}
                onChange={(e) => handleChange(index, 'title', e.target.value)}
              />
              <Input
                className={style.inputs}
                placeholder="institute"
                name="institute"
                type="text"
                value={entry.institute || ''}
                onChange={(e) => handleChange(index, 'institute', e.target.value)}
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
          <div className={style.deletes}>
            <Button
              color="primary"
              size="small"
              danger
              ghost
              block
              onClick={() => onDeleteEducationEntry(index)}

            >
              Delete
            </Button>
          </div>
        </div>

      ))}

      <div className={style.deletes}>
        <Button
          size="small"
          block
          onClick={handleSaveData}
        >
          Guardar Datos
        </Button>
      </div>

    </div>
  );
};


export default EducationStep
