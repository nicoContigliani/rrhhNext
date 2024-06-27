// import { v4 as uuidv4 } from 'uuid';

// const mapDataTypeToInputType = (dataType: string) => {
//     switch (dataType) {
//         case "integer":
//         case "bigint":
//             return "number";
//         case "boolean":
//             return "checkbox";
//         case "timestamp with time zone":
//         case "timestamp":
//             return "datetime-local";
//         case "text":
//         case "character varying":
//         default:
//             return "text";
//     }
// };

// export const col_structureFormaterWithReducer = (
//     col_structure: any[] | any | undefined,
//     dataIdData: any | any[] | undefined,
//     nameModelStart: string | undefined
// ) => {
//     if (!col_structure || !dataIdData || !nameModelStart) {
//         console.error("Invalid input data");
//         return [];
//     }

//     const tableStructure = col_structure.find((obj: any) => obj?.table_fullname === nameModelStart)?.table_columns;
//     if (!tableStructure) {
//         console.error(`Table structure for '${nameModelStart}' not found`);
//         return [];
//     }

//     const columnMap = new Map(tableStructure.map((col: any) => [col.column_name, col]));

//     const resultArray = dataIdData.reduce((acc: any[], dataObject: any) => {
//         Object.entries(dataObject).forEach(([key, value]) => {
//             const columnInfo: any | undefined = columnMap.get(key);
//             if (columnInfo) {
//                 acc.push({
//                     column_name: key,
//                     keyValue: value,
//                     character_maximum_length: columnInfo.character_maximum_length,
//                     input_type: mapDataTypeToInputType(columnInfo.data_type),
//                     table_name: columnInfo.table_name,
//                     // key: uuid(),
 
//                 });
//             }
//         });
//         return acc;
//     }, []);

//     return resultArray;
// };
// function uuid() {
//     throw new Error('Function not implemented.');
// }

import { v4 as uuidv4 } from 'uuid';

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

export const col_structureFormaterWithReducer = (
    col_structure: any[] | any | undefined,
    dataIdData: any | any[] | undefined,
    nameModelStart: string | undefined
) => {
    if (!col_structure || !dataIdData || !nameModelStart) {
        console.error("Invalid input data");
        return [];
    }

    const tableStructure = col_structure.find((obj: any) => obj?.table_fullname === nameModelStart)?.table_columns;
    if (!tableStructure) {
        console.error(`Table structure for '${nameModelStart}' not found`);
        return [];
    }

    const columnMap = new Map(tableStructure.map((col: any) => [col.column_name, col]));

    const resultArray = dataIdData.reduce((acc: any[], dataObject: any) => {
        Object.entries(dataObject).forEach(([key, value]) => {
            const columnInfo: any | undefined = columnMap.get(key);
            if (columnInfo) {
                acc.push({
                    column_name: key,
                    keyValue: value,
                    character_maximum_length: columnInfo.character_maximum_length,
                    input_type: mapDataTypeToInputType(columnInfo.data_type),
                    table_name: columnInfo.table_name,
                    key: uuidv4(),  // Generate a UUID for each item
                });
            }
        });
        return acc;
    }, []);

    return resultArray;
};