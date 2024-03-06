
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { readLocalStorage } from "@/services/storage.services";
import useAxios from "@/services/useAxios.services";
import dotenv from 'dotenv';

dotenv.config();
const API_URL = process.env.API_URL;

const crudSearch: any[] = ["token"];


export interface FetchCrudData {
    urlGeneral: string;
    methods: string;
    body?: any | any[]; // Tipo específico para el cuerpo de la solicitud
    idParams?: string | number | null | undefined;
}


interface CrudState {
    dataCrud: any[];
    message: string;
    httpStatus: number | null | undefined;
    loading: boolean;
}

const initialState: CrudState = {
    dataCrud: [],
    message: "",
    httpStatus: null,
    loading: false
};

export const fetchCrud: any | any[] | undefined = createAsyncThunk(
    "crud/fetch",
    async (data: FetchCrudData) => {
        console.log("🚀 ~ data:30", data)

        const {
            urlGeneral,
            methods,
            body,
            idParams,
        } = data
        try {
            const { token } = await readLocalStorage(crudSearch);

            const todo: any = await {
                url: `${API_URL}${urlGeneral}`,
                method: 'GET',
                body: "",
                idParams: null,
                token: token
            }

            const response = await useAxios(todo);
            console.log("Response status:", response.status); // Check if status is logged correctly
            return { data: response.data, status: response.status }; // Returning custom payload
        } catch (error) {
            console.error("Error fetching crud:", error);
            throw error;
        }
    }
);

export const fetchCrudId = createAsyncThunk(
    "crud/fetchId",
    async (data: FetchCrudData) => {
        const {
            urlGeneral,
            methods,
            body,
            idParams,
        } = data
        try {
            const { token } = await readLocalStorage(crudSearch);

            const todo: any = await {
                url: `${API_URL}`,
                method: 'GET',
                body: "",
                idParams: idParams,
                token: token
            }

            const response = await useAxios(todo);
            return { data: response.data, status: response.status }; // Returning custom payload
        } catch (error) {
            console.error("Error fetching crud:", error);
            throw error;
        }
    }
);



export const createCrud: any = createAsyncThunk(
    "crud/create",
    async (data: FetchCrudData) => {
        try {
            const {
                urlGeneral,
                methods,
                body,
                idParams,
            } = data
            const { token } = await readLocalStorage(crudSearch);

            const todo: any = {
                url: `${API_URL}${urlGeneral}`,
                method: 'POST',
                body: body,
                idParams: null,
                token: token
            }

            const response = await useAxios(todo);
            return { data: response.data, status: response.status }; // Returning custom payload
        } catch (error) {
            console.error("Error creating crud:", error);
            throw error;
        }
    }
);

export const updateCrud: any | any[] | undefined = createAsyncThunk(
    "crud/update",
    async (data: FetchCrudData) => {
        try {
            const {
                urlGeneral,
                methods,
                body,
                idParams,
            } = data

            const { token } = await readLocalStorage(crudSearch);

            const todo: any = {
                url: `${API_URL}${urlGeneral}`,
                method: methods,
                body: body,
                idParams: idParams,
                token: token
            }

            const response: any[] | any | undefined = await useAxios(todo);
            return { data: response.data, status: response.status }; // Returning custom payload
        } catch (error) {
            console.error("Error updating crud:", error);
            throw error;
        }
    }
);

export const deleteCrud: any | any[] | undefined = createAsyncThunk(
    "crud/delete",
    async (data: any | FetchCrudData | undefined) => {
        try {
            const {
                urlGeneral,
                methods,
                body,
                idParams,
            } = data
            const { token } = await readLocalStorage(crudSearch);

            const todo: any = {
                url: `${API_URL}${urlGeneral}`,
                method: 'DELETE',
                body: "",
                idParams: idParams,
                token: token
            }

            const response = await useAxios(todo);
            return { data: response.data, status: response.status }; // Returning custom payload
        } catch (error) {
            console.error("Error deleting crud:", error);
            throw error;
        }
    }
);

export const crudSlice = createSlice({
    name: "crud",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCrud.pending, (state: any | any[], action: any | any[]) => {
                state.loading = true;
            })
            .addCase(fetchCrud.fulfilled, (state: any | any[], action: any | any[]) => {
                state.data = action.payload.data;
                state.loading = false;
                state.message = "Fetch crud successful";
                state.httpStatus = action.payload.status;

            })
            .addCase(fetchCrud.rejected, (state: any | any[], action: any | any[]) => {
                state.loading = false;
                state.message = "Error fetching crud";
                state.httpStatus = action.payload.status;
            })
            .addCase(createCrud.pending, (state) => {
                state.loading = true;
            })
            .addCase(createCrud.fulfilled, (state, action) => {
                state.dataCrud.push(action.payload.data);
                state.loading = false;
                state.message = "Crud created successfully";
            })
            .addCase(createCrud.rejected, (state: any | any[], action: any | any[]) => {
                state.loading = false;
                state.message = "Error creating crud";
                state.httpStatus = action.payload.status;
            })
            .addCase(updateCrud.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateCrud.fulfilled, (state, action) => {
                const index = state.dataCrud.findIndex(item => item.id === action.payload.id);
                if (index !== -1) {
                    state.dataCrud[index] = action.payload.data;
                }
                state.loading = false;
                state.message = "Crud updated successfully";
            })
            .addCase(updateCrud.rejected, (state: any | any[], action: any | any[]) => {
                state.loading = false;
                state.message = "Error updating crud";
                state.httpStatus = action.payload.status;
            })
            .addCase(deleteCrud.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteCrud.fulfilled, (state: any | any[], action: any | any[]) => {
                state.dataCrud = state.dataCrud.filter((item: any | any[]) => item.id !== action.payload.id);
                state.loading = false;
                state.message = "Crud deleted successfully";
                state.httpStatus = action.payload.status;

            })
            .addCase(deleteCrud.rejected, (state: any | any[], action: any | any[]) => {
                state.loading = false;
                state.message = "Error deleting crud";
                state.httpStatus = action.payload.status;
            });
    },
});

export const selectCrud = (state: RootState) => state.crud;

export default crudSlice.reducer