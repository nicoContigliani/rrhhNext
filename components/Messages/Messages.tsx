import React, { useState } from 'react'
import { Button, message, Space } from 'antd';
import Spinner from '../spinner/Spinner';

const Messages = (props: any) => {
    // const { key, content, setContent } = props
    const {
        key,
        content,
        loadings
    } = props


    console.log("🚀 ~ Messages ~ key:", key)
    const [messageApi, contextHolder] = message.useMessage();





    const success = async () => {
        await messageApi.open({
            type: 'success',
            content: content || 'This is a success message',
        });
    };

    const error = async () => {
        messageApi.open({
            type: 'error',
            content: content || 'This is an error message',
        });
    };

    const warning = async () => {
        await messageApi.open({
            type: 'warning',
            content: content || 'This is a warning message',
        });
    };


    if (key && key === 200) success()
    if (key && key === 500 || key && key === 400) error()
    if  (key && key !== 200||key && key !== 500 || key && key!== 400 && loadings) <Spinner/>
    


    return (
        <div>
            {contextHolder}
            {/* <Button onClick={success}>Success</Button>
            <Button onClick={error}>Error</Button>
            <Button onClick={warning}>Warning</Button> */}
        </div>
    )
}

export default Messages

