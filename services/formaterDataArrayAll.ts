import { v4 as uuidv4 } from 'uuid';

export const formaterDataArrayAll = async (all: any, arrayDelete: any, rules: any) => {


    const todo = all?.map((item: any) => {

        return arrayDelete?.map((itemData: any) => {
            return {
                id: item.id,
                dataArray: item[itemData]
            }
        })



    })

    return todo

}
export const formatDataAllElementNotArray = async (all: any[], arrayDelete: string[], rules: string[]) => {

    const todo = await all.map((item: any) => {
        const newItem: any = {
            key: uuidv4()
        };

        rules.forEach((dataItem: any) => {
            newItem[dataItem] = item[dataItem];
        });
        return newItem;
    });
    return todo
};