export const dataFormaterToSelect = (datakey: any, datas: any) => {
    return datas?.map((item: any) => ({ value: item[datakey[0]], label: item[datakey[1]] }));
}