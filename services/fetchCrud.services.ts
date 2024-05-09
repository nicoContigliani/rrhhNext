
import { AppDispatch } from "../redux/store"; // Asegúrate de importar el tipo correcto para el dispatch
import { fetchCrud, createCrud, updateCrud, deleteCrud } from "@/redux/features/CRUD/crudSlice"; // Importa las acciones del slice

export const fetchCrudData = (data: any) => async (dispatch: AppDispatch) => {
    try {
        // Dispatch de la acción fetchCrud con los datos proporcionados
        const action = await dispatch(fetchCrud(data));
        // Puedes manejar el resultado de la acción aquí si es necesario
    } catch (error) {
        // Manejo de errores
    }
};

export const createCrudData = (data: any) => async (dispatch: AppDispatch) => {
    try {
        // Dispatch de la acción createCrud con los datos proporcionados
        const action = await dispatch(createCrud(data));
        // Puedes manejar el resultado de la acción aquí si es necesario
    } catch (error) {
        // Manejo de errores
    }
};

export const updateCrudData = (data: any) => async (dispatch: AppDispatch) => {
    try {
        // Dispatch de la acción updateCrud con los datos proporcionados
        const action = await dispatch(updateCrud(data));
        // Puedes manejar el resultado de la acción aquí si es necesario
    } catch (error) {
        // Manejo de errores
    }
};

export const deleteCrudData = (data: any) => async (dispatch: AppDispatch) => {
    try {
        // Dispatch de la acción deleteCrud con los datos proporcionados
        const action = await dispatch(deleteCrud(data));
        // Puedes manejar el resultado de la acción aquí si es necesario
    } catch (error) {
        // Manejo de errores
    }
};