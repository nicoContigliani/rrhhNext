export const promiseValueLabelCreateAutoGenerate = async (colIdPath: any | any[] | undefined) => {

    const promises = colIdPath.map(async ({
        ids,
        paths,
        datas,
        datakey,
        titleModal,
        isMultiple
    }: any) => {
        return datas.map((item: any) => {
            const value = item?.[datakey[0]] || '';
            const label = item?.[datakey[1]] || '';
            return { value, label, ids, titleModal, isMultiple };
        });
    });

    const dataSources = await Promise.all(promises);

    const filteredTodos = colIdPath.map(({ datasKey, titleModal, paths }: any) => {
        return [datasKey, titleModal, paths];
    });


    return {
        dataSources,
        filteredTodos
    }
}