import { selectRoadMap } from '@/redux/features/RoadMaps/roadmapsSlice';
import { selectRoots } from '@/redux/features/roots/rootsSlice';
const moduleConfig = {
    // roadMaps: {
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
    // },
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