import Inputs from '@/components/inputs/Inputs';
import { roadMapsDataId, vacancyDataId } from '@/redux/features/RoadMaps/roadmapsSlice';
import { rootsAsync, selectRoots } from '@/redux/features/roots/rootsSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { col_structureFormaterWithReducer } from '@/services/col_structureFormaterWithReducer.services';
import { rulesType, rulesWordStartStatus } from '@/services/formaterInputs.services';
import { rulesWords } from '@/services/rulesInputs.sevices';
import styles from './UpdateGenerate.module.css'

import { preloadInterViewData, preloadRoadMapsData, preloadUserData, preloadVacancyData, selectRoadMap } from '@/redux/features/RoadMaps/roadmapsSlice'

import React, { useEffect, useState, useMemo, useLayoutEffect } from 'react';
import SelectGeneralMaterial from '@/components/GeneralComponents/SelectGeneralMaterial2/SelectGeneralMaterial';
import { forEach } from 'lodash';
import { formaterNotArray } from '@/services/formaterNotArray.services';



const UpdateAutoGenerate = (props: any) => {

    const {
        nameModelStart,
        ids,
        data,
        setData

    } = props

    const dispatch = useAppDispatch();

    const roadMap = useAppSelector(selectRoadMap);
    const { col_structure } = useAppSelector(selectRoots);

    const [dataNotFilter, setDataNotFilter] = useState<any[] | any | undefined>([]);
    const [dataFilter, setDataFilter] = useState<any[] | any | undefined>([]);
    const [selectedValues, setSelectedValues] = useState<any[] | any | undefined>([]);
    const [vacanciesUse, setVacanciesUse] = useState<any[] | any | undefined>([]);
    const [vacanciesUseId, setVacanciesUseId] = useState<any[] | any | undefined>([]);


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
        dataVacanciesId //<- trae  el id 



    } = roadMap;



    // //sin VacancyId
    // const dataS= dataRetun?.filter((item:any) => typeof item.column_name === 'string' && !item.column_name.endsWith("Id") && !item.column_name.endsWith("Id"));
    // console.log("🚀 ~ functionAsync ~ dataS:", dataS)



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

            if (dataRoadMapIdDataKeys) {
                const filterData = dataRoadMapIdDataKeys?.filter((item: any) => typeof item.column_name === 'string' && !item.column_name.endsWith('Id'));
                console.log("🚀 ~ functionAsync ~ filterData:", filterData)
                setDataFilter(filterData)
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
                        const dataReturn = formaterNotArray(vacanciesData)
                        if (vacanciesData) setVacanciesUse(dataReturn)

                    } catch (error) {

                    }

                    try {
                        const dataReturn = formaterNotArray(dataVacanciesId)
                        if (dataVacanciesId) await setVacanciesUseId(dataReturn)

                    } catch (error) {

                    }

                    const dataReturnMap = await vacanciesData?.map((item: any) => col_structureFormaterWithReducer(col_structure, [item], "Vacancies"))
                    // const arrayOfObjects = dataReturnMap?.map((subArray: any) => {
                    //     const todo = { ...subArray }
                    //     return todo
                    //     // const obj: any = {};
                    //     // subArray.forEach((item: any) => {
                    //     //     obj[item.column_name] = item.keyValue;
                    //     // });
                    //     // return obj;
                    // });
                    const arrayOfObjects = vacanciesData?.map((subArray: any) => {
                        const todo = { ...subArray }
                        return todo
                        //     // const obj: any = {};
                        //     // subArray.forEach((item: any) => {
                        //     //     obj[item.column_name] = item.keyValue;
                        //     // });
                        //     // return obj;
                    });





                    // if (dataReturnMap) setVacanciesUse(arrayOfObjects)
                } catch (error) {
                    console.log("🚀 ~ functionAsync ~ error:", error)
                }
            }
            // if (dataVacanciesId) await setVacanciesUseId(dataVacanciesId)
        }
        functionAsync()
    }, [col_structure, dataVacanciesIdData])






    return (
        <div className={styles.body}>
            <div className={styles.selects}>

                <SelectGeneralMaterial
                    todoSelect={vacanciesUse}

                    size="medium"
                    isfullWidth={false}
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    isMultiple={true}

                    setSelectedValues={setSelectedValues}
                    defaultValueSelect={vacanciesUseId}
                />


            </div>


            <div className={styles.bodyElements}>

                {dataFilter.length > 0 &&
                    dataFilter.map((item: any) => (
                        <div key={item.key}>
                            {/* <h5>{item.key}</h5> */}
                            <div>
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
                        </div>
                    ))}
                <br />
            </div>



        </div>
    );
}

export default UpdateAutoGenerate;


