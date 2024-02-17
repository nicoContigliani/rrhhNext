import React, { useState } from 'react'
import { Button, message, Space } from 'antd';

const Messages = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const [content, setContent] = useState<any>()

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



    return (
        <div>
            {contextHolder}
            <Button onClick={success}>Success</Button>
            <Button onClick={error}>Error</Button>
            <Button onClick={warning}>Warning</Button>
        </div>
    )
}

export default Messages

