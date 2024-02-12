import React, { useEffect, useState } from 'react';
import style from './PersonalDescriptionStep.module.css'; // Adjust path if needed
import { Button, Flex } from 'antd';
import Input from '@mui/material/Input';
import { useSelector, useDispatch } from 'react-redux';




const PersonalDescriptionStep = (props: any) => {
  const dataPersonDescriptionStorage: any | any[] = useSelector((state: any) => state);
  const [personalDescription, setPersonalDescription] = useState<any[]>()
  useEffect(() => {
    const { personalDescription: { personalDescriptionData } } = dataPersonDescriptionStorage
    setPersonalDescription(personalDescriptionData)

  }, [dataPersonDescriptionStorage])

  const {

    onAddPersonalDescriptionEntry,
    onUpdatePersonalDescriptionEntry,
    onSave,
    onDeletePersonalDescriptionEntry,
  } = props;





  const handleChange = (index: any, field: any, value: any) => {
    onUpdatePersonalDescriptionEntry(index, field, value);
  };

  const handleClick = () => {
    onAddPersonalDescriptionEntry();
  };

  const handleSaveData = () => {
    onSave(personalDescription);
  };

  return (
    <div className={style.body}>
      <h3>{props.title}</h3>

      {/* <div className={style.createInputs}>
        <Button
           type="primary"
           block
           color="primary"
           size="small"
          onClick={handleClick}
        >
          Agregar input
        </Button>
      </div> */}

      {personalDescription?.map((entry: any, index: any) => (
        <div>

          <div key={index} className={style.inputsData}>
            <div className={style.inputsData}>
              <Input
                className={style.inputs}
                placeholder="Person Description"
                name="persondescription"
                type="text"
                value={entry.persondescription || ''}
                onChange={(e) => handleChange(index, 'persondescription', e.target.value)}
              />
              
            </div>
          </div>

  
        </div>
      ))}

      {/* <div className={style.deletes}>
        <Button
          size="small"
          block
          onClick={handleSaveData}
        >
          Guardar Datos
        </Button>
      </div> */}
    </div>
  );
};

export default PersonalDescriptionStep;
