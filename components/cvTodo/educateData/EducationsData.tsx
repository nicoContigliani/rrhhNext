import Inputs from '@/components/inputs/Inputs';
import React, { useEffect, useState } from 'react'
import Moment from 'moment'; // Importa Moment.js

import styles from './educationData.module.css'

const EducationsData = (props: any) => {
    const [edit, setEdit] = useState(false)
    useEffect(() => {
        if (props.title === "Update") setEdit(true)
    }, [props])

    const [data, setData] = useState<any|any[]|undefined>([])
    const [itemsData, setItemsData] = useState<any | any[]>();
    // const [edit, setEdit] = useState<boolean>(true);
    const [titleDataPerson, setTitleDataPerson] = useState<any | any[]>();
    const [dataFilterTodo, setDataFilterTodo] = useState<any | any[]>();


    useEffect(() => {
        const fetchData = async () => {
            const { Items } = props.perDescData;
            const reversedItems = [...Items].reverse();

            // Filtrar los elementos que no tienen título "titlecv"
            const filteredItems = Items?.filter((element: any) => element?.itemTitle?.toLowerCase() !== "education");

            // Invertir el orden de los elementos filtrados
            const reversedFilteredItems = filteredItems.reverse();

            // Filtrar los elementos que tienen título "titlecv"
            const cvItems = Items?.filter((element: any) => element?.itemTitle?.toLowerCase() === "education");

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
        const filterItemsByData = () => {
            if (!data) return; // Salir si data es nulo o indefinido

            // Crear un objeto para almacenar los valores de data correspondientes a cada ID
            const dataByTitleAttributeId: { [key: string]: any } = {};

            // Iterar sobre los valores de data y agruparlos por title_atribute
            Object.keys(data).forEach((key) => {
                const titleAttributeId = key.split('_')[1]; // Obtener el ID de title_atribute
                if (!dataByTitleAttributeId[titleAttributeId]) {
                    dataByTitleAttributeId[titleAttributeId] = {};
                }
                dataByTitleAttributeId[titleAttributeId][key] = data[key];
            });

            const filteredItems = props.perDescData.Items.map((item: any) => {
                // Verificar si el title_atribute coincide con alguna clave en dataByTitleAttributeId
                if (item.itemSection.title_atribute === "education") {
                    const titleAttributeId = item.itemSection.id; // Obtener el ID de title_atribute
                    const dataForId = dataByTitleAttributeId[titleAttributeId];
                    if (dataForId) {
                        // Si coincide, clonar el objeto y actualizar el atributo atribute con el valor correspondiente de data
                        return {
                            ...item,
                            itemSection: {
                                ...item.itemSection,
                                atribute: dataForId[item.itemSection.title_atribute + '_' + titleAttributeId]
                            }
                        };
                    }
                }
                return item;
            });

            console.log("Filtered Items:", filteredItems);
            // Realiza cualquier operación adicional con los elementos filtrados si es necesario
        };

        filterItemsByData();
    }, [data, props.perDescData.Items]);


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
                                            <Inputs
                                                // className={style.login_input}
                                                data={data}
                                                setData={setData}
                                                placeholder={item.itemSection.atribute}
                                                name={item.itemSection.atribute}
                                                type={''}
                                                minLength={''} autoFocus={false} color={''} defaultValue={item.itemSection.atribute} disabled={false} fullWidth={false} id={''} inputComponent={undefined} multiline={false} label={''} rows={''}
                                            />
                                            <strong>Carear:   </strong>
                                            <Inputs
                                                // className={style.login_input}
                                                data={data}
                                                setData={setData}
                                                placeholder={item.itemSection.title_atribute}
                                                name={item.itemSection.title_atribute}
                                                type={''}
                                                minLength={''} autoFocus={false} color={''} defaultValue={item.itemSection.title_atribute} disabled={false} fullWidth={false} id={''} inputComponent={undefined} multiline={false} label={''} rows={''}
                                            />
                                            <strong>Start:  </strong>
                                            <Inputs
                                                // className={style.login_input}
                                                data={data}
                                                setData={setData}
                                                placeholder={Moment(item.itemSection.startDate).format('DD/MM/YYYY')} // Formatear la fecha directamente en el placeholder

                                                name={item.itemSection.startDate}
                                                type={''}
                                                minLength={''} autoFocus={false} color={''} defaultValue={Moment(item.itemSection.startDate).format('DD/MM/YYYY')} disabled={false} fullWidth={false} id={''} inputComponent={undefined} multiline={false} label={''} rows={''}
                                            />
                                            <strong>End:  </strong>
                                            <Inputs
                                                // className={style.login_input}
                                                data={data}
                                                setData={setData}
                                                placeholder={Moment(item.itemSection.endDate).format('DD/MM/YYYY')} // Formatear la fecha directamente en el placeholder
                                                name={item.itemSection.endDate}
                                                type={''}
                                                minLength={''} autoFocus={false} color={''} defaultValue={Moment(item.itemSection.endDate).format('DD/MM/YYYY')} disabled={false} fullWidth={false} id={''} inputComponent={undefined} multiline={false} label={''} rows={''}
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
