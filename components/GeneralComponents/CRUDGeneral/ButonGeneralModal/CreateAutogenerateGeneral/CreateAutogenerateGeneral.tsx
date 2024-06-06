'use client'

import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';


import React, { Children, useCallback, useEffect, useLayoutEffect, useMemo, useState } from 'react'
import { createCrud, fetchCrud, updateCrud } from '@/redux/features/CRUD/crudSlice';
import { useDispatch } from 'react-redux';


const Inputs = dynamic(() => import('@/components/inputs/Inputs'), { ssr: false })
const ModalSelectGeneralCrud = dynamic(() => import('@/components/GeneralComponents/ModalSelectGeneral Crud/ModalSelectGeneralCrud'), { ssr: false })
const Selectcrud = dynamic(() => import('../../SelectCrud/Selectcrud'), { ssr: false })




import styles from './createAutoGenerate.module.css'
import { FilterHeadTableRules } from '@/services/FilterHeadTableRules.services';
import { rulesType, rulesWordStartStatus } from '@/services/formaterInputs.services';

import { selectRoots } from '@/redux/features/roots/rootsSlice';
import { useAppSelector } from '@/redux/hooks';
import dynamic from 'next/dynamic';
import SelectGeneralMaterial from '@/components/GeneralComponents/SelectGeneralMaterial/SelectGeneralMaterial';
import { promiseValueLabelCreateAutoGenerate } from '@/services/promiseVAlueLabelCreateAutoGenerate.services';



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
    const [filteredTodostoCreatePlusArrays, SetFilteredTodostoCreatePlusArrays] = useState<any[]>()

    const [elementSelectSeconds, setElementSelectSeconds] = useState<any[]>()
    const [filteredTodostoCreatePlusArraysSecond, SetFilteredTodostoCreatePlusArraysSeconds] = useState<any[]>()

    const [rules, setRules] = useState<any | undefined>(rules_create)

    const [messageS, setMessageS] = useState<any | any[] | undefined>()

    const roots = useAppSelector(selectRoots);

    const [selectedValues, setSelectedValues] = useState<any | any[] | undefined>();




    const { col_structure } = roots

    const tableStructure = useMemo(() => col_structure.find(
        (obj: any) => obj.table_fullname === nameModelStarts
    ), [col_structure, nameModelStarts]);


    const filteredColumns = useMemo(() => {
        const table = col_structure.find((obj: any) => obj.table_fullname === nameModelStarts);
        return table?.table_columns.filter((item: any) => (
            !["id", "updatedAt", "createdAt", "InterviewId", "VacancyId"].includes(item.column_name)
        ));
    }, [col_structure, nameModelStarts]);

    useEffect(() => {
        setColsAlternative(filteredColumns);
    }, [filteredColumns]);


    useEffect(() => {
        const { createDatas: { col, colIdPath } } = props;

        setGeneralElement(props);
        setColIdPaths(colIdPath);

        const filteredTodos = FilterHeadTableRules(col, colIdPath);
        const datafilterCol = filteredTodos?.filter((item: any) => item.dataIndex !== "id");
        setCols(datafilterCol);
    }, [props]);



    // TODO, This is first colIPath

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { createDatas: { colIdPath } } = props;

                const { dataSources, filteredTodos } = await promiseValueLabelCreateAutoGenerate(colIdPath)

                SetFilteredTodostoCreatePlusArrays(filteredTodos.length > 0 ? filteredTodos : []);
                setElementSelect(dataSources);
            } catch (error) {
                console.error("Error in fetchData:", error);
            }
        };

        fetchData();
    }, [props])


    //TODO, This is second colIPath

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { createDatasSeconds: { colIdPath } } = props;

                const { dataSources, filteredTodos } = await promiseValueLabelCreateAutoGenerate(colIdPath)

                SetFilteredTodostoCreatePlusArraysSeconds(filteredTodos.length > 0 ? filteredTodos : []);
                setElementSelectSeconds(dataSources);
            } catch (error) {
                console.error("Error in fetchData:", error);
            }
        };

        fetchData();
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
        const todoCRUDGet: FetchCrudData = {
            urlGeneral: props?.pathStarts || '/RoadMap/RoadMap/',
            methods: 'POST',
            body: mocks,
        };

        try {
            const { payload: { status } } = await dispatch(createCrud(todoCRUDGet));
            const message = {
                keys: status,
                content: status === 200 ? "Success, insert complete!" : "Error, insert incomplete!",
                loadings: false,
                resultProcess: status === 200 ? "success" : "error",
            };
            setMessageS(message);

            if (status !== null) {
                setTimeout(() => window.location.reload(), 1100);
            }
        } catch (error) {
            console.error('Error dispatching fetchCrud:', error);
        }
    };


    const rulefunction = (dataItem: any) => {
 
        if (!dataItem) return false;
        
        const { titleModal } = dataItem[0];
        const formattedTitle = titleModal.replace(/\s+/g, '_');
        return rules[formattedTitle] || false;
    }


    useEffect(() => {
        const todo = [selectedValues]
        console.log("🚀 ~ useEffect ~ todo:", todo)
        console.log("🚀 ~ CreateAutogenerateGeneral ~ selectedValues:", selectedValues)

    }, [selectedValues])

    const today = moment();

    const formattedDate = today.format('YYYY-MM-DD HH:mm:ss');
    console.log("************", formattedDate, "******nicohora*********")

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

                                    setSelectedValues={setSelectedValues}

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
                                        keys={index + 1}
                                        setSelectedValues={setSelectedValues}



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
