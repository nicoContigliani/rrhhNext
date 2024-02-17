// useMessage.js
import { useState } from 'react';
import { message } from 'antd';

const useMessage = () => {
    const [content, setContent] = useState('');

    const success = async () => {
        await message.success(content || 'This is a success message');
    };

    const error = async () => {
        await message.error(content || 'This is an error message');
    };

    const warning = async () => {
        await message.warning(content || 'This is a warning message');
    };

    return {
        success,
        error,
        warning,
        setContent
    };
};

export default useMessage;