import React, { useEffect, useState, useMemo, useLayoutEffect, useCallback } from 'react';
import dynamic from 'next/dynamic'


import { preloadInterViewAssistantIdData, preloadUserInterviewAll, preloadUserResponsibleAll, roadMapsDataId, vacancyDataId } from '@/redux/features/RoadMaps/roadmapsSlice';
import { selectRoots } from '@/redux/features/roots/rootsSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { col_structureFormaterWithReducer } from '@/services/col_structureFormaterWithReducer.services';
import { preloadInterViewData, preloadRoadMapsData, preloadUserData, preloadVacancyData, selectRoadMap } from '@/redux/features/RoadMaps/roadmapsSlice'
import { formaterNotArray } from '@/services/formaterNotArray.services';

import styles from './UpdateGenerate.module.css'
import { split } from 'lodash';
import Spinner from '@/components/spinner/Spinner';
import { formatDataWithKeys, formaterSelectTitle } from '@/Utils/formaterMapTitleForSelect.utils';
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

    const [dataNotFilter, setDataNotFilter] = useState<any[] | any | undefined>();
    const [dataFilter, setDataFilter] = useState<any[] | any | undefined>([]);
    const [selectedValues, setSelectedValues] = useState<any[] | any | undefined>();

    console.log("🚀 ~ UpdateAutoGenerate ~ selectedValues:", selectedValues)
    const [vacanciesUse, setVacanciesUse] = useState<any[] | any | undefined>([]);
    const [vacanciesUseId, setVacanciesUseId] = useState<any[] | any | undefined>([]);
    const [vacanciesIdToChange, setVacanciesIdToChange] = useState<any[] | any | undefined>([]);
    const [idsProps, setidsProps] = useState<any[] | any | undefined>([]);

    const [data, setData] = useState<any[] | any | undefined>([]);
    console.log("🚀 ~ UpdateAutoGenerate ~ data:", data)


    const [interviewsData, setInterviewsData] = useState<any[] | any | undefined>([]);
    const [userData, setUserData] = useState<any[] | any | undefined>([]);
    const [intervieewerAndResponsable, setIntervieewerAndResponsable] = useState<any[] | any | undefined>([]);

    useEffect(() => {
        // Acciones que deben ejecutarse una vez al montar el componente
        dispatch(preloadInterViewData());
        dispatch(preloadVacancyData());
        dispatch(preloadUserData());
        dispatch(preloadUserResponsibleAll());
        dispatch(preloadUserInterviewAll());
        dispatch(preloadInterViewAssistantIdData(ids));
    }, [dispatch, ids]);

    useEffect(() => {
        // Acciones que deben ejecutarse cuando cambia 'ids' o cualquier otro cambio necesario
        dispatch(roadMapsDataId(ids));
    }, [dispatch, ids]);

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


    const fetchData = useCallback(async () => {
        try {
            const dataofCol_structure = await col_structureFormaterWithReducer(col_structure, dataRoadMapIdData, nameModelStart);

            if (dataofCol_structure) {
                const foundItem = dataofCol_structure.find((item: any) => typeof item.column_name === 'string' && item.column_name.endsWith('Id'));
                if (foundItem) {
                    const { keyValue, column_name } = foundItem;
                    if (keyValue) {
                        await dispatch(vacancyDataId(keyValue));
                    }
                }

                const filterData = dataofCol_structure.filter((item: any) => typeof item.column_name === 'string' && !item.column_name.endsWith('Id'));
                if (filterData) {
                    setDataFilter(filterData);
                    setData({ ...dataRoadMapIdData[0] });
                }
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }, [col_structure, dataRoadMapIdData, nameModelStart, dispatch]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    useLayoutEffect(() => {
        const functionAsync = async () => {
            try {
                if (vacanciesData) {
                    const [formattedVacanciesData, formattedVacanciesIdData] = await Promise.all([
                        formaterNotArray(vacanciesData),
                        formaterNotArray(dataVacanciesId)
                    ]);

                    const dataReturnAfterMapVacancies = formattedVacanciesData?.map((item) => `${item?.id}-${item.title}`);
                    const dataReturnAfterMapVacanciesId = formattedVacanciesIdData?.map((item) => `${item?.id}-${item.title}`);

                    setVacanciesUse(dataReturnAfterMapVacancies);
                    setVacanciesUseId(dataReturnAfterMapVacanciesId);
                }
            } catch (error) {
                console.error("Error:", error);
            }
        };

        functionAsync();
    }, [col_structure, dataVacanciesId, vacanciesData]);



    const memoizedVacanciesUse = useMemo(() => {
        const arrayKeys = ['id', 'tittle']
        return formaterSelectTitle(vacanciesData, arrayKeys)
    }, [vacanciesData]);

    const memoizedVacanciesUseId = useMemo(() => {
        const arrayKeys = ['id', 'tittle']
        return formaterSelectTitle(dataVacanciesId, arrayKeys)
    }, [dataVacanciesId]);


    useEffect(() => {
        setVacanciesUse(memoizedVacanciesUse);
        setVacanciesUseId(memoizedVacanciesUseId);
    }, [memoizedVacanciesUse, memoizedVacanciesUseId]);

    useEffect(() => {
        const functionAsync = async () => {
            if (Array.isArray(selectedValues)) {

                const dataReturnAfterMap = selectedValues.map((item: any) => parseInt((item.split('-'))[0]));
                setVacanciesIdToChange(dataReturnAfterMap);
            }
        }
        functionAsync()
    }, [selectedValues])

    const memoizedInterviewsDataNotArrayMap = useMemo(() => {
        const arrayKeys = ['id', 'summary']

        return formatDataWithKeys(interviewsDataNotArray, arrayKeys)
    }, [interviewsDataNotArray]);

    const memoizedUsersNotArrayMap = useMemo(() => {
        const arrayKeys = ['id', 'fullname']
        return formatDataWithKeys(users, arrayKeys)
    }, [users]);



    useEffect(() => {
        const fetchData = async () => {
            try {
                if (intervieewerAndResponsableIdAll !== undefined) {
                    const { data } = await intervieewerAndResponsableIdAll; // Assuming this is an Axios response
                    if (data && data.length > 0) {
                        const inter = await data[0]?.Interviews;
                        if (inter) {
                            setIntervieewerAndResponsable(inter);
                        } else {
                            console.log("Data is undefined or empty.");
                        }
                    }
                }

                if (memoizedInterviewsDataNotArrayMap.length > 0) {
                    setInterviewsData(memoizedInterviewsDataNotArrayMap);
                }

                if (memoizedUsersNotArrayMap.length > 0) {
                    setUserData(memoizedUsersNotArrayMap);
                }
            } catch (error) {
                console.log("🚀 ~ fetchData ~ error:", error);
            }
        };

        fetchData();
    }, [intervieewerAndResponsableIdAll, memoizedInterviewsDataNotArrayMap, memoizedUsersNotArrayMap]);

    // Memoizing computed values
    const memoizedInterviewsData = useMemo(() => {
        // Compute memoizedInterviewsDataNotArrayMap
        return memoizedInterviewsDataNotArrayMap;
    }, [memoizedInterviewsDataNotArrayMap]);

    const memoizedUsers = useMemo(() => {
        // Compute memoizedUsersNotArrayMap
        return memoizedUsersNotArrayMap;
    }, [memoizedUsersNotArrayMap]);


    // map   
    return (
        <div className={styles.body}>
            <div className={styles.selects}>
                {

                    vacanciesUse &&
                    <SelectGeneralMaterial
                        todoSelect={vacanciesUse}
                        defaultValueSelect={vacanciesUseId}

                        size="medium"
                        isfullWidth={false}
                        labelId="demo-multiple-chip-label"
                        id="demo-multiple-chip"
                        isMultiple={false}
                        label="Vacancies"
                        setSelectedValues={setSelectedValues}
                        selectedValues={selectedValues}
                        name={"vacancies"}
                    />
                }
            </div>
            <div className={styles.bodyElements}>

                {
                    (dataFilter.length === 0 || dataFilter === undefined) ?? <Spinner />

                }
                {(dataFilter.length > 0 && dataFilter !== undefined) &&
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
                                disabled={(item.column_name === 'id') ? true : false}
                                fullWidth={true}
                                id={''}
                                inputComponent={undefined}
                                multiline={false}
                                label={''}
                                rows={''}
                                block
                            />
                        </div>

                    ))}
            </div>


            <div>
                <div className={styles.selectGroup}>
                    {(
                        data?.all_Steps &&
                        intervieewerAndResponsable) &&
                        Array.from({ length: Number(data.all_Steps) }).map((_, index) => (
                            <div className={styles.step} key={index}>
                                <div>
                                    Step {index + 1}
                                    <div className={styles.input}>
                                        <Inputs
                                            className={styles.input}
                                            data={data}
                                            setData={setData}
                                            placeholder={'order'}
                                            name={`${index}-order`}
                                            type={'number'}
                                            defaultValue={intervieewerAndResponsable[index]?.interviewOrder ?
                                                [`${intervieewerAndResponsable[index].interviewOrder}`] : [index + 1]}
                                            selectedValues={selectedValues}
                                        />
                                    </div>

                                    <div className={styles.selectsSecond}>
                                        <SelectGeneralMaterial
                                            defaultValueSelect={intervieewerAndResponsable[index]?.interview || intervieewerAndResponsable[0]?.interview}
                                            todoSelect={interviewsData}
                                            isMultiple={false}
                                            setSelectedValues={setSelectedValues}
                                            name={`${index}-interview`}
                                            selectedValues={selectedValues}
                                        />
                                    </div>


                                    <div className={styles.selectsSecond}>
                                        <SelectGeneralMaterial
                                            defaultValueSelect={intervieewerAndResponsable[index]?.InterviewUsers || intervieewerAndResponsable[0]?.InterviewUsers}
                                            todoSelect={userData}
                                            isMultiple={true}
                                            setSelectedValues={setSelectedValues}
                                            name={`${index}-InterviewUsers`}
                                            selectedValues={selectedValues}
                                        />
                                    </div>

                                    <div className={styles.selectsSecond}>
                                        <SelectGeneralMaterial
                                            defaultValueSelect={intervieewerAndResponsable[index]?.InterviewResponsibles || intervieewerAndResponsable[0]?.InterviewResponsibles}
                                            todoSelect={userData}
                                            isMultiple={true}
                                            setSelectedValues={setSelectedValues}
                                            name={`${index}-InterviewResponsibles`}
                                            selectedValues={selectedValues}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
            {
                (
                    vacanciesUse &&
                    data?.all_Steps &&
                    dataFilter &&
                    intervieewerAndResponsable
                ) ? null :
                    <Spinner />
                    

            }
        </div>
    );
}

export default UpdateAutoGenerate;


