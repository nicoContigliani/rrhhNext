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

export interface moduleServicesState {
    moduleServicesActive?: boolean;
    tokenModuleServices?: string;
    moduleServicesData?: any;
    message?: any;
    httpStatus?: any;


}

const initialState: any | any[] | undefined = {
    moduleServicesActive: false,
    tokenModuleServices: "",
    moduleServicesData: [],
    message: "",
    httpStatus: null
};

export const preloadModuleServicesData: any | any[] | undefined = createAsyncThunk(
    "MooduleSerices/preload",
    async () => {
        try {
            // const { token } = await readLocalStorage(dataSearch);

            // const todo: any = await {
            //     url: `${API_URL}/CVNext/CVNext/`,
            //     method: 'GET',
            //     body: "",
            //     idParams: null,
            //     token: token
            // }
            // console.log("🚀 ~ todo:", todo)

            // const response = await useAxios(todo);
            // console.log("🚀 ~ response:", response)




            

            const response = [
                {
                    moduleName: "moduleStart",
                    moduleToken: "asdfasdf1231321321",
                    moduleStatus: true,
                    timeUseClient: "",
                    locationUser: {},
                    timeActive: ""
                },
                {
                    moduleName: "moduleHummanResources",
                    moduleToken: "asdfasdf1231321321",
                    moduleStatus: true,
                    timeUseClient: "",
                    locationUser: {},
                    timeActive: ""
                },
                {
                    moduleName: "moduleNewTalents",
                    moduleToken: "asdfasdf1231321321",
                    moduleStatus: true,
                    timeUseClient: "",
                    locationUser: {},
                    timeActive: ""
                },
                {
                    moduleName: "moduleHummanResources",
                    moduleToken: "asdfasdf1231321321",
                    moduleStatus: true,
                    timeUseClient: "",
                    locationUser: {},
                    timeActive: ""
                }
            ]

            return response;

        } catch (error) {
            console.error("Error fetching CV data:", error);
            throw error;
        }
    }
);



export const moduleServicesSlice: any | any[] | undefined = createSlice({
    name: "mosuleServices/slice",
    initialState,
    reducers: {
        moduleServicess: (state, action: PayloadAction<any | any[] | undefined>) => {
            state.moduleServicesData = action.payload || {};

        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(preloadModuleServicesData.fulfilled, (state, action) => {
                state.moduleServicesData = action.payload;
                state.moduleServicesActive = false;
                state.tokenModuleServices = "";
                state.message = "";
                state.httpStatus = null;
            });







    },
});

export const { moduleServicess } = moduleServicesSlice.actions;

export const selectModuleServices = (state: RootState) => state.moduleServices;

export default moduleServicesSlice.reducer;