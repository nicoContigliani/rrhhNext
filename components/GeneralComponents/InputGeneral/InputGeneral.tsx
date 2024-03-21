import React from 'react'
import { Input } from '@mui/material';

const InputGeneral = (props: any) => {
    const { data, handleInputChange, ...otherProps } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleInputChange(event);
  };
    return (
        <Input {...otherProps} className={`${props.className}`} onChange={handleChange} />

    )
}

export default InputGeneral
