import React, { useEffect, useState } from 'react';
import style from './persondescription.module.css'
import { Input } from '@mui/material';
import Inputs from '@/components/inputs/Inputs';
const PersonDescription = (props: any) => {


    const { titleSection, perDescData, data, setData } = props;
    // const [edit, setEdit] = useState<boolean>(false);
    const [dataSectionDescriptionPerson, setDataSectionDescriptionPerson] = useState<any | any[]>([]);
    const [edit, setEdit] = useState(false)
    useEffect(() => {
        if (props.title === "Update") setEdit(true)
    }, [props])
    useEffect(() => {
        const fetchData = async () => {
            if (perDescData && perDescData.Items && perDescData.Items.length > 0) {
                setDataSectionDescriptionPerson(perDescData.Items);
            }
        };
        fetchData();
    }, [perDescData]);

    let todo = { ...perDescData.Items[0].itemSection }

    let {
        ItemId,
        SectionId,
        atribute,
        createdAt,
        detail_atribute,
        endDate,
        information,
        position,
        startDate,
        status_item_section,
        title_atribute,
        updatedAt
    } = todo
    todo.atribute = data.titleSection

    return (
        <div>
            {edit ? (
                <div>
                    <div className={style.titles}>
                        <h2>{titleSection}</h2>
                    </div>
                    {dataSectionDescriptionPerson.map((entry: any, index: any) => (
                        <h4 key={index} className={style.inputsData}>
                            <Inputs
                                className={style.input}
                                data={data}
                                setData={setData}
                                placeholder="titleSection"
                                name="titleSection"
                                type={''}
                                minLength={''} autoFocus={false} color={''} defaultValue={entry.itemSection.atribute} disabled={false} fullWidth={false} id={''} inputComponent={undefined} multiline={false} label={''} rows={''} />

                        </h4>
                    ))}
                </div>
            ) : (
                <div className={style.inputsData}>
                    <h2>{titleSection}</h2>
                    {dataSectionDescriptionPerson.map((entry: any, index: any) => (
                        <div key={index}>
                            <h4>{entry.itemSection.atribute}</h4>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default PersonDescription;