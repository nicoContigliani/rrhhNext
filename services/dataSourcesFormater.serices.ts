export const dataSourcesFormater = (sourcesArray: any, dataForFilter: any) => {
    return sourcesArray.map((item: any) => {
        return dataForFilter.reduce((acc: any, key: any) => {
            acc[key] = typeof item[key] === 'boolean' ? (item[key] ? 'true' : 'false') : item[key];
            return acc;
        }, {});
    });
}