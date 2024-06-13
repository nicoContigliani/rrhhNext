export const groupByInterview = (selectedValues: any, data: any,) => {
    const indexDataFilter = data?.all_Steps || 0;
    const filterReturn: any[] | undefined = [];
    const pattern = /-\d+$/; // regex pattern to match numbers at the end of keys

    function filterByKeyNumber(obj: any, number: number) {
        const filteredData: any = {};

        for (const key in obj) {
            if (obj.hasOwnProperty(key) && pattern.test(key) && key.endsWith(`-${number}`)) {
                filteredData[key] = obj[key];
            }
        }

        return filteredData;
    }

    for (let index = 1; index <= indexDataFilter; index++) {
        const filteredData = filterByKeyNumber(selectedValues, index);
        filterReturn.push(filteredData);
    }
    return filterReturn
}