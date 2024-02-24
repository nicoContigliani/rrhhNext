import Inputs from '@/components/inputs/Inputs';
import React, { useEffect, useState } from 'react'
import Moment from 'moment'; // Importa Moment.js

import styles from './educationData.module.css'
import InputsId from '@/components/inputsID/Inputs';

const EducationsData = (props: any) => {
    const [edit, setEdit] = useState(false)
    useEffect(() => {
        if (props.title === "Update") setEdit(true)
    }, [props])

    const [data, setData] = useState<any | any[] | undefined>([])
    const [itemsData, setItemsData] = useState<any | any[] | undefined>([]);
    // const [edit, setEdit] = useState<boolean>(true);

    const [titleDataPerson, setTitleDataPerson] = useState<any | any[]>();
    const [dataFilterTodo, setDataFilterTodo] = useState<any | any[] | undefined>();
    const [dataUpdate, setDataUpdate] = useState<any | any[]>();
    const [dataId, setDataId] = useState<any | any[]>(1);
    const [dataObjectKeys, setDataObjectKeys] = useState<any | any[] | undefined>([]);
    const [dataObjectTodoKeys, setDataObjectTodoKeys] = useState<any | any[] | undefined>([]);


    useEffect(() => {
        const fetchData = async () => {
            const { Items } = props.perDescData;
            const reversedItems = [...Items].reverse();

            // Filtrar los elementos que no tienen título "titlecv"
            const filteredItems = Items?.filter((element: any) => element?.itemTitle?.toLowerCase() === "education");

            // Invertir el orden de los elementos filtrados
            const reversedFilteredItems = filteredItems.reverse();

            // Filtrar los elementos que tienen título "titlecv"
            const cvItems = Items?.filter((element: any) => element?.itemTitle?.toLowerCase() === "education");

            // Extraer los atributos de los elementos con título "titlecv"


            // Actualizar los estados
            setItemsData(reversedItems);
            setDataFilterTodo(reversedFilteredItems);
        };

        fetchData();
    }, [props.perInfData]);

    // useEffect(() => {

    //     itemsData?.forEach((element: any) => {

    //         if (data && data[element?.id] && data.hasOwnProperty(element?.id)) {
    //             let { itemSection } = element
    //             let itemSectionSprite = { ...itemSection }

    //             itemSectionSprite.atribute = data[element?.id].atribute
    //             itemSectionSprite.title_atribute = data[element?.id]?.title_atribute
    //             itemSectionSprite.startDate = data[element?.id]?.startDate
    //             itemSectionSprite.endDate = data[element?.id]?.endDate

    //             console.log("🚀 ~ itemsData?.forEach ~ itemSectionSprite:", itemSectionSprite)
    //         }

    //     });

    // }, [data, itemsData]);
    useEffect(() => {
        // ... other dependencies

        if (!data || !itemsData) {
            return; // Handle missing data or items
        }

        const updatedItemSectionSprites = itemsData.map((element: any) => {
            const elementData = data[element?.id];

            // Handle cases where elementData is missing or properties are missing
            if (!elementData) {
                return element.itemSection; // Return original itemSection
            }

            const itemSectionSprite = {
                ...element.itemSection,
                atribute: elementData.atribute || null, // Set default value if missing
                title_atribute: elementData.title_atribute || null,
                startDate: elementData.startDate || null,
                endDate: elementData.endDate || null,
            };

            return itemSectionSprite;
        });
        console.log("🚀 ~ updatedItemSectionSprites ~ updatedItemSectionSprites:", updatedItemSectionSprites)

        // Update state or use updatedItemSectionSprites as needed
    }, [data, itemsData]);


    return (
        <div className={styles.body}>
            <h2>Education</h2>
            {edit ? (
                <div>
                    <table>
                        <tbody>
                            {itemsData?.map((item: any, index: number) => (
                                <tr key={index}>
                                    {/* <td><strong>{item?.itemTitle}</strong></td> */}
                                    <td>
                                        <h4 key={index}
                                        //  className={style.inputsData}
                                        >
                                            <strong>Where  </strong>
                                            <InputsId
                                                // className={style.login_input}
                                                data={data}
                                                setData={setData}
                                                placeholder={item.itemSection.atribute}
                                                // name={item.itemSection.atribute}
                                                name="atribute"
                                                type={''}
                                                onClick={() => setDataObjectKeys({ id: item.id, "atribute": item.itemSection.atribute })}

                                                minLength={''} autoFocus={false} color={''} defaultValue={item.itemSection.atribute} disabled={false} fullWidth={false} id={item.id} inputComponent={undefined} multiline={false} label={''} rows={''}
                                            />
                                            <strong>Carear:   </strong>
                                            <InputsId
                                                // className={style.login_input}
                                                data={data}
                                                setData={setData}
                                                placeholder={item.itemSection.title_atribute}
                                                // name={item.itemSection.title_atribute}
                                                name="title_atribute"
                                                type={''}
                                                onClick={() => setDataObjectKeys({ id: item.id, "title_atribute": item.itemSection.title_atribute })}


                                                minLength={''} autoFocus={false} color={''} defaultValue={item.itemSection.title_atribute} disabled={false} fullWidth={false} id={item.id} inputComponent={undefined} multiline={false} label={''} rows={''}
                                            />
                                            <strong>Start:  </strong>
                                            <InputsId
                                                // className={style.login_input}
                                                data={data}
                                                setData={setData}
                                                placeholder={Moment(item.itemSection.startDate).format('DD/MM/YYYY')} // Formatear la fecha directamente en el placeholder

                                                // name={item.itemSection.startDate}
                                                name="startDate"
                                                type={''}
                                                onClick={() => setDataObjectKeys({ id: item.id, "startDate": item.itemSection.startDate })}


                                                minLength={''} autoFocus={false} color={''} defaultValue={Moment(item.itemSection.startDate).format('DD/MM/YYYY')} disabled={false} fullWidth={false} id={item.id} inputComponent={undefined} multiline={false} label={''} rows={''}
                                            />
                                            <strong>End:  </strong>
                                            <InputsId
                                                // className={style.login_input}
                                                data={data}
                                                setData={setData}
                                                placeholder={Moment(item.itemSection.endDate).format('DD/MM/YYYY')} // Formatear la fecha directamente en el placeholder
                                                // name={item.itemSection.endDate}
                                                name="endDate"
                                                type={''}
                                                onClick={() => setDataObjectKeys({ id: item.id, "endDate": item.itemSection.endDate })}

                                                minLength={''} autoFocus={false} color={''} defaultValue={Moment(item.itemSection.endDate).format('DD/MM/YYYY')} disabled={false} fullWidth={false} id={item.id} inputComponent={undefined} multiline={false} label={''} rows={''}
                                            />

                                        </h4>
                                        {/* {item.itemSection.atribute} */}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>


                </div>
            ) : (
                <div>
                    {/* {dataFilterTodo?.length > 0 && "vamos que llega"} */}
                    {dataFilterTodo ?? "vamos que undefined"}

                    <table>
                        <tbody>
                            {itemsData?.map((item: any, index: number) => (
                                <tr key={index}>
                                    {/* <td><strong>{item?.itemTitle}:</strong></td> */}
                                    <td><strong>Institute: </strong><span> {item.itemSection?.atribute}</span></td>
                                    <td><strong>Carear: </strong><span>{item.itemSection?.title_atribute}</span></td>
                                    <td><strong>Start Carear: </strong><span>{Moment(item.itemSection?.startDate).format('DD/MM/YYYY')}</span> </td>
                                    <td><strong>End Carear: </strong><span>{Moment(item.itemSection?.endDate).format('DD/MM/YYYY')}  </span> </td>


                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            )}
        </div>
    )
}

export default EducationsData
