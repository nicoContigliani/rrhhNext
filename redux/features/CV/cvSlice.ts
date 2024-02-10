import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../store";
import useAxios from "@/services/useAxios.services";
import dotenv from 'dotenv';
import { readLocalStorage } from "@/services/storage.services";
// dotenv.config({ path: '@/.env' });
dotenv.config();
const API_URL = process.env.API_URL;

const dataSearch: any[] = ["token"]


// import routesName from '../../../routes.api.json'


dotenv.config();

export interface CVState {
    moduleCVActive?: boolean;
    tokenModuleCV?: string;
    cvDatas: any;
    cvOneData: any;
}

const initialState: CVState = {
    moduleCVActive: false,
    tokenModuleCV: "",
    cvDatas: [],
    cvOneData: [],
};

export const preloadCVData = createAsyncThunk(
    "CV/preload",
    async () => {
        try {
            const { token } = await readLocalStorage(dataSearch);

            const todo: any = await {
                url: `${API_URL}/CV/CV/`,
                method: 'GET',
                body: "",
                idParams: null,
                token: token
            }
            console.log("🚀 ~ todo:", todo)

            const response = await useAxios(todo);
            console.log("🚀 ~ response:", response)
            return response;

        } catch (error) {
            console.error("Error fetching CV data:", error);
            throw error;
        }
    }
);

export const cvIdAsync = createAsyncThunk(
    "CVId/Slice",
    async (id: any) => {
        console.log("🚀 ~ id:", id)
        try {
            const { token } = await readLocalStorage(dataSearch);

            const todo: any = {
                url: `${API_URL}/CV/CV/${id}`,
                method: 'GET',
                body: "",
                idParams: null,
                token: token

            }
            const response = await useAxios(todo);
            return response;

        } catch (error) {
            console.error("Error fetching CV ID data:", error);
            throw error;
        }
    }
);

export const cvNextAsync: any = createAsyncThunk(
    "CVId/Slice",
    async (data: any) => {

        try {
            const { token } = await readLocalStorage(dataSearch);

            const todo: any = {
                url: `${API_URL}/CVNext/CVNext/`,
                method: 'POST',
                body: data,
                idParams: null,
                token: token

            }
            const response = await useAxios(todo);
            return response;
            return true
        } catch (error) {
            console.error("Error fetching CV ID data:", error);
            throw error;
        }
    }
);




export const cvSlice = createSlice({
    name: "cvs/slice",
    initialState,
    reducers: {
        cvs: (state, action: PayloadAction<any>) => {
            state.cvDatas = action.payload.data || {};
            state.cvOneData = action.payload.data || {};

        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(preloadCVData.fulfilled, (state, action) => {
                if (action.payload) {
                    state.cvDatas = action.payload.data || {};
                }
            })
            .addCase(cvIdAsync.fulfilled, (state, action) => {
                if (action.payload) {
                    state.cvOneData = action.payload.data || {};
                }
            })
            .addCase(cvIdAsync.pending, (state) => {
                state.cvOneData = {};
            })
            .addCase(cvIdAsync.rejected, (state) => {
                state.cvOneData = [];
            });
    },
});

export const { cvs } = cvSlice.actions;

export const selectCV = (state: RootState) => state.cv;

export default cvSlice.reducer;