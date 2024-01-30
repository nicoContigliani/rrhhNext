import React from 'react'
import styles from './TextsArea.module.css'
import TextArea from 'antd/es/input/TextArea'
const TextsArea = (props: any) => {
    const { data, setData } = props
    const handlechange = (e: any) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div>
            <TextArea
                {...props}
                className={`${props.className}`}
                onChange={handlechange}
                // rows={props.rows}
                
                />

        </div>
    )
}

export default TextsArea


