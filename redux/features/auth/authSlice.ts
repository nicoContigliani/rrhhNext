

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../store";
import useAxios from "@/services/useAxios.services";
import { readLocalStorage, writedLocalStorage } from "@/services/storage.services";




export interface AuthState {
    moduleName: any;
    token?: string;
    islogin?: boolean;
    user?: object;
    id?: string | number;
    message: any;
    httpStatus: any;

}


const initialState: AuthState = {
    moduleName: "moduleStart",
    token: "",
    islogin: false,
    user: {},
    id: "",
    message: "",
    httpStatus: null
};

export interface userDataS {
    islogin: boolean;
    user: object;
    token: string;
    id: number | string
};

let userDataS: userDataS = {
    token: "",
    islogin: false,
    user: {},
    id: ""
};

let dataReturn: any;


const userDatas = {
    "email": "nico.contigliani@gmail.com",
    "password": "123456789"
}

const dataSearch: any[] = ["token", "islogin", "user", "id"]

let dataUser: any | undefined;


const API_URL = process.env.API_URL;


export const preloadAuthData: any = createAsyncThunk(
    "auth/preload",
    async () => {
        const localStorageData = await readLocalStorage(dataSearch);

        if (localStorageData.islogin) {
            return localStorageData;
        }

        return null;
    }
);




// const apiUrl = `${process.env.HOSTAPI}:${process.env.PUERTOAPI}${routesName.Auth}` || `http://localhost:3001/Auth/Auth`


let insertStore: object | any



export const authAsync = createAsyncThunk(
    "auth/Login",
    async (userData: any) => {


        const todo: any = {
            url: ` ${API_URL}/Auth/Auth`,
            method: 'PUT', // Use 'GET', 'POST', 'PUT', etc. as needed
            body: userDatas,
            idParams: null,
            token:""
        }

        const response = await useAxios(todo)
        let dataUserFormated = response.data[0].User
        dataUserFormated.islogin = response.data[0].login
        dataUserFormated.token = response.data[0].token


        const LocalSReturn = await writedLocalStorage(dataUserFormated)


        return dataUserFormated;
    }
);


export const authAsyncRegister = createAsyncThunk(
    "auth/Register",
    async (userData: any) => {

        //rule       
        let dataSend = userData

        dataSend.Score = 1000
        dataSend.status_user = true

        delete dataSend.passwordSecond
  
        const todo: any = {
            url: ` ${API_URL}/Auth/Auth`,
            method: 'POST', // Use 'GET', 'POST', 'PUT', etc. as needed
            body: dataSend,
            idParams: null,
            token:""

        }

        const response = await useAxios(todo)
        console.log("🚀 ~ response:", response)
        let dataUserFormated = response.data[0].User
        dataUserFormated.islogin = response.data[0].login
        dataUserFormated.token = response.data[0].token


        const LocalSReturn = await writedLocalStorage(dataUserFormated)


        return dataUserFormated;
    }
);






export const authSlice = createSlice({
    name: "auth/slice",
    initialState,
    reducers: {
        authd: (state, action: PayloadAction<any>) => {
            state.token += action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(preloadAuthData.fulfilled, (state, action) => {
                if (action.payload) {
                    state.islogin = action.payload.islogin || false;
                    state.user = action.payload.user || {};
                    state.token = action.payload.token || "";
                    state.id = action.payload.id || "";
                }
            })
            .addCase(authAsync.pending, (state) => {
                state.islogin = false;
            })
            .addCase(authAsync.fulfilled, (state, action) => {
                state.islogin = action.payload.login;
                state.user = action.payload;
                state.token = action.payload.token;
                state.id = action.payload?.id;
            })
            .addCase(authAsync.rejected, (state) => {
                state.islogin = false;
            })
            .addCase(authAsyncRegister.fulfilled, (state, action) => {
                state.islogin = action.payload.login;
                state.user = action.payload;
                state.token = action.payload.token;
                state.id = action.payload?.id;
            })
            .addCase(authAsyncRegister.rejected, (state) => {
                state.islogin = false;
            });

    },

});

export const { authd } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;


export default authSlice.reducer;



