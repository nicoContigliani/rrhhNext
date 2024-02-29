import Inputs from '@/components/inputs/Inputs';
import React, { useEffect, useState } from 'react'
import Moment from 'moment'; // Importa Moment.js

import styles from './HardSkillData.module.css'
import InputsId from '@/components/inputsID/Inputs';

const HardSkillData = (props: any) => {
    const {
        gridFormatView,
        setGridFormatView,
        setUpdateToSend

    } = props
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
        // setUpdateToSend(dataUpdate)
        dataUpdate && setUpdateToSend(dataUpdate);

    }, [dataUpdate])

    //TODO updateToSend -> es el que envia 





    useEffect(() => {
        const fetchData = async () => {
            const { Items } = props.perDescData;
            const reversedItems = [...Items].reverse();

            // Filtrar los elementos que no tienen título "titlecv"
            const filteredItems: any = Items?.filter((element: any) => element?.itemTitle?.toLowerCase() === "education");

            // Invertir el orden de los elementos filtrados
            const reversedFilteredItems = filteredItems.reverse();



            // Actualizar los estados
            setItemsData(reversedItems);
            setDataFilterTodo(reversedFilteredItems);
        };

        fetchData();
    }, [props.perInfData]);


    useEffect(() => {
        // ... other dependencies

        if (!data || !itemsData) {
            return; // Handle missing data or items
        }

        const updatedItemSectionSprites = itemsData.map((element: any) => {
            const elementData = data[element?.id];

            if (!elementData) {
                return element.itemSection; // Return original itemSection
            }

            const itemSectionSprite = {
                ...element.itemSection,
                atribute: elementData.atribute || element.itemSection.atribute, // Use original value if missing in elementData
                title_atribute: elementData.title_atribute || element.itemSection.title_atribute,
                startDate: elementData.startDate || element.itemSection.startDate,
                endDate: elementData.endDate || element.itemSection.endDate,
            };

            return itemSectionSprite;
        });
        setDataUpdate(updatedItemSectionSprites)
        // Update state or use updatedItemSectionSprites as needed
    }, [data, itemsData]);


    return (
        <div >
            <h2 className={styles.titles}>Hard Skill</h2>
            {edit ? (
                <div className={styles.body}>
                    <table>
                        <tbody>
                            {itemsData?.map((item: any, index: number) => (
                                <tr key={index}>
                                    {/* <td><strong>{item?.itemTitle}</strong></td> */}
                                    <td>
                                        <h4 key={index}
                                        //  className={style.inputsData}
                                        ><br />

                                            <td className={styles.td}>
                                                <strong>Hability :  </strong>
                                                <InputsId
                                                    data={data}
                                                    setData={setData}
                                                    placeholder={item.itemSection.atribute}
                                                    name="atribute"
                                                    type={''}
                                                    onClick={() => setDataObjectKeys({ id: item.id, "atribute": item.itemSection.atribute })}

                                                    minLength={''} autoFocus={false} color={''} defaultValue={item.itemSection.atribute} disabled={false} fullWidth={false} id={item.id} inputComponent={undefined} multiline={false} label={''} rows={''}
                                                />
                                            </td>


                                            <td className={styles.td}>
                                                <strong>Start:   </strong>
                                                <InputsId
                                                    // className={style.login_input}
                                                    data={data}
                                                    setData={setData}
                                                    placeholder={Moment(item.itemSection.startDate).format('DD/MM/YYYY')} // Formatear la fecha directamente en el placeholder

                                                    name="startDate"
                                                    type={''}
                                                    onClick={() => setDataObjectKeys({ id: item.id, "startDate": item.itemSection.startDate })}


                                                    minLength={''} autoFocus={false} color={''} defaultValue={Moment(item.itemSection.startDate).format('DD/MM/YYYY')} disabled={false} fullWidth={false} id={item.id} inputComponent={undefined} multiline={false} label={''} rows={''}
                                                />
                                            </td>

                                            <td className={styles.td}>
                                                <strong>End:   </strong>
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
                                            </td>


                                        </h4>
                                        {/* {item.itemSection.atribute} */}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>


                </div>
            ) : (

                gridFormatView ?

                    <div className={styles.modal}>
                        <div className={styles.modalContent}>

                            <div className={styles.bodyShow}>
                                {itemsData?.map((item: any) => (
                                    <div key={item.id} className={styles.card}>
                                        <hr />
                                        <div className={styles.cardItem}>
                                            <span className={styles.cardLabel}>Hbbility:</span>
                                            <span className={styles.cardValue}>{item.itemSection?.atribute}</span>
                                        </div>


                                        {/* Start & End Carear */}
                                        <div className={styles.cardItem}>
                                            <span className={styles.cardLabel}>Start End :</span>
                                            <span className={styles.cardValue}>
                                                {Moment(item.itemSection?.startDate).format('DD/MM/YYYY')} -{' '}
                                                {Moment(item.itemSection?.endDate).format('DD/MM/YYYY')}
                                            </span>
                                        </div>
                                        <hr />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    :
                    <div className={styles.tableWrapper}>

                        <div className={styles.bodyShowTable}>
                            <table>
                                <thead>
                                    <tr>

                                        {

                                            itemsData.length > 0 && itemsData[0].itemSection &&

                                            (
                                                Object?.keys(itemsData[0]?.itemSection)?.map((header: string, index: number) => (
                                                    (header !== 'detail_atribute' && header !== 'information' && header !== 'position' && header !== 'createAt'
                                                        && header !== 'sectionId'
                                                        && header !== 'position'
                                                        && header !== 'createdAt'

                                                        && header !== 'SectionId'
                                                        && header !== 'status_item_section'
                                                        && header !== 'ItemId'
                                                        && header !== 'title_atribute'


                                                    ) && (
                                                        <th key={index}>{header}</th>
                                                    )
                                                )))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {itemsData?.map((item: any, index: number) => (
                                        <tr key={index}>
                                            {
                                                itemsData.length > 0 && itemsData[0].itemSection &&

                                                (
                                                    Object?.entries(item.itemSection)?.map(([key, value]: [string, any], index: number) => (
                                                        (value !== '' && key !== 'detail_atribute' && key !== 'information' && key !== 'position' && key !== 'createAt'

                                                            && key !== 'information'
                                                            && key !== 'sectionId'
                                                            && key !== 'position'
                                                            && key !== 'createdAt'

                                                            && key !== 'SectionId'
                                                            && key !== 'status_item_section'
                                                            && key !== 'title_atribute'
                                                            && key !== 'ItemId'

                                                        ) && (
                                                            <React.Fragment key={index}>
                                                                <td>
                                                                    {key === 'status' && typeof value === 'boolean' ? (
                                                                        value ? 'true' : 'false'
                                                                    ) : (
                                                                        typeof value === 'string' && Moment(value, Moment.ISO_8601, true).isValid() ? Moment(value).format('DD/MM/YYYY') : typeof value === 'number' ? value : value
                                                                    )}
                                                                </td>
                                                            </React.Fragment>
                                                        )
                                                    )))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

            )}
        </div>
    )
}


export default HardSkillData
