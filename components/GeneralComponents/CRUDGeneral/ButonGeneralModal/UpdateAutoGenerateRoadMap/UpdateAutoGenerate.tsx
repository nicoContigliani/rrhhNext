import React, { useEffect, useState, useMemo, useLayoutEffect } from 'react';
import dynamic from 'next/dynamic'
// import Inputs from '@/components/inputs/Inputs';
// import SelectGeneralMaterial from '@/components/GeneralComponents/SelectGeneralMaterial2/SelectGeneralMaterial';
import { preloadInterViewAssistantIdData, preloadUserInterviewAll, preloadUserResponsibleAll, roadMapsDataId, vacancyDataId } from '@/redux/features/RoadMaps/roadmapsSlice';
import { rootsAsync, selectRoots } from '@/redux/features/roots/rootsSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { col_structureFormaterWithReducer } from '@/services/col_structureFormaterWithReducer.services';
import { preloadInterViewData, preloadRoadMapsData, preloadUserData, preloadVacancyData, selectRoadMap } from '@/redux/features/RoadMaps/roadmapsSlice'
import { formaterNotArray } from '@/services/formaterNotArray.services';

import styles from './UpdateGenerate.module.css'
import { split } from 'lodash';
const Inputs = dynamic(() => import('@/components/inputs/Inputs'), { ssr: false })
const SelectGeneralMaterial = dynamic(() => import('@/components/GeneralComponents/SelectGeneralMaterial2/SelectGeneralMaterial'), { ssr: false })


const UpdateAutoGenerate = (props: any) => {

    const {
        nameModelStart,
        ids,
        // data,
        // setData

    } = props

    const dispatch = useAppDispatch();

    const roadMap = useAppSelector(selectRoadMap);
    const { col_structure } = useAppSelector(selectRoots);

    const [dataNotFilter, setDataNotFilter] = useState<any[] | any | undefined>([]);
    const [dataFilter, setDataFilter] = useState<any[] | any | undefined>([]);
    const [selectedValues, setSelectedValues] = useState<any[] | any | undefined>([]);
    const [vacanciesUse, setVacanciesUse] = useState<any[] | any | undefined>([]);
    const [vacanciesUseId, setVacanciesUseId] = useState<any[] | any | undefined>([]);
    const [vacanciesIdToChange, setVacanciesIdToChange] = useState<any[] | any | undefined>([]);
    const [idsProps, setidsProps] = useState<any[] | any | undefined>([]);

    const [data, setData] = useState<any[] | any | undefined>([]);


    const [interviewsData, setInterviewsData] = useState<any[] | any | undefined>([]);
    const [userData, setUserData] = useState<any[] | any | undefined>([]);
    const [intervieewerAndResponsable, setIntervieewerAndResponsable] = useState<any[] | any | undefined>([]);






    //TODO esto genera un error 
    useLayoutEffect(() => {
        const actions = [
            // preloadRoadMapsData,
            preloadInterViewData,
            preloadVacancyData,
            preloadUserData
        ];
        actions.forEach((action: any | undefined) => {
            dispatch(action());
        });
        dispatch(preloadUserResponsibleAll())
        dispatch(preloadUserInterviewAll())
        setidsProps(ids)
        dispatch(preloadInterViewAssistantIdData(ids))
    }, [])


    useLayoutEffect(() => {
        dispatch(roadMapsDataId(ids));
    }, [dispatch]);



    const {
        createDataStart,
        dataRoadMapIdData,
        dataRoadMapIdDataKeys,


        vacanciesData,
        getInterViews,
        getUsers,

        dataUserInterviewData,
        dataUserResponsibleData,

        //vacancy
        dataVacanciesIdData, //Id
        dataVacanciesId, //<- trae  el id 

        interviewsDataNotArray,
        interviewResponsibleAll,
        iterviewUsersAll,

        intervieewerAndResponsableIdAll,
        users

    } = roadMap;

    //TODO info del  select con vacancyId/////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////
    // console.log("🚀 ~ UpdateAutoGenerate ~ iterviewUsersAll:", iterviewUsersAll)
    // console.log("🚀 ~ UpdateAutoGenerate ~ interviewResponsibleAll:", interviewResponsibleAll)

    // console.log("🚀 ~ UpdateAutoGenerate ~ vacanciesIdToChange:", vacanciesIdToChange, "<----***id vacanciesId |||| roadMapId --->", ids)

    // //sin VacancyId
    // const dataS= dataRetun?.filter((item:any) => typeof item.column_name === 'string' && !item.column_name.endsWith("Id") && !item.column_name.endsWith("Id"));
    // console.log("🚀 ~ functionAsync ~ dataS:", dataS)
    ////////////////////////////////////////////////////////////////

    //warning -> Alwais layoutEffect because When Module start this Need data
    useLayoutEffect(() => {
        const functionAsync = async () => {
            const dataRetun = await col_structureFormaterWithReducer(col_structure, dataRoadMapIdData, nameModelStart);

            if (dataRetun) {
                const foundItem = dataRetun?.find((item: any) => typeof item.column_name === 'string' && item.column_name.endsWith('Id'));
                if (foundItem) {
                    const { keyValue, column_name } = foundItem;
                    if (keyValue) {
                        await dispatch(vacancyDataId(keyValue));
                    }
                }
            }

            if (dataRetun) {
                const filterData = await dataRetun?.filter((item: any) => typeof item.column_name === 'string' && !item.column_name.endsWith('Id'));
                if (filterData) {
                    setDataFilter(filterData)
                    setData({ ...dataRoadMapIdData[0] })
                }
            }
        }

        functionAsync();
    }, [col_structure, dataRoadMapIdData, nameModelStart, dispatch]);


    useLayoutEffect(() => {
        const functionAsync = async () => {
            // const dataRetun = await col_structureFormaterWithReducer(col_structure, dataVacanciesIdData, "Vacancies")
            const dataRetun = await col_structureFormaterWithReducer(col_structure, dataVacanciesId, "Vacancies")

            if (vacanciesData) {
                try {
                    try {
                        const dataReturn = await formaterNotArray(vacanciesData);

                        const dataReturnAfterMap = await dataReturn?.map((item) => `${item?.id}-${item.title}`);

                        if (vacanciesData) await setVacanciesUse(dataReturnAfterMap);
                    } catch (error) {
                        console.error("Error:", error);
                    }

                    try {
                        const dataReturn = await formaterNotArray(dataVacanciesId)

                        const dataReturnAfterMap = await dataReturn?.map((item) => `${item?.id}-${item.title}`);

                        if (dataVacanciesId) await setVacanciesUseId(dataReturnAfterMap)

                    } catch (error) {

                    }
                } catch (error) {
                    console.log("🚀 ~ functionAsync ~ error:", error)
                }
            }
            // if (dataVacanciesId) await setVacanciesUseId(dataVacanciesId)
        }
        functionAsync()
    }, [col_structure, dataVacanciesIdData])


    useEffect(() => {
        const functionAsync = async () => {
            // let dataReturn: any | any[] | undefined = await formaterNotArray(dataVacanciesId)
            // console.log("🚀 ~ functionAsync ~ dataReturn:", dataReturn)
            const dataReturnAfterMap = await selectedValues?.map((item: any) => parseInt((item.split('-'))[0]));
            setVacanciesIdToChange(dataReturnAfterMap)
        }
        functionAsync()
    }, [selectedValues])



    useEffect(() => {



        const asyncFuntion = async () => {

            //TODO
            if (intervieewerAndResponsableIdAll !== undefined) {
                const { data } = await intervieewerAndResponsableIdAll;
                if (data && data.length > 0) {
                    const inter = data[0]?.Interviews;
                    console.log("🚀 ~ asyncFuntion ~ inter:", inter);
                    if (inter) setIntervieewerAndResponsable(inter);
                } else {
                    console.log("Data is undefined or empty.");
                }
            }

            const datainterviewsDataNotArrayMap = await interviewsDataNotArray?.map((item: any) => `${item?.id}-${item?.summary.replace(/,/g, '')}`);
            const datausersNotArrayMap = await users?.map((item: any) => `${item?.id}-${item?.fullname.replace(/,/g, '')}`);

            //there are Interviews
            if (datainterviewsDataNotArrayMap) setInterviewsData(datainterviewsDataNotArrayMap)
            //there are Users
            if (datausersNotArrayMap) setUserData(datausersNotArrayMap)

        }
        asyncFuntion()
    }, [data?.all_Steps])

    // map   




    return (
        <div className={styles.body}>
            <div className={styles.selects}>

                <SelectGeneralMaterial
                    todoSelect={vacanciesUse}
                    defaultValueSelect={vacanciesUseId}

                    size="medium"
                    isfullWidth={false}
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    isMultiple={false}

                    setSelectedValues={setSelectedValues}
                />


            </div>


            <div className={styles.bodyElements}>

                {dataFilter.length > 0 &&
                    dataFilter.map((item: any) => (
                        <div key={item.key}>
                            <Inputs
                                defaultValue={item.keyValue}
                                data={data}
                                setData={setData}
                                placeholder={item.column_name}
                                name={item.column_name}
                                type={item.input_type || 'text'}
                                minLength={''}
                                autoFocus={false}
                                color={''}
                                disabled={false}
                                fullWidth={false}
                                id={''}
                                inputComponent={undefined}
                                multiline={false}
                                label={''}
                                rows={''}
                            />
                        </div>

                    ))}
            </div>

            <div>


                {/* {data?.all_Steps && Array.from({ length: Number(data.all_Steps) })?.map((_, index) => (
                    <div className={styles.selectsSecond}>
                        <div key={index} className={styles.step}>
                            <h4>Step {index + 1}</h4>
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

                    </div>
                ))} */}

                {/* {data?.all_Steps && Array.from({ length: Number(data.all_Steps) })?.map((_, index) => (
                    <div>
                        <h4>Step {index + 1}</h4>

                    </div>
                ))} */}

<hr />
                <div className={styles.selectGroup}>

                    {
                        intervieewerAndResponsable && intervieewerAndResponsable.map((item: any) => (

                            <div className={styles.step}>
                                <div className={styles.selectsSecond}>
                                    {/* // interview [] */}
                                    <SelectGeneralMaterial
                                        defaultValueSelect={[`${item.interview}`]}

                                        todoSelect={interviewsData}
                                        isMultiple={false}
                                        setSelectedValues={setSelectedValues}
                                    />
                                </div>

                                <div className={styles.selectsSecond}>
                                    {/* // InterviewUsers */}
                                    <SelectGeneralMaterial
                                        defaultValueSelect={item.InterviewUsers}

                                        todoSelect={userData}
                                        isMultiple={true}
                                        setSelectedValues={setSelectedValues}
                                    />
                                </div>
                                <div className={styles.selectsSecond}>
                                    {/* // InterviewResponsibles */}
                                    <SelectGeneralMaterial
                                        defaultValueSelect={item.InterviewResponsibles}
                                        todoSelect={userData}
                                        isMultiple={true}
                                        setSelectedValues={setSelectedValues}
                                    />
                                </div>

                            </div>
                        ))
                    }

                </div>


            </div>










        </div>
    );
}

export default UpdateAutoGenerate;


