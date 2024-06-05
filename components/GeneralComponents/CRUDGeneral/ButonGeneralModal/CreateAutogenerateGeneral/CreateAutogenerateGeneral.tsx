'use client'
import React, { Children, useCallback, useEffect, useLayoutEffect, useMemo, useState } from 'react'
import useFetchCrudData from '@/hooks/useFetchCrudData';
import { createCrud, fetchCrud, updateCrud } from '@/redux/features/CRUD/crudSlice';
import { forEach } from 'lodash';
import { useDispatch } from 'react-redux';
// import Inputs from '@/components/inputs/Inputs';
// import ModalSelectGeneralCrud from '@/components/GeneralComponents/ModalSelectGeneral Crud/ModalSelectGeneralCrud';
// import Selectcrud from '../../SelectCrud/Selectcrud';

const Inputs = dynamic(() => import('@/components/inputs/Inputs'), { ssr: false })
const ModalSelectGeneralCrud = dynamic(() => import('@/components/GeneralComponents/ModalSelectGeneral Crud/ModalSelectGeneralCrud'), { ssr: false })
const Selectcrud = dynamic(() => import('../../SelectCrud/Selectcrud'), { ssr: false })




import styles from './createAutoGenerate.module.css'
import { FilterHeadTableRules } from '@/services/FilterHeadTableRules.services';
import { rulesType, rulesWordStartStatus } from '@/services/formaterInputs.services';
import { colDiccionary } from '@/services/colDiccionary.services';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { selectRoots } from '@/redux/features/roots/rootsSlice';
import { useAppSelector } from '@/redux/hooks';
import dynamic from 'next/dynamic';
import Messages from '@/components/Messages/Messages';
import ListTransferGeneral from '@/components/GeneralComponents/ListTransferGeneral/ListTransferGeneral';
import SelectGeneralMaterial from '@/components/GeneralComponents/SelectGeneralMaterial/SelectGeneralMaterial';
import { OutlinedInput } from '@mui/material';



export interface FetchCrudData {
    urlGeneral: string | any;
    methods: string;
    body?: any | any[]; // Tipo específico para el cuerpo de la solicitud
    idParams?: string;
}

const CreateAutogenerateGeneral = (props: any) => {
    console.log("🚀 ~ CreateAutogenerateGeneral ~ props:", props)
    const dispatch = useDispatch();

    const { pathStarts, nameModelStarts, rules_create } = props


    const [generalElement, setGeneralElement] = useState<any>()
    const [cols, setCols] = useState<any[]>()

    const [colIdPaths, setColIdPaths] = useState<any | any[] | undefined>()
    const [data, setData] = useState<any | any[] | undefined>()
    const [colsAlternative, setColsAlternative] = useState<any[] | undefined>()

    const [elementSelect, setElementSelect] = useState<any[]>()
    console.log("🚀 ~ CreateAutogenerateGeneral ~ elementSelect:", elementSelect)
    const [filteredTodostoCreatePlusArrays, SetFilteredTodostoCreatePlusArrays] = useState<any[]>()

    const [elementSelectSeconds, setElementSelectSeconds] = useState<any[]>()
    const [filteredTodostoCreatePlusArraysSecond, SetFilteredTodostoCreatePlusArraysSeconds] = useState<any[]>()

    const [rules, setRules] = useState<any | undefined>(rules_create)

    const [messageS, setMessageS] = useState<any | any[] | undefined>()

    const roots = useAppSelector(selectRoots);
    const { col_structure } = roots

    const tableStructure = useMemo(() => col_structure.find(
        (obj: any) => obj.table_fullname === nameModelStarts
    ), [col_structure, nameModelStarts]);

    const filteredColumns = useMemo(() => tableStructure?.table_columns.filter((item: any) => (
        item?.column_name !== "id" &&
        item?.column_name !== "updatedAt" &&
        item?.column_name !== "createdAt" &&
        item?.column_name !== "InterviewId" &&
        item?.column_name !== "VacancyId"
    )), [tableStructure]);

    useEffect(() => {
        setColsAlternative(filteredColumns);
    }, [filteredColumns]);


    useEffect(() => {
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


    //TODO, This is first colIPath

    useEffect(() => {
        const funtionAsync = async () => {
            try {
                const { createDatas, dataGet } = props;
                const { col, colIdPath } = createDatas;

                const promises = colIdPath.map(async (element: any | object) => {
                    const { ids, paths, datas, datasKey, datakey, titleModal, isMultiple } = element;

                    const dataSources = datas.map((item: any) => {
                        const value = (datakey[0] !== undefined && item !== undefined) ? item[datakey[0]] : '';
                        const label = (datakey[1] !== undefined && item !== undefined) ? item[datakey[1]] : '';
                        return { value, label, ids, titleModal, isMultiple };
                    });
                    return dataSources;
                });
                //This promisse is data sources. It's gives data a select 
                const dataPromiseAffter = await Promise.all(promises);
                //This map is data sources. It's gives data a  modal Create 
                const filteredTodostoCreatePlusA = colIdPath.map((element: any) => {
                    return [element.datasKey, element.titleModal, element.paths]
                });

                SetFilteredTodostoCreatePlusArrays(filteredTodostoCreatePlusA.length > 0 && filteredTodostoCreatePlusA);
                setElementSelect(dataPromiseAffter);
            } catch (error) {
                console.error("Error in todo:", error);
            }
        };

        funtionAsync();
    }, [props]);



    //TODO, This is second colIPath
    useEffect(() => {
        const funtionAsync = async () => {
            try {
                const { createDatasSeconds, dataGet } = props;
                const { col, colIdPath } = createDatasSeconds;


                const promises = colIdPath.map(async (element: any | object) => {
                    const {
                        ids,
                        paths,
                        datas,
                        datasKey,
                        datakey,
                        titleModal,
                    } = element;

                    //TODO hasta acá viene bien el is Multiple
                    const dataSources = datas.map((item: any) => {
                        const value = (datakey[0] !== undefined && item !== undefined) ? item[datakey[0]] : '';
                        const label = (datakey[1] !== undefined && item !== undefined) ? item[datakey[1]] : '';
                        return { value, label, ids, titleModal };
                    });
                    return dataSources;
                });
                //This promisse is data sources. It's gives data a select 
                const dataPromiseAffter = await Promise.all(promises);
                //This map is data sources. It's gives data a  modal Create 
                const filteredTodostoCreatePlusA = colIdPath.map((element: any) => {
                    return [element.datasKey, element.titleModal, element.paths]
                });

                SetFilteredTodostoCreatePlusArraysSeconds(filteredTodostoCreatePlusA.length > 0 && filteredTodostoCreatePlusA);
                setElementSelectSeconds(dataPromiseAffter);
            } catch (error) {
                console.error("Error in todo:", error);
            }
        };

        funtionAsync();
    }, [props]);






    const mocks = {
        InterviewId: 1,
        VacancyId: "1",
        after_steps: "Completed initial interview",
        all_Steps: "34",
        before_steps: "Scheduled phone screen",
        description: "Follow-up interview for senior developer position",
        duration: 90,
        image: "https://example.com/interview.jpg",
        location: "123 Main St, Office 456",
        nextActionDateTime: "2024-06-01T10:00",
        order_Steps: "2",
        outcome: "Passed technical assessment",
        required: "Yes",
        responsibilityDescription: "Discuss project details and expectations",
        scheduledDateTime: "2024-05-31T16:42",
        start_DateTime: "2024-05-31T16:42",
        finish_DateTime: "2024-07-31T16:42",
        completionDateTime: "2024-07-31T16:42",
        status_roadmap: true,
        undefined: true
    }
    const Send = async () => {
        //hay que hacer un servicio que tenga crud ... 
        //hay que eliminar serch cuando envia

        const todoCRUDGet: FetchCrudData = {
            urlGeneral: props?.pathStarts || '/RoadMap/RoadMap/',
            methods: 'POST',
            body: mocks,
            idParams: '',
        };

        try {
            const response = await dispatch(createCrud(todoCRUDGet));
            const { payload: { status } } = response
            if (status === 200) {
                setMessageS(
                    {
                        keys: 200,
                        content: "Succes, insert complete!",
                        loadings: false,
                        resultProcess: "success"
                    }
                )
            }
            if (status === 500 || status === 400) {
                setMessageS(
                    {
                        keys: 500,
                        content: "Error, insert incomplete!",
                        loadings: false,
                        resultProcess: "error"
                    }
                )
            }
            if (status !== null) {

                setTimeout(() => {
                    window.location.reload();
                }, 1100);
            }
            // return response?.payload?.data; // Suponiendo que el resultado deseado está en response.data
        } catch (error) {

            console.error('Error dispatching fetchCrud:', error);
            return null;
        }

    }


    const rulefunction = (dataItem: any) => {
        let resultReturn = false
        if (dataItem) {

            const functionAsync =  () => {
                const { titleModal } =  dataItem[0]
                let formattedTitle = titleModal.includes(' ') ? titleModal.split(' ').join('_') : titleModal;
                resultReturn = rules[formattedTitle]
            }
            functionAsync()
        }
        return resultReturn
    }

    return (
        <div className={styles.body}>



            <div className={styles.selectsGeneral} >
               //vacancies/si no existe tiene que darte el crear <br />
                <div className={styles.selects}>
                    {
                        elementSelect && elementSelect?.map((item: any) =>
                            <div key={item?.key || item?.dataIndex}>
                                <SelectGeneralMaterial
                                    todoSelect={item}

                                    size="small"
                                    fullWidth
                                    labelId="demo-multiple-chip-label"
                                    id="demo-multiple-chip"

                                    isMultiple={rulefunction(item)}

                                />
                            </div>
                        )
                    }

                </div>

                {/*  there is button with modal expandible */}
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

            <span>
            </span>
            <br />

            <div className={styles.bodyElements}>
                {
                    // colsAlternative ?
                    false ?
                        colsAlternative?.map((item: any) => (
                            <div key={item?.column_name || item?.column_name}>

                                {
                                    (item.title !== "key" && item.column_name !== "id" && item.column_name !== "createdAt" && item.column_name !== "updatedAt") &&
                                    < Inputs
                                        className={styles.input}
                                        data={data}
                                        setData={setData}
                                        placeholder={item.column_name}
                                        name={item.title}

                                        type={
                                            rulesWordStartStatus(item.column_name) ||
                                            rulesType(item.column_name)
                                        }
                                        minLength={''} autoFocus={false} color={''} defaultValue={undefined} disabled={false} fullWidth={false} id={''} inputComponent={undefined} multiline={false} label={''} rows={''} />
                                }
                            </div>
                        ))
                        :


                        cols?.map((item: any) => (
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
                            </div>
                        ))
                }
            </div>
            <br /><hr />
            {data?.all_Steps && Array.from({ length: Number(data.all_Steps) }).map((_, index) => (
                <div className={styles.selectsSecond}>
                    <div key={index} className={styles.step}>
                        <h4>Step {index + 1}</h4>
                        {/* Aquí puedes agregar los inputs específicos para cada paso */}
                        {
                            elementSelectSeconds && elementSelectSeconds?.map((item: any) =>
                                <div key={item?.key || item?.dataIndex}>
                                    <SelectGeneralMaterial
                                        todoSelect={item}
                                        isMultiple={rulefunction(item)}

                                    />

                                </div>
                            )
                        }

                    </div>
                    <div className={styles.buttons}>
                        {
                            filteredTodostoCreatePlusArraysSecond && filteredTodostoCreatePlusArraysSecond?.map(((item: any) =>

                                (item[1] !== 'Interview Users' && item[1] !== 'Interview Responsibles') &&
                                <div
                                    key={item?.key || item?.dataIndex}
                                    className={styles.button}
                                >
                                    {/* buton modal create item */}
                                    <ModalSelectGeneralCrud
                                        objectKeys={item[0]}
                                        IType={""}
                                        modalTitles={item[1]}
                                        pathCrud={item[2]}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            ))}

            <br />


            {/* {props.children} */}

        </div>
    )
}

export default CreateAutogenerateGeneral
