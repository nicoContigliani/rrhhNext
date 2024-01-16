import React, { useEffect, useState } from 'react'
import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
} from 'antd';
import Inputs from '@/components/inputs/Inputs';
import style from './PersonalInformationStep.module.css'


const PersonalInformationStep = (props: any) => {
  const { formData, setFormData } = props
  const [data, setData] = useState<any | any[] | undefined>()
  useEffect(() => {

    if (data && data?.fullname && data?.email && data?.phone && data?.birthday){
      console.log("llega")
    }

    // if (data?.fullname.length !== 0 &&
    //   data?.email.length !== 0 &&
    //   data?.phone.length !== 0 &&
    //   data?.fullname.length !== 0) {
      //    console.log("todo",data)
      // }
  }, [data])







  return (
    <div className={style.body}>
      <h3>
        {props.title}
      </h3>

      <Inputs
        className="inputs"
        data={data}
        setData={setData}
        placeholder="fullname"
        name="fullname"
        type={''}
        minLength={''} autoFocus={false} color={''}
        defaultValue={undefined} disabled={false}
        fullWidth={false}
        id={''}
        inputComponent={undefined} multiline={false}
        label={''} rows={''}
        required
      />
      <Inputs
        className={style.inputs}
        data={data}
        setData={setData}
        placeholder="email"
        name="email"
        type={'email'}
        minLength={''} autoFocus={false} color={''}
        defaultValue={undefined} disabled={false}
        fullWidth={false}
        id={''}
        inputComponent={undefined} multiline={false}
        label={''} rows={''}
        required

      />
      <Inputs
        className={style.inputs}
        data={data}
        setData={setData}
        placeholder="phone"
        name="phone"
        type={''}
        minLength={''} autoFocus={false} color={''}
        defaultValue={undefined} disabled={false}
        fullWidth={false}
        id={''}
        inputComponent={undefined} multiline={false}
        label={''} rows={''}
        required

      />
      <Inputs
        data={data}
        className={style.inputs}
        setData={setData}
        placeholder="birthday"
        name="birthday"
        type={''}
        minLength={''} autoFocus={false} color={''}
        defaultValue={undefined} disabled={false}
        fullWidth={false}
        id={''}
        inputComponent={undefined} multiline={false}
        label={''} rows={''}
        required

      />
    </div>
  )
}

export default PersonalInformationStep