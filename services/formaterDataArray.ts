import { v4 as uuidv4 } from 'uuid';

export const formaterDataArray = async (datarule: any) => {

    let todo: any | any[] = await datarule?.map((item: any) => {
        return {
            // key: item,
            key: uuidv4(),
            title: item,
            dataIndex: item,

        }
    })









    return todo
}