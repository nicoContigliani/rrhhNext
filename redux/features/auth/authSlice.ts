

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../store";
import useAxios from "@/services/useAxios.services";
import { readLocalStorage, writedLocalStorage } from "@/services/storage.services";
import dotenv from 'dotenv';
dotenv.config({ path: '@/.env' });




export interface AuthState {
    token?: string;
    islogin?: boolean;
    user?: object;
    id?: string | number;

}


const initialState: AuthState = {
    token: "",
    islogin: false,
    user: {},
    id: ""
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
    "auth",
    async (userData: any) => {


        const todo: any = {
            url: "http://localhost:3001/Auth/Auth",
            method: 'PUT', // Use 'GET', 'POST', 'PUT', etc. as needed
            body: userDatas,
            idParams: null,
        }

        const response = await useAxios(todo)
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
            });
    },
});

export const { authd } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;


export default authSlice.reducer;



