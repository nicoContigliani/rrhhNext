import Inputs from '@/components/inputs/Inputs';
import React, { useEffect, useState } from 'react';
import style from './persondescription.module.css'

const PersonDescriptionData = (props: any) => {
    const { } = props
    const [edit, setEdit] = useState(false)
    useEffect(() => {
        if (props.title === "Update") setEdit(true)
    }, [props])


    const [data, setData] = useState<any | any[] | undefined>([])
    const [itemsData, setItemsData] = useState<any | any[]>();
    // const [edit, setEdit] = useState<boolean>(true);
    const [titleDataPerson, setTitleDataPerson] = useState<any | any[]>();
    const [dataFilterTodo, setDataFilterTodo] = useState<any | any[] | undefined>();
    const [dataUpdate, setDataUpdate] = useState<any | any[]>();
    const [dataId, setDataId] = useState<any | any[]>(1);
    console.log("🚀 ~ PersonDescriptionData ~ dataUpdate:", dataUpdate)

    useEffect(() => {
        const fetchData = async () => {
            const { Items } = props.perInfData;
            const reversedItems = [...Items].reverse();

            // Filtrar los elementos que no tienen título "titlecv"
            const filteredItems = Items?.filter((element: any) => element?.itemTitle?.toLowerCase() !== "titlecv");

            // Invertir el orden de los elementos filtrados
            const reversedFilteredItems = filteredItems.reverse();

            // Filtrar los elementos que tienen título "titlecv"
            const cvItems = Items?.filter((element: any) => element?.itemTitle?.toLowerCase() === "titlecv");

            // Extraer los atributos de los elementos con título "titlecv"
            const cvAttributes = cvItems?.map((item: any) => item.itemSection.atribute);

            // Combinar los atributos en una cadena
            let cvAttributesString = cvAttributes?.join(",");
            if (cvAttributesString && cvAttributesString.endsWith(",")) {
                cvAttributesString = cvAttributesString.slice(0, -1);
            }

            // Actualizar los estados
            setItemsData(reversedItems);
            setDataFilterTodo(reversedFilteredItems);
            setTitleDataPerson(cvAttributesString);
        };

        fetchData();
    }, [props.perInfData]);


    useEffect(() => {
        const filterItemsByData = async () => {
            if (!data) return;

            // let dataByTitleAttributeId: { [key: string]: any } = {};


            const dataLastKey: any = Object.keys(data).pop();
            const dataLastValue = data[dataLastKey];

            const dataReturnwithArraybyKey: any | any[] | undefined = itemsData?.filter((item: any) => {
                return item.itemTitle === dataLastKey;
            });

            if (dataReturnwithArraybyKey?.length > 0) {


                if (dataReturnwithArraybyKey.length > 1) {

                    const dataFilterA: any | any[] | undefined = itemsData?.filter((item: any) => {
                        return item.itemTitle === dataLastKey && item.id === dataId;
                    });

                    const todo = dataFilterA[0];
                    const attributeValue = dataLastValue;

                    const newTodo = {
                        ...todo,
                        itemSection: {
                            ...todo.itemSection,
                            atribute: attributeValue,
                        },
                    };
                    const idDataReturn = newTodo.id
                    console.log("🚀 ~ filterItemsByData ~ idDataReturn:", idDataReturn)

                    if (Array.isArray(itemsData)) {
                        let dataR = itemsData?.filter((item: any) => item.id !== idDataReturn);
                        const dataS = [...dataR, newTodo]
                        setDataUpdate(dataS)
                    } else {
                        console.error(" no es un array, no se puede realizar el filtro.");
                    }
                }

                if (dataReturnwithArraybyKey.length == 1) {

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
                    console.log("🚀 ~ filterItemsByData ~ idDataReturn:", idDataReturn)

                    if (Array.isArray(itemsData)) {
                        let dataR = itemsData?.filter((item: any) => item.id !== idDataReturn);
                        const dataS = [...dataR, newTodo]
                        setDataUpdate(dataS)
                    } else {
                        console.error(" no es un array, no se puede realizar el filtro.");
                    }
                }



            } else {
                // No se encontró ningún elemento con el título especificado
                console.log("No se encontró ningún elemento con el título", Object.keys(data)[0]);
            }


            // Object.keys(data).forEach((key) => {
            //     const titleAttributeId = key.split('_')[1];
            //     if (titleAttributeId) {
            //         if (!dataByTitleAttributeId[titleAttributeId]) {
            //             dataByTitleAttributeId[titleAttributeId] = {};
            //         }
            //         dataByTitleAttributeId[titleAttributeId][key] = data[key];
            //     }
            // });

            // let updatedItems = props.perInfData.Items.map((item: any) => {
            //     if (item.itemSection.title_atribute === "cvTitle") {
            //         let titleAttributeId = item.itemSection.id;
            //         let dataForId = dataByTitleAttributeId[titleAttributeId];
            //         if (dataForId) {
            //             return {
            //                 ...item,
            //                 itemSection: {
            //                     ...item.itemSection,
            //                     atribute: dataForId[item.itemSection.title_atribute + '_' + titleAttributeId]
            //                 }
            //             };
            //         }
            //     }
            //     return item;
            // });

            // setDataFilterTodo(updatedItems);
        };

        filterItemsByData();
    }, [data, props.perInfData.Items]);

    return (
        <div className={style.body}>
            <h2>Data General</h2>

            {
                edit ? (
                    <div>


                    </div>
                ) : <h4>({titleDataPerson})</h4>
            }

            {edit ? (
                <div className={style.inputsData}>
                    <table>
                        <tbody>
                            {itemsData?.map((item: any, index: number) => (
                                <tr key={index}>
                                    <td ><strong>{item.itemTitle}</strong></td>
                                    <td>
                                        <h4 key={index}
                                        //  className={style.inputsData}
                                        >
                                            <Inputs
                                                className={style.input}
                                                data={data}
                                                setData={setData}
                                                placeholder={item.itemTitle}
                                                name={item.itemTitle}
                                                type={''}
                                                onClick={() => setDataId(item.id)}

                                                minLength={''} autoFocus={false} color={''} defaultValue={item.itemSection.atribute} disabled={false} fullWidth={false} id={''} inputComponent={undefined} multiline={false} label={''} rows={''} />

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
                    <table>
                        <tbody>
                            {dataFilterTodo?.map((item: any, index: number) => (
                                <tr key={index}>
                                    <td><strong>{item.itemTitle}</strong></td>
                                    <td>{item.itemSection.atribute}</td>

                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            )}
        </div>
    );
}

export default PersonDescriptionData;