import React, { useEffect, useState } from 'react'

import style from './SkillStepsoft.module.css'
import Inputs from '@/components/inputs/Inputs';
import uuid from 'react-uuid';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const SkillsStepSoft = (props: any) => {

    const { formData, setFormData, inputss, setInputss,inputssSkillS, setInputssSkillS      } = props
    const [data, setData] = useState<any | any[] | undefined>()
    useEffect(() => {

        if (data && data?.fullname && data?.email && data?.phone && data?.birthday) {
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
        setInputssSkillS([...inputssSkillS, newInput]);
    };
    const handleDeleteClick = (idData: any) => {
        const dataReturn = inputssSkillS.filter((idS: any) => idS.id !== idData)
        inputssSkillS(dataReturn)
    }

    return (
        <div className={style.body}>
        <h3>
          {props.title}
        </h3>
  
        {inputssSkillS?.map((input: any) => (
          <div>
            <Inputs
              className="inputs"
              data={data}
              setData={setData}
              placeholder="Soft Skill"
              name="skillsoft"
              type={''}
              minLength={''} autoFocus={false} color={''}
              defaultValue={formData?.skillsoft}
              disabled={false}
              fullWidth={false}
              id={''}
              inputComponent={undefined} multiline={false}
              label={''} rows={''}
              required
            />
   
      
  
            <Stack direction="row" spacing={2}>
              <Button variant="outlined" color="error" size="small"
                onClick={() => handleDeleteClick(input?.id)}
              >
                Delete
              </Button>
            </Stack>
          </div>
  
        ))}
        <div>
          <hr />
          <button onClick={handleClick}>Crear input</button>
          <hr />
        </div>
  
  
      </div>
    )
}

export default SkillsStepSoft
