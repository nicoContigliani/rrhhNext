import { preloadInterViewData, preloadRoadMapsData, preloadUserData, preloadVacancyData, selectRoadMap } from '@/redux/features/RoadMaps/roadmapsSlice'
import { rootsAsync, selectRoots } from '@/redux/features/roots/rootsSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

const dispatch = useAppDispatch();


//Tree
export const moduleConfigData: any | undefined = {
    'RoadMaps': {
        actionsDispatch: function (// actions: any[] | any | undefined
        ) {
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


    }
}

import { v4 as uuidv4 } from 'uuid';


export const moduleConfig = {
    roadMaps: {
        vacancyId: {
            type: 'selectMaterial',
            forProps: {
                isMultiple: false,
                actions: ['roadMapsDataId']
                // keys:,

            }
        }




        //     vacancyId: {
        //         type: 'select',
        //         optionsSelector: selectRoadMapVacancyOptions,
        //         label: 'Vacancy ID'
        //     },
        //     all_steps: {
        //         type: 'select',
        //         optionsSelector: selectInterviewSteps,
        //         label: 'All Steps'
        //     },
        //     responsibles: {
        //         type: 'select',
        //         optionsSelector: selectInterviewResponsibles,
        //         label: 'Responsibles'
        //     },
        //     default: {
        //         type: 'input'
        //     }
    }
    //,
    // anotherModule: {
    //     someField: {
    //         type: 'input',
    //         label: 'Some Field'
    //     },
    //     anotherField: {
    //         type: 'select',
    //         optionsSelector: selectAnotherFieldOptions,
    //         label: 'Another Field'
    //     },
    //     default: {
    //         type: 'input'
    //     }
    // }
};

// cargar roadMaps 
// búscar Id entre los items 
// carga  data de ese id ejemplo vacancyId:selectVacancy  (esto viene de redux)
// lo que viene de redux debe ser formateado para select() - ver si interesa que tenga popas con mas información de la opción
// mapear inputs salvo que items sea un id ... en ese caso hace un select 

//tree 
//RoadMap 
//->branch
//------->RoadMap/Vacancy
//->branch
//------->User/UserInterviews/UserResponsible











export default moduleConfig;