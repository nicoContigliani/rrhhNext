import { Dispatch } from 'redux';
import { fetchCrud } from '@/redux/features/CRUD/crudSlice';
import diccionaryRoutesAndComponents from '@/diccionaryDataKey/diccionaryRoutesAndComponents.json'





type DictionaryRoutesAndComponents = typeof diccionaryRoutesAndComponents;
interface DataFetchForSelectServiceProps {
    selectDataSources: any[];
    dispatch: Dispatch;
}

const dataFetchForSelectService = async ({ selectDataSources, dispatch }: DataFetchForSelectServiceProps) => {
    const dataR = await Promise.all(selectDataSources.map(async (item: any) => {
        const dataTitle: string = item.dataIndex;
        const replacedString: string = dataTitle.replace(/Id/g, "");

        // Split the text into an array of characters
        const chars = replacedString.split("");

        // Capitalize the first character
        chars[0] = chars[0].toUpperCase();

        // Join the characters back into a string
        const TodoData = chars.join("");

        let capitalizedText: string = "";

        if (TodoData !== "InterviewType") capitalizedText = TodoData;

        const todoCRUDGet: any = {
            urlGeneral: `/${capitalizedText}/${capitalizedText}`,
            methods: 'GET',
            body: '',
            idParams: '',
        };

        const response = await dispatch(fetchCrud(todoCRUDGet));
        const datas = await response?.payload?.data;

        const dataObject: any = diccionaryRoutesAndComponents;

        const { datakey }: any = dataObject[dataTitle];

        const dataSources = datas.map((item: any) => {
            const value = (datakey[0] !== undefined && item !== undefined) ? item[datakey[0]] : '';
            const label = (datakey[1] !== undefined && item !== undefined) ? item[datakey[1]] : '';
            return { value, label, ids: dataTitle, titleModal: TodoData };
        });

        return dataSources;
    }));

    return dataR;
};

export default dataFetchForSelectService;