import React, { useEffect, useState } from 'react';
import style from './persondescription.module.css'
import { Input } from '@mui/material';
import Inputs from '@/components/inputs/Inputs';
const PersonDescription = (props: any) => {


    const { titleSection, perDescData, data, setData } = props;
    // const [edit, setEdit] = useState<boolean>(false);
    const [dataSectionDescriptionPerson, setDataSectionDescriptionPerson] = useState<any | any[]>([]);
    const [edit, setEdit] = useState(false)
    const [dataId, setDataId] = useState<any | any[]>(1);



    const [itemsData, setItemsData] = useState<any | any[]>();
    // const [edit, setEdit] = useState<boolean>(true);
    const [titleDataPerson, setTitleDataPerson] = useState<any | any[]>();
    const [dataFilterTodo, setDataFilterTodo] = useState<any | any[] | undefined>();
    const [dataUpdate, setDataUpdate] = useState<any | any[]>();



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




    useEffect(() => {
        const { Items } = props.perDescData;
        const reversedItems = [...Items].reverse();
        setItemsData(reversedItems);
    }, [data, props.perDescData.Items]);


    useEffect(() => {

        const dataLastKey: any = Object.keys(data).pop();
        const dataLastValue = data[dataLastKey];

        const dataReturnwithArraybyKey: any | any[] | undefined = itemsData?.filter((item: any) => {

            return item.itemTitle === dataLastKey;
        });

        if (dataReturnwithArraybyKey?.length > 0) {

            if (dataReturnwithArraybyKey.length !== 0) {

                const todo = dataReturnwithArraybyKey[0];
                const attributeValue = dataLastValue;

                const newTodo = {
                    ...todo,
                    itemSection: {
                        ...todo.itemSection,
                        atribute: attributeValue,
                    },
                };

                const idDataReturn = newTodo.id

                if (Array.isArray(itemsData)) {
                    let dataR = (dataUpdate ?? itemsData)?.filter((item: any) => item.id !== idDataReturn);
                    const dataS = [...dataR, newTodo]

                    setDataUpdate(dataS)
                } else {
                    console.error(" no es un array, no se puede realizar el filtro.");
                }
            }



        } else {
            // No se encontró ningún elemento con el título especificado
            // console.log("No se encontró ningún elemento con el título", Object.keys(data)[0]);
        }


    }, [data, props.perDescData.Items])


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
                                placeholder={entry.itemTitle}
                                name={entry.itemTitle}
                                type={''}
                                minLength={''} autoFocus={false} color={''} defaultValue={entry.itemSection.atribute} disabled={false} fullWidth={false} id={''} inputComponent={undefined} multiline={false} label={''} rows={''} />

                        </h4>
                    ))}
                </div>
            ) : (
                <div>
                    <div className={style.titles}>
                        <h2>{titleSection}</h2>
                    </div>
                    <div className={style.inputsDataShow}>
                        {dataSectionDescriptionPerson.map((entry: any, index: any) => (
                            <div key={index}>
                                <hr />
                                <h4>{entry.itemSection.atribute}</h4>
                                <hr />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default PersonDescription;