import React, { useEffect, useState } from 'react'
import style from './ExperienceStep.module.css'
import Inputs from '@/components/inputs/Inputs';
import uuid from 'react-uuid';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



const ExperienceStep = (props: any) => {
  const { formData, setFormData, inputsExperience, setInputsExperience } = props
  const [data, setData] = useState<any | any[] | undefined>()
  useEffect(() => {
    if(data){
      console.log("🚀 ~ useEffect ~ data: 16*******************************************", data)
      
    }
    if (data && data?.company && data?.job && data?.start && data?.finish) {
      console.log("llega")
      setFormData({
        ...data,
        formData
      })
    }
  }, [data])

  const handleClick = () => {
    const newInput = {
      value: "",
      id: uuid()
    };
    setInputsExperience([...inputsExperience, newInput]);
  };
  const handleDeleteClick = (idData: any) => {
    const dataReturn = inputsExperience.filter((idS: any) => idS.id !== idData)
    setInputsExperience(dataReturn)
  }


  return (
    <div className={style.body}>
      <h3 className={style.titles}>
        {props.title}
      </h3>

      {inputsExperience?.map((input: any) => (
        <div>
          <Inputs
            className="inputs"
            data={data}
            setData={setData}
            placeholder="Company"
            name="company"
            type={''}
            minLength={''} autoFocus={false} color={''}
            defaultValue={formData?.company}
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
            placeholder="Job"
            name="job"
            type={''}
            minLength={''} autoFocus={false} color={''}
            defaultValue={formData?.job}
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
                defaultValue={formData?.start}
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
                defaultValue={formData?.finish}
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

export default ExperienceStep
