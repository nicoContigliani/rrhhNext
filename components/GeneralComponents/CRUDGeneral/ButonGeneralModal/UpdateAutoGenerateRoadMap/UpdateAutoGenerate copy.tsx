import Inputs from '@/components/inputs/Inputs';
import { roadMapsDataId } from '@/redux/features/RoadMaps/roadmapsSlice';
import { rootsAsync, selectRoots } from '@/redux/features/roots/rootsSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { col_structureFormaterWithReducer } from '@/services/col_structureFormaterWithReducer.services';
import { rulesType, rulesWordStartStatus } from '@/services/formaterInputs.services';
import { rulesWords } from '@/services/rulesInputs.sevices';
import styles from './UpdateGenerate.module.css'



import { preloadInterViewData, preloadRoadMapsData, preloadUserData, preloadVacancyData, selectRoadMap } from '@/redux/features/RoadMaps/roadmapsSlice'





import React, { useEffect, useState, useMemo, useLayoutEffect } from 'react';
import SelectGeneralMaterial from '@/components/GeneralComponents/SelectGeneralMaterial/SelectGeneralMaterial';


const configTree: any = {
    'RoadMaps': {
        actionsDispatch: function (// actions: any[] | any | undefined
        ) {
            const dispatch = useAppDispatch();
            const actions = [
                rootsAsync,
                preloadRoadMapsData,
                preloadRoadMapsData,
                preloadInterViewData,
                preloadVacancyData,
                preloadUserData
            ];
            actions.forEach((action: any | undefined) => {
                dispatch(action());
            });

        },
        filterBySuffixIfExists: function (sourcesArray: any[], suffix: any) {
            if (sourcesArray.length === 0 || suffix === '') {
                console.warn('Falta sourcesArray o suffix. Se retornará un array vacío.');
                return [];
            }
            return sourcesArray?.find((item) => typeof item.column_name === 'string' && item.column_name.endsWith(suffix));
        },
        filterBySuffixOrFallback: function (sourcesArray: any[], suffix: any) {
            if (sourcesArray.length === 0 || suffix === '') {
                console.warn('Falta sourcesArray o suffix. Se retornará un array vacío.');
                return [];
            }
            return sourcesArray?.filter((item) => typeof item.column_name === 'string' && !item.column_name.endsWith(suffix) && !item.column_name.endsWith("Id"));
        },
        col_structureFormaterWithReducer: function (col_structures: any[], dataRoadMapIdDatas: any[] | any, nameModelStarts: string) {
            return col_structureFormaterWithReducer(col_structures, dataRoadMapIdDatas, nameModelStarts)
        },

    },

    'Vacancies': {
        filterBySuffixIfExists: function (sourcesArray: any[], suffix: any) {
            if (sourcesArray.length === 0 || suffix === '') {
                console.log("entro en vacancies ****************")
                console.warn('Falta sourcesArray o suffix. Se retornará un array vacío.');
                return [];
            }
            return sourcesArray?.filter((item) => typeof item.column_name === 'string' && item.column_name.endsWith(suffix));
        },
        filterBySuffixOrFallback: function (sourcesArray: any[], suffix: any) {
            if (sourcesArray.length === 0 || suffix === '') {
                console.warn('Falta sourcesArray o suffix. Se retornará un array vacío.');
                return [];
            }
            return sourcesArray?.filter((item) => typeof item.column_name === 'string' && !item.column_name.endsWith(suffix) && !item.column_name.endsWith("Id"));
        },
        col_structureFormaterWithReducer: function (col_structures: any[], dataRoadMapIdDatas: any[] | any, nameModelStarts: string) {
            return col_structureFormaterWithReducer(col_structures, dataRoadMapIdDatas, nameModelStarts)
        },
    }

};


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






    const {
        createDataStart,
        dataRoadMapIdData,
        dataRoadMapIdDataKeys,


        vacanciesData,
        getInterViews,
        getUsers,

        dataUserInterviewData,
        dataUserResponsibleData





    } = roadMap;
    console.log("🚀 ~ UpdateAutoGenerate ~ dataUserInterviewData, dataUserResponsibleData:", dataUserInterviewData, dataUserResponsibleData)



    const { modulesName } = props;
    useLayoutEffect(() => {
        dispatch(roadMapsDataId(ids));
    }, [dispatch]);


    const memoizedResult = useMemo(() => {
        return col_structureFormaterWithReducer(col_structure, dataRoadMapIdData, nameModelStart);
    }, [col_structure, dataRoadMapIdData]);

    useLayoutEffect(() => {
        const funtionsAsync = async () => {

            let modelName: any; // Puedes dejarlo como any por ahora, pero luego intenta definir un tipo más específico si es posible

            const objectTree: any | undefined = configTree[nameModelStart]

            // console.log("🚀 ~ useEffect ~ resultado:", resultado)
            // if (column_name) setDataFilter(column_name)
            const resultados = await await configTree.RoadMaps.filterBySuffixOrFallback(memoizedResult, 'Id');
            console.log("🚀 ~ useEffect ~ resultados:", resultados)

            if (resultados) setDataNotFilter(resultados)
            const { column_name, keyValue } = await configTree.RoadMaps.filterBySuffixIfExists(memoizedResult, 'Id');




        }
        funtionsAsync()
    }, [memoizedResult])

    useLayoutEffect(() => {


    }, [memoizedResult])




    useEffect(() => {
        // console.log("🚀 ~ //dataReturn ~ result:", memoizedResult);
        // setResult(memoizedResult);
    }, [memoizedResult]);

    // useEffect(() => {
    //     if (result !== null) {
    //         console.log("🚀 ~ //dataReturn ~ result:", result);
    //         // Perform any other side effects with the result here
    //     }
    // }, [result]);









    


    return (
        <div className={styles.body}>


            <div>
                {/* <SelectGeneralMaterial
                    todoSelect={todoSelect}
                    data={data}
                    setData={setData}
                    isMultiple={isMultiple}
                    keys={keys}
                    setSelectedValues={setSelectedValues}
                /> */}

            </div>
            <div className={styles.selects}>
                {
                    //TODO //tiene que mapear sobre La tabla Vacancie y esta haciendolo sobre roadmap(filtrando map y usando ese filtro )
                    //TODO //tiene que mapear sobre La tabla Vacancie y esta haciendolo sobre roadmap(filtrando map y usando ese filtro )
                    //TODO //tiene que mapear sobre La tabla Vacancie y esta haciendolo sobre roadmap(filtrando map y usando ese filtro )

                    // dataFilter && dataFilter?.map((item: any) =>
                    //     <div key={item?.key || item?.dataIndex}>
                    //         <SelectGeneralMaterial
                    //             todoSelect={item}

                    //             size="small"
                    //             fullWidth
                    //             labelId="demo-multiple-chip-label"
                    //             id="demo-multiple-chip"
                    //             isMultiple={true}

                    //             setSelectedValues={setSelectedValues}

                    //         />
                    //     </div>
                    // )
                    //TODO //tiene que mapear sobre La tabla Vacancie y esta haciendolo sobre roadmap(filtrando map y usando ese filtro )
                    //TODO //tiene que mapear sobre La tabla Vacancie y esta haciendolo sobre roadmap(filtrando map y usando ese filtro )
                    //TODO //tiene que mapear sobre La tabla Vacancie y esta haciendolo sobre roadmap(filtrando map y usando ese filtro )

                }

            </div>








            <div className={styles.bodyElements}>

                {dataNotFilter.length > 0 &&
                    dataNotFilter.map((item: any) => (
                        <div key={item.key}>
                            <h5>{item.key}</h5>
                            <div> {/* Abre un div aquí */}
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
                            </div> {/* Cierra el div correctamente */}
                        </div>
                    ))}
                <br />
            </div>

        </div>
    );
}

export default UpdateAutoGenerate;


