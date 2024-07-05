export const formaterSelectTitle = (arrayData: any[] | undefined, arrayKeys: object | any | any[]): string[] => {

    if (!Array.isArray(arrayData) || !Array.isArray(arrayKeys)) {
        return [];
    }

    return arrayData?.map((item: any) => {
        return arrayKeys?.map((key: any) => item[key]).join('-');
    }) ?? [];
}



export const formatDataWithKeys = (arrayData: any[] | undefined, arrayKeys: object | any | any[]): string[] => {
    if (!Array.isArray(arrayData) || !Array.isArray(arrayKeys)) {
        return [];
    }
    return arrayData.map(item => {
        return arrayKeys.map(key => {
            const value = item[key];
            // Si el valor es una cadena, elimina las comas
            if (typeof value === 'string') {
                return value.replace(/,/g, '');
            }
            return value;
        }).join('-');
    });
}