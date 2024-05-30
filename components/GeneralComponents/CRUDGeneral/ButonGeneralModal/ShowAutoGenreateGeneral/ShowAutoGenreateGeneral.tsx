

import React, { useEffect, useState } from 'react';
import styles from './ShowAutoGenerate.module.css';
import { Descriptions } from 'antd';

interface Todo {
    InterviewId?: number; // Optional property
    VacancyId?: number;   // Optional property
    id: number;
    // Other properties of the todo object
}

const ShowAutoGenreateGeneral = (props: any) => {
    const [dataShow, setDataShow] = useState<any | any[] | undefined>(props);
    const [dataShowFilter, setDataShowFilter] = useState<any | any[] | undefined>(undefined);

    useEffect(() => {
        const { todo } = props;
        setDataShow(props);

        let newObject = { ...todo };

        delete newObject.InterviewId;
        delete newObject.VacancyId;
        delete newObject.id;

        const dataArray = [];
        for (const [key, value] of Object.entries(newObject)) {
            const tod = {
                label: key,      // Directly use key as the label
                children: value, // Directly use value as children
            };
            dataArray.push(tod);
        }

        setDataShowFilter(dataArray);
    }, [props]);

    return (
        <div className={styles.body}>
            {dataShowFilter && (
                <Descriptions title="Show"
                    layout="vertical"
                    items={dataShowFilter}
                    size={'small'}
                    bordered
                    column={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 4 }}
                    />
            )}
        </div>
    );
};

export default ShowAutoGenreateGeneral;