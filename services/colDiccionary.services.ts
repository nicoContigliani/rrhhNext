import { readLocalStorage } from "./storage.services";

export const colDiccionary = async (dataSerchs: any) => {
    return await readLocalStorage(dataSerchs);
}
