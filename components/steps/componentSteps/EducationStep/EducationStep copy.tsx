import React, { useEffect, useState } from 'react'
import style from './EducationStep.module.css'
import Inputs from '@/components/inputs/Inputs';
import uuid from 'react-uuid';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



const EducationStep = (props: any) => {
  const { formDataEducation, setFormDataEducation, inputss, setInputss } = props
  const [data, setData] = useState<any | any[] | undefined>()

  
  useEffect(() => {
    if (
      data && data.title
      && data.institute
      && data.start && data.finish
      && data?.finish
      ) {
        console.log("llega")
        setFormDataEducation({
          ...data,
          formDataEducation
      })
    }
  }, [data])
  console.log("🚀 ~ EducationStep ~ formData:", formDataEducation,"***************************")
  
  const handleClick = () => {
    const newInput = {
      id: uuid(),
      title: "",
      institute: "",
      start: "",
      finish: "",
    };
    setInputss([...inputss, newInput]);
  };
  const handleDeleteClick = (idData: any) => {
    const dataReturn = inputss.filter((idS: any) => idS.id !== idData)
    setInputss(dataReturn)
  }


  return (
    <div className={style.body}>
      <h3 className={style.titles}>
        {props.title}
      </h3>

      {inputss?.map((input: any) => (
        <div key={input.id}>
          <Inputs
            className="inputs"
            data={data}
            setData={setData}
            placeholder="Title"
            name="title"
            type={''}
            minLength={''} autoFocus={false} color={''}
            defaultValue={formDataEducation?.title}
            disabled={false}
            fullWidth={false}
            id={''}
            inputComponent={undefined} multiline={false}
            label={''} rows={''}
            required
          />
          <Inputs
            className="inputs"
            data={data}
            setData={setData}
            placeholder="Institute"
            name="institute"
            type={''}
            minLength={''} autoFocus={false} color={''}
            defaultValue={formDataEducation?.institute}
            disabled={false}
            fullWidth={false}
            id={''}
            inputComponent={undefined} multiline={false}
            label={''} rows={''}
            required
          />
          <div className={style.inputsData}>
            <label htmlFor="Start">Start:
              <Inputs
                className="inputs"
                data={data}
                setData={setData}
                placeholder="start"
                name="start"
                type={'Date'}
                minLength={''} autoFocus={false} color={''}
                defaultValue={formDataEducation?.start}
                disabled={false}
                fullWidth={false}
                id={''}
                inputComponent={undefined} multiline={false}
                label={''} rows={''}
                required
              />
            </label>
            <label htmlFor="Start">Finish:
              <Inputs
                className="inputs"
                data={data}
                setData={setData}
                placeholder="finish"
                name="finish"
                type={'Date'}
                minLength={''} autoFocus={false} color={''}
                defaultValue={formDataEducation?.finish}
                disabled={false}
                fullWidth={false}
                id={''}
                inputComponent={undefined} multiline={false}
                label={''} rows={''}
                required
              />
            </label>
          </div>
          <div className={style.deletes}>
            <Button variant="outlined" color="error" size="small" fullWidth
              onClick={() => handleDeleteClick(input?.id)}
            >
              Delete
            </Button>
          </div>
        </div>

      ))}
      <div>
        <div className={style.createInputs}>
          <Button variant="outlined" color="primary" size="small" fullWidth
            onClick={handleClick}>Crear input</Button>
        </div>

      </div>


    </div>
  )
}

export default EducationStep
