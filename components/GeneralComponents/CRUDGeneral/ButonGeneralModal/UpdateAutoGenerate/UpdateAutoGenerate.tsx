import Inputs from '@/components/inputs/Inputs';
import { roadMapsDataId, selectRoadMap } from '@/redux/features/RoadMaps/roadmapsSlice';
import { selectRoots } from '@/redux/features/roots/rootsSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { col_structureFormaterWithReducer } from '@/services/col_structureFormaterWithReducer.services';
import { rulesType, rulesWordStartStatus } from '@/services/formaterInputs.services';
import { rulesWords } from '@/services/rulesInputs.sevices';

import React, { useEffect, useState, useMemo } from 'react';

const UpdateAutoGenerate = (props: any) => {
    const dispatch = useAppDispatch();

    const roadMap = useAppSelector(selectRoadMap);
    const { col_structure } = useAppSelector(selectRoots);

    const {
        createDataStart,
        dataRoadMapIdData,
        dataRoadMapIdDataKeys,
        nameModelStart
    } = roadMap;



    const { modulesName } = props;
    useEffect(() => {
        dispatch(roadMapsDataId(1));
    }, [dispatch]);


    // Función de mapeo para convertir data_type a tipos de inputs HTML
    const mapDataTypeToInputType = (dataType: string) => {
        switch (dataType) {
            case "integer":
            case "bigint":
                return "number";
            case "boolean":
                return "checkbox";
            case "timestamp with time zone":
            case "timestamp":
                return "datetime-local";
            case "text":
            case "character varying":
            default:
                return "text";
        }
    };



    // useEffect(() => {
    //     const dataReturn =  () => {

    //         // Encuentra la estructura de la tabla RoadMaps
    //         const tableStructure = col_structure.find((obj: any) => obj.table_fullname === "RoadMaps")?.table_columns;

    //         if (!tableStructure) {
    //             console.error("Table structure for 'RoadMaps' not found");
    //             return;
    //         }

    //         // Crea un mapa para una búsqueda rápida de columnas
    //         const columnMap = new Map(tableStructure.map((col: any) => [col.column_name, col]));

    //         // Procesa los datos y genera el array de resultados
    //         const resultArray = dataRoadMapIdData.reduce((acc: any[], roadMapObject: any) => {
    //             Object.entries(roadMapObject).forEach(([key, value]) => {
    //                 const columnInfo: any | undefined = columnMap.get(key);
    //                 if (columnInfo) {
    //                     acc.push({
    //                         column_name: key,
    //                         keyValue: value,
    //                         character_maximum_length: columnInfo.character_maximum_length,
    //                         input_type: mapDataTypeToInputType(columnInfo.data_type),
    //                         table_name: columnInfo.table_name,
    //                     });
    //                 }
    //             });
    //             return acc;
    //         }, []);

    //         // Aquí puedes utilizar resultArray según sea necesario
    //         console.log(resultArray, "resultArray");
    //         return resultArray;

    //     };
    //     const result = dataReturn();
    // }, [col_structure, dataRoadMapIdData]);

    useEffect(() => {
        const result = col_structureFormaterWithReducer(col_structure, dataRoadMapIdData, "RoadMaps");
        console.log("🚀 ~ //dataReturn ~ result:", result);
    }, [col_structure, dataRoadMapIdData]);

    return (
        <div>
            select value <br />
            inputs de roadMap <br />

        </div>
    );
}

export default UpdateAutoGenerate;


