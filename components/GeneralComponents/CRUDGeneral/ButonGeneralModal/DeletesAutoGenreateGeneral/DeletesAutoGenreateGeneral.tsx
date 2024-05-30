// import React, { useEffect, useState } from 'react'
// import styles from './DeleteAutoGenerate.module.css'
// import { Descriptions } from 'antd';



// interface Todo {
//     InterviewId?: number; // Optional property
//     VacancyId?: number;   // Optional property
//     id: number;
//     // Other properties of the todo object
// }

// const DeletesAutoGenreateGeneral = (props: any) => {
//     const [dataShow, setDataShow] = useState<any | any[] | undefined>(props)
//     const [dataShowFilter, setDataShowFilter] = useState<any | any[] | undefined>(undefined);
//     useEffect(() => {
//         const { todo } = props
//         setDataShow(props)

//         let newObject = { ...todo }

//         delete newObject.InterviewId
//         delete newObject.VacancyId
//         delete newObject.id

//         const dataArray = []
//         for (const [key, value] of Object.entries(newObject)) {


//             // console.log(`${key}: ${value}`);

//             const tod = {
//                 key: { key },
//                 label: { value },
//                 children: `${value}`
//             }
//             console.log("🚀 ~ useEffect ~ tod:", tod)
//             dataArray.push(tod)

//         }
//         // setDataShowFilter(newObject)
//         setDataShowFilter(dataArray)
//     }, [props])



//     return (
//         <div className={styles.body}>
//             {/* {dataShowFilter && ( // Conditionally render to avoid empty object display
//                 <ul>
//                     {Object.entries(dataShowFilter).map(([key, value]) => (
//                         <div key={key}>

//                             {key}: {value}
//                         </div>
//                     ))}
//                 </ul>
//             )}       */}
//             <Descriptions title="User Info" layout="vertical" items={dataShowFilter} />
//         </div>
//     )
// }

// export default DeletesAutoGenreateGeneral

import React, { useEffect, useState } from 'react';
import styles from './DeleteAutoGenerate.module.css';
import { Descriptions } from 'antd';

interface Todo {
    InterviewId?: number; // Optional property
    VacancyId?: number;   // Optional property
    id: number;
    // Other properties of the todo object
}

const DeletesAutoGenreateGeneral = (props: any) => {
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
                <Descriptions title="Delete"
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

export default DeletesAutoGenreateGeneral;