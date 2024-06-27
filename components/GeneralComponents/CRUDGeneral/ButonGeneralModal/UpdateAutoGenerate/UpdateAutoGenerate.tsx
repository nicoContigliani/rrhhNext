import Inputs from '@/components/inputs/Inputs';
import { roadMapsDataId } from '@/redux/features/RoadMaps/roadmapsSlice';
import { rootsAsync, selectRoots } from '@/redux/features/roots/rootsSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { col_structureFormaterWithReducer } from '@/services/col_structureFormaterWithReducer.services';
import { rulesType, rulesWordStartStatus } from '@/services/formaterInputs.services';
import { rulesWords } from '@/services/rulesInputs.sevices';



import { preloadInterViewData, preloadRoadMapsData, preloadUserData, preloadVacancyData, selectRoadMap } from '@/redux/features/RoadMaps/roadmapsSlice'





import React, { useEffect, useState, useMemo } from 'react';


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
            return sourcesArray?.filter((item) => typeof item.column_name === 'string' && item.column_name.endsWith(suffix));
        },
        filterBySuffixOrFallback: function (sourcesArray: any[], suffix: any) {
            if (sourcesArray.length === 0 || suffix === '') {
                console.warn('Falta sourcesArray o suffix. Se retornará un array vacío.');
                return [];
            }
            return sourcesArray?.filter((item) => typeof item.column_name === 'string' && !item.column_name.endsWith(suffix) && !item.column_name.endsWith("Id"));
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
        }
    }

};


const UpdateAutoGenerate = (props: any) => {
    const { nameModelStart } = props
    const dispatch = useAppDispatch();

    const roadMap = useAppSelector(selectRoadMap);
    const { col_structure } = useAppSelector(selectRoots);

    const {
        createDataStart,
        dataRoadMapIdData,
        dataRoadMapIdDataKeys,







    } = roadMap;



    const { modulesName } = props;
    useEffect(() => {
        dispatch(roadMapsDataId(1));
    }, [dispatch]);


    const memoizedResult = useMemo(() => {
        return col_structureFormaterWithReducer(col_structure, dataRoadMapIdData, nameModelStart);
    }, [col_structure, dataRoadMapIdData]);

    useEffect(() => {
        let modelName: any; // Puedes dejarlo como any por ahora, pero luego intenta definir un tipo más específico si es posible

        const objectTree: any | undefined = configTree[nameModelStart]
        const resultado = objectTree.filterBySuffixIfExists(memoizedResult, 'Id');


        const resultados = objectTree.filterBySuffixOrFallback(memoizedResult, 'Id');
        console.log("🚀 ~ useEffect ~ resultados:", resultados)


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
        <div>
            select value <br />
            inputs de roadMap <br />

        </div>
    );
}

export default UpdateAutoGenerate;


