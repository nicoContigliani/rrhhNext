"use client"
import React, { useEffect, useMemo, useState } from 'react'
import useFetchCrudData from '@/hooks/useFetchCrudData';
import { createCrud, fetchCrud, updateCrud } from '@/redux/features/CRUD/crudSlice';
import { forEach } from 'lodash';
import { useDispatch } from 'react-redux';
import Inputs from '@/components/inputs/Inputs';

import Selectcrud from '../../SelectCrud/Selectcrud';
import styles from './createAutoGenerate.module.css'
import { FilterHeadTableRules } from '@/services/FilterHeadTableRules.services';
import ModalSelectGeneralCrud from '@/components/GeneralComponents/ModalSelectGeneral Crud/ModalSelectGeneralCrud';
import { rulesType, rulesWordStartStatus } from '@/services/formaterInputs.services';
import { colDiccionary } from '@/services/colDiccionary.services';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';



export interface FetchCrudData {
    urlGeneral: string | any;
    methods: string;
    body?: any | any[]; // Tipo específico para el cuerpo de la solicitud
    idParams?: string;
}

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
    const [filteredTodostoCreatePlusArrays, SetFilteredTodostoCreatePlusArrays] = useState<any | any[] | undefined>()

    useMemo(() => {
        const fetchData = async () => {
            const { createDatas: { col, colIdPath } } = await props;
            try {
                await setGeneralElement(props);
                await setColIdPaths(colIdPath);

                ////This services is data sources. It's gives data a modal with auto generate inputs 
                const filteredTodos = FilterHeadTableRules(col, colIdPath)
                const datafilterCol = filteredTodos?.filter((item: any) => item.dataIndex !== "id")
                await setCols(datafilterCol);
            } catch (error) {

            }
        };

        fetchData();
    }, [props]);

    useEffect(() => {
        const todo = async () => {
            try {
                const { createDatas, dataGet } = props;
                const { col, colIdPath } = createDatas;

                const promises = colIdPath.map(async (element: any) => {
                    const { ids, paths, datas, datasKey, datakey, titleModal } = element;

                    const dataSources = datas.map((item: any) => {
                        const value = (datakey[0] !== undefined && item !== undefined) ? item[datakey[0]] : '';
                        const label = (datakey[1] !== undefined && item !== undefined) ? item[datakey[1]] : '';
                        return { value, label, ids, titleModal };
                    });
                    return dataSources;
                });
                //This promisse is data sources. It's gives data a select 
                const todoData = await Promise.all(promises);
                //This map is data sources. It's gives data a  modal Create 
                const filteredTodostoCreatePlusA = colIdPath.map((element: any) => {


                    return [element.datasKey, element.titleModal, element.paths]
                });

                SetFilteredTodostoCreatePlusArrays(filteredTodostoCreatePlusA.length > 0 && filteredTodostoCreatePlusA);
                setTodoSelect(todoData);
            } catch (error) {
                console.error("Error in todo:", error);
            }
        };

        todo();
    }, [props]);

    useEffect(() => {
        const getchDataCol = async () => {
            const dataSearch: any[] = ["col_structure"]

            const dataReturn = await colDiccionary(["col_structure"])
            console.log("🚀 ~ getchDataCol ~ dataReturn:", await dataReturn)
        }
        getchDataCol()
    }, [props])

    const allShows = (dataTitle: any) => {
        if (dataTitle.includes("order")) console.log("******poseeId*******", dataTitle, "***************")



        return true
    }

    const Send = () => {

    }
    return (
        <div className={styles.body}>

            <div className={styles.selectsGeneral} >
                <div className={styles.selects}>
                    {
                        todoSelect && todoSelect?.map((item: any) =>
                            <div key={item?.key || item?.dataIndex}>


                                <Selectcrud
                                    data={data}
                                    setData={setData}
                                    todoSelect={item}
                                />
                            </div>
                        )
                    }

                </div>

                {/* boton con el modalexpandible */}
                <div className={styles.buttons}>
                    {
                        filteredTodostoCreatePlusArrays && filteredTodostoCreatePlusArrays?.map((item: any) =>
                            <div
                                key={item?.key || item?.dataIndex}
                                className={styles.button}
                            >


                                <ModalSelectGeneralCrud
                                    objectKeys={item[0]}
                                    IType={""}
                                    modalTitles={item[1]}
                                    pathCrud={item[2]}

                                />
                            </div>
                        )
                    }

                </div>
            </div>
            <div className={styles.bodyElements}>

                {cols && cols?.map((item: any) => (
                    <div key={item?.key || item?.dataIndex}>

                        {
                            (item.title !== "key" && item.title !== "id" && item.title !== "createdAt" && item.title !== "updatedAt") &&
                            < Inputs
                                className={styles.input}
                                data={data}
                                setData={setData}
                                placeholder={item.title}
                                name={item.title}
                                type={
                                    rulesWordStartStatus(item.title) ||
                                    rulesType(item.title)
                                }

                                minLength={''} autoFocus={false} color={''} defaultValue={undefined} disabled={false} fullWidth={false} id={''} inputComponent={undefined} multiline={false} label={''} rows={''} />

                        }
                        {allShows(item.title)}

                    </div>
                ))}
            </div>
            <br /><hr />
            <div
                className={styles.buttonSend}
            // style={{ width: '100%', textAlign: 'center',alignContent:'center',alignItems:'center' }}
            >
                <Button
                    className={styles.buttons}
                    // style={{ width: '100%' }}
                    onClick={Send}
                    block
                    type='primary'

                >

                    <PlusOutlined />

                </Button>
            </div>
        </div>
    )
}

export default CreateAutogenerateGeneral
