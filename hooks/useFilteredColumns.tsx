import { useMemo, useEffect } from 'react';

const useFilteredColumns = (col_structure: any, nameModelStarts: any, excludeColumns = ["updatedAt", "createdAt"], colsAlternative: any, setColsAlternative: any) => {
    const filteredColumns = useMemo(() => {
        const table = col_structure.find((obj: any) => obj.table_fullname === nameModelStarts);
        return table?.table_columns.filter((item: any) => (
            !excludeColumns.includes(item.column_name)
        ));
    }, [col_structure, nameModelStarts, excludeColumns]);

    useEffect(() => {
        if (JSON.stringify(colsAlternative) !== JSON.stringify(filteredColumns)) {
            setColsAlternative(filteredColumns);
        }
    }, [filteredColumns, colsAlternative, setColsAlternative]);

    return colsAlternative;
};

export default useFilteredColumns;