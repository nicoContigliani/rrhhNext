export const dataFormaterToSelect =  (datakey: any, datas: any) => {

    const value = datakey[0] !== undefined ? datakey[0] : '';
    const label = datakey[1] !== undefined ? datakey[1] : '';
    return { value, label };

}