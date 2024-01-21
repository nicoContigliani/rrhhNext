import React, { useState } from 'react';

const EducationService = () => {
    const [educationData, setEducationData] = useState([{}]);

    const handleSave = (data: any) => {
        console.log('Saved data:', data);

        // Perform additional actions with the saved data here (e.g., send to API)

        setEducationData(data);
    };

    const addEducationEntry = () => {
        setEducationData([...educationData, {}]);
    };

    const updateEducationEntry = (index: any, field: any, value: any) => {
        setEducationData((prevData) => {
            const newData = [...prevData];
            newData[index] = { ...newData[index], [field]: value };
            return newData;
        });
    };
    const deleteEducationEntry = (index: number) => {
        setEducationData((prevData) => {
            const newData = [...prevData];
            newData.splice(index, 1);
            return newData;
        });
    };

    return { handleSave, addEducationEntry, updateEducationEntry, deleteEducationEntry, educationData };
};

export default EducationService;
