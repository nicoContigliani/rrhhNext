import React, { useEffect, useState } from 'react'

const useRows = () => {

    const [header, setHeader] = useState<any[] | undefined>()
    const [dataAllColumns, setDataAllColumns] = useState<any[] | undefined>()
    const [headerDeletes, setHeaderDeletes] = useState<any[] | undefined>()
    const [DataColumns, setDataColumns] = useState<any | any[] | undefined>()
    const [si, setSi] = useState<any | any[] | undefined>()

    const [DataPaginateColumns, setDataPaginateColumns] = useState<any | any[] | undefined>()



    const [row, setRow] = useState<any | any[] | undefined>()

    const [todos, setTodos] = useState<any | any[] | undefined>()




    useEffect(() => {
        const processColumns = async () => {
            if (!DataColumns) {
        
                return;
            }

            const processedData = await DataColumns.reduce(
                (acc: any, column: any) => {
                    const filteredKeys = Object.keys(column).filter((key) => header?.includes(key));
                    acc.push(filteredKeys.map((key) => column[key]));
                    return acc;
                },
                []
            );

            // Do something with processedData
            setRow(processedData);
        };

        processColumns();
    }, [todos])



    console.log("🚀 ~ file: useRows.tsx:11 ~ useRows ~ row:", row)





    return {
        header, setHeader,
        dataAllColumns, setDataAllColumns,
        headerDeletes, setHeaderDeletes,
        DataColumns, setDataColumns,
        row, setRow,
        todos, setTodos,
        DataPaginateColumns, setDataPaginateColumns
    }
}

export default useRows

