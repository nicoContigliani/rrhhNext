import { v4 as uuidv4 } from 'uuid';

export const formaterDataArray = async (datarule: any, dataTitle: string) => {

    let todo: any | any[] = await datarule?.map((item: any) => {

        let typeDataItem: any | undefined = ""

        if (typeof (item) === "string") typeDataItem = "text"


        return {
            // key: item,
            key: uuidv4(),
            title: item,
            dataIndex: item,
            types: typeof (item),
            titlePlaceholder: dataTitle,
            value: item,
            label: item


        }
    })









    return todo
}