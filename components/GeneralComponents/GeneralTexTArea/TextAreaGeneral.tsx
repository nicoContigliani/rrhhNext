import React from 'react';
import { Input } from 'antd';
const { TextArea } = Input;

const TextAreaGeneral = (props: any) => {

    const { data, setData } = props

    return (
        <div>
            <TextArea {...props} />
        </div>
    )
}

export default TextAreaGeneral
