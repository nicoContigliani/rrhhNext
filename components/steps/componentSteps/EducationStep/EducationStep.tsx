import React, { useEffect, useState } from 'react'
import style from './EducationStep.module.css'
import Inputs from '@/components/inputs/Inputs';
import Datapicker from '@/components/Datapicked/Datapicker';

const EducationStep = (props: any) => {
  const { formData, setFormData, inputss, setInputss } = props
  const [data, setData] = useState<any | any[] | undefined>()
  console.log("🚀 ~ EducationStep ~ data:", data)
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
    };
    setInputss([...inputss, newInput]);
  };



  return (
    <div className={style.body}>
      <h3>
        {props.title}
      </h3>

      <button onClick={handleClick}>Crear input</button>
      {inputss?.map((input: any) => (
        <div>
          <Inputs
            className="inputs"
            data={data}
            setData={setData}
            placeholder="Title"
            name="title"
            type={''}
            minLength={''} autoFocus={false} color={''}
            defaultValue={formData?.title}
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
            defaultValue={formData?.institute}
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
        </div>

      ))}


    </div>
  )
}

export default EducationStep
