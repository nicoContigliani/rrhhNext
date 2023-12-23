import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../store";
import useAxios from "@/services/useAxios.services";
import dotenv from 'dotenv';
// dotenv.config({ path: '@/.env' });
dotenv.config();



import routesName from '../../../routes.api.json'


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
            const todo: any = {
                url: "http://localhost:3001/CV/CV/",
                method: 'GET',
                body: "",
                idParams: null,
            }

            const response = await useAxios(todo);
            return response;

        } catch (error) {
            console.error("Error fetching CV data:", error);
            throw error;
        }
    }
);

export const cvIdAsync = createAsyncThunk(
    "CVId/Slice",
    async () => {
        try {
            const todo: any = {
                url: "http://localhost:3001/CV/CV/2",
                method: 'GET',
                body: "",
                idParams: null,
            }

            const response = await useAxios(todo);
            return response;

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
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(preloadCVData.fulfilled, (state, action) => {
                if (action.payload) {
                    state.cvDatas = action.payload.data || {};
                }
            })
            .addCase(cvIdAsync.pending, (state) => {
                state.cvOneData = {};
            })
            .addCase(cvIdAsync.fulfilled, (state, action) => {
                state.cvOneData = action.payload.data || [];
            })
            .addCase(cvIdAsync.rejected, (state) => {
                state.cvOneData = [];
            });
    },
});

export const { cvs } = cvSlice.actions;

export const selectCV = (state: RootState) => state.cv;

export default cvSlice.reducer;