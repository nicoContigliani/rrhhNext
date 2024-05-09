"use client"
import React, { useEffect, useState } from 'react'
import useFetchCrudData from '@/hooks/useFetchCrudData';
import { createCrud, fetchCrud, updateCrud } from '@/redux/features/CRUD/crudSlice';
import { forEach } from 'lodash';
import { useDispatch } from 'react-redux';
import Inputs from '@/components/inputs/Inputs';
import { dataFormaterToSelect } from '@/services/dataFormaterToSelect.services';
import Typeselectcrud from '@/components/GeneralComponents/TypeSelectCRUD/Typeselectcrud';
import Selectcrud from '../../SelectCrud/Selectcrud';
import styles from './createAutoGenerate.module.css'



export interface FetchCrudData {
    urlGeneral: string | any;
    methods: string;
    body?: any | any[]; // Tipo específico para el cuerpo de la solicitud
    idParams?: string;
}
//recibe -> col + [{id1:DataId,path1:"/route/"},{id2:DataId,path2:"/route/"}]
// lee col y si hay ColId buscar ruta 
// que debe crear
// alguna de estas pose Element(Id) - si no esta se crea? 
// debe crear cuantos elementos? 
const CreateAutogenerateGeneral = (props: any) => {
    const dispatch = useDispatch();

    const [generalElement, setGeneralElement] = useState<any | any[] | undefined>()
    const [cols, setCols] = useState<any | any[] | undefined>()
    const [colsSelect, setColsSelect] = useState<any | any[] | undefined>()
    const [colIdPaths, setColIdPaths] = useState<any | any[] | undefined>()
    const [data, setData] = useState<any | any[] | undefined>()


    const [sources, setSources] = useState<any | any[]>()
    const [keysSelect, setKeysSelect] = useState<any | any[] | undefined>()
    const [keyDataOrigin, SetKeyDataOrigin] = useState<any | any[] | undefined>()

    const [objectKeys, setObjectKeys] = useState<any | any[]>()
    const [todoSelect, setTodoSelect] = useState<any | any[] | undefined>()


    //datakey= ['id', 'name_vacancy_ty{pe']  esto son las key que debo buscar en cada objeto general 
    //sources -> datas -> fetchData
    //objectKeys -> const dataKeyGeneral = Object.keys(datas[0])

    {/* <Typeselectcrud
        placeholder="Select"
        datas={datas}
        sources={sources}
        todo=""
        MAX_COUNT={1}
        datakey={datakey}
        objectKeys={objectKeys}
        nameReturn="TypeVacancyId"
      />  */}



    useEffect(() => {
        const fetchData = async () => {
            try {

                const { createDatas: { col, colIdPath } } = await props;

                await setGeneralElement(props);
                await setColIdPaths(colIdPath);

                // Combine colIdPath filtering and col filtering into a single step:
                const filteredTodos = col
                    .filter((item: any) => item.key !== "action") // Exclude "action" key
                    .filter((item: any) => !colIdPath?.some((excluded: any) => excluded.ids.includes(item.dataIndex))); // Exclude data based on colIdPath
                await setCols(filteredTodos);
            } catch (error) {

            }

        };

        fetchData();
    }, [props]);


    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {

    //             const {
    //                 createDatas: { col, colIdPath },
    //                 datasGet

    //             } = await props;

    //             if (colIdPath.length !== 0) {
    //                 SetKeyDataOrigin(colIdPath)
    //                 const todoMap = await Promise.all(colIdPath.map(async (item: any) => {
    //                     try {
    //                         const formattedData = await dataFormaterToSelect(item.datakey, item.datas);
    //                         return formattedData;
    //                     } catch (error) {
    //                         console.error("Error formatting data:", error);
    //                         return null;
    //                     }
    //                 }));
    //                 setSources(todoMap)
    //             }
    //             //       const dataKeyGeneral = Object.keys(datas[0])
    //             try {
    //                 const todoDataKey = props.dataGet
    //                 const dataReturn = todoDataKey.map((item: any) => {
    //                     return Object.keys(item)
    //                 })
    //                 setKeysSelect(dataReturn)



    //             } catch (error) {

    //             }


    //         } catch (error) {

    //         }

    //     };

    //     fetchData();
    // }, [props]);

    useEffect(() => {
        const todoData: any[] = []
        const todo = async () => {
            //objectKeys -> const dataKeyGeneral = Object.keys(datas[0])
            const {
                createDatas: { col, colIdPath },
                dataGet
            } = await props;
            for (let index = 0; index < colIdPath.length; index++) {
                const element = await colIdPath[index];
                const { ids, paths, datas, datakey } = await element
                console.log("🚀 ~ todo ~ datas:", datas)

                const sources: any | any[] | undefined = dataFormaterToSelect(datakey, datas)
                // setSources(dataResult)


                const objectKeys = Object.keys(datas[0])
                // if (dataKeyGeneral !== undefined) setObjectKeys(dataKeyGeneral)
                const dataSources = datas.map((item: any) => {
                    const value = (datakey[0] !== undefined && item !== undefined) ? item[datakey[0]] : '';
                    const label = (datakey[1] !== undefined && item !== undefined) ? item[datakey[1]] : '';
                    return { value, label }
                })


                const elementSelectt = {
                    datas,
                    datakey,
                    sources,
                    objectKeys,
                    nameReturn: ids
                }


                todoData.push(dataSources)
            }

            setTodoSelect(todoData)



            // if (!colIdPath !== undefined) {
            //     const dataReturn = await colIdPath?.map((item: any) => {

            //         //datakey= ['id', 'name_vacancy_ty{pe']  esto son las key que debo buscar en cada objeto general 
            //         //sources -> datas -> fetchData
            //         //objectKeys -> const dataKeyGeneral = Object.keys(datas[0])
            //         const dataKeyGeneral = Object.keys(item.datas[0])

            //         return {
            //             ids: item.ids,
            //             paths: item.paths,
            //             datas: item.datas,
            //             datakey: item.datakey,
            //             objectKeys: dataKeyGeneral
            //         }

            //     })

            // }
            // setTodoSelect(todoData)
        }
        todo()
    }, [props])





    return (
        <div className={styles.body}>
            <div className={styles.selects}>

                {
                    todoSelect?.map((item: any) =>
                        <Selectcrud
                            todoSelect={item}
                        />
                    )
                }

            </div>
            <div className={styles.bodyElements}>

                {cols?.map((item: any) => (
                    <div key={item.key || item.dataIndex}> {/* Use a unique key */}
                        {/* Access and display item properties here */}
                        {/* {item.key} - {item.title}-{item.dataIndex} */}

                        <Inputs
                            // className={styles.login_input}
                            data={data}
                            setData={setData}
                            placeholder={item.title}
                            name={item.title}
                            type={'text'}
                            minLength={''} autoFocus={false} color={''} defaultValue={undefined} disabled={false} fullWidth={false} id={''} inputComponent={undefined} multiline={false} label={''} rows={''} />





                    </div>
                ))}
            </div>
        </div>
    )
}

export default CreateAutogenerateGeneral
