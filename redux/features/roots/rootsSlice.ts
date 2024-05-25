

import * as jwt from 'jsonwebtoken';

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../store";
import useAxios from "@/services/useAxios.services";

import { readLocalStorage, writedLocalStorage } from "@/services/storage.services";
import { jwtDecodes } from '@/services/jwtDecode.services';




export interface AuthState {
    moduleName: any;
    token?: string;
    islogin?: boolean;
    user?: object;
    id?: string | number;
    message: any;
    httpStatus: any;

}


// const initialState: AuthState = {
//     moduleName: "moduleStart",
//     token: "",
//     islogin: false,
//     user: {},
//     id: "",
//     message: "",
//     httpStatus: null
// };


const initialState: any = {
    moduleName: "moduleStructure",
    token: "",
    col_structure: {},
    id: "",
    message: "",
    httpStatus: null,
};




// export interface userDataS {
//     islogin: boolean;
//     user: object;
//     token: string;
//     id: number | string
// };

// let userDataS: userDataS = {
//     token: "",
//     islogin: false,
//     user: {},
//     id: ""
// };

// let dataReturn: any;


// const userDatas = {
//     "email": "nico.contigliani@gmail.com",
//     "password": "123456789"
// }

const dataSearch: any[] = ["token", "islogin", "user", "id"]

let dataUser: any | undefined;


const API_URL = process.env.API_URL;






// const apiUrl = `${process.env.HOSTAPI}:${process.env.PUERTOAPI}${routesName.Auth}` || `http://localhost:3001/Auth/Auth`


let insertStore: object | any



export const rootsAsync = createAsyncThunk(
    "root/structure_axios",
    // async (userData: any) => {
    async () => {
        const secretKey: string = 'simon';//process.env.JWT_SECRET ||


        const todo: any = {
            url: ` ${API_URL}/Roots/Roots`,
            method: 'GET', // Use 'GET', 'POST', 'PUT', etc. as needed
            body: "",
            idParams: null,
            token: ""
        }

        const response = await useAxios(todo)

        if (!response || !response.data || !response.data[0]) {
            throw new Error("Invalid response format");
        }

        let dataUserFormated = await response.data[0];

        // await jwtDecodes(dataUserFormated.data, 'simon')


        // const decoded = jwt.verify(dataUserFormated, secretKey);
        // console.log("🚀 ~ decoded:", decoded)
        // // console.log("🚀 ~ Decoded JWT:", decoded);



        dataUserFormated.islogin = await response.data[0].login
        dataUserFormated.token = await response.data[0].token




        const LocalSReturn = await writedLocalStorage(dataUserFormated)


        return dataUserFormated;
    }
);

export const rootsSlice = createSlice({
    name: "root/structure_return",
    initialState,
    reducers: {
        roots: (state, action: PayloadAction<any>) => {
            state.token += action.payload;
        },
    },
    extraReducers: (builder) => {
        builder

            .addCase(rootsAsync.pending, (state) => {
                state.message = "loading...";

            })
            .addCase(rootsAsync.fulfilled, (state, action) => {
                state.col_structure = action.payload.col_structure;
                state.token = action.payload.token;
                state.id = action.payload?.id;
                state.message = "Data col get";

            })
            .addCase(rootsAsync.rejected, (state) => {
                state.message = "reject";
            })


    },

});

export const { roots } = rootsSlice.actions;

export const selectRoots = (state: RootState) => state.roots;


export default rootsSlice.reducer;



