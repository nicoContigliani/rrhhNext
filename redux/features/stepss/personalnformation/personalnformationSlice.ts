

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "@/redux/store";
import useAxios from "@/services/useAxios.services";
import { readLocalStorage, writedLocalStorage } from "@/services/storage.services";
import { preloadUserCVCleanForSelectServices } from "@/services/preloadUserCVCleanForSelect.services";
import { contentOptionSelectCVUsers } from "@/services/contentOptionSelectStructureCVUsers.services";
const API_URL = process.env.API_URL;


const dataSearch: any[] = [
    "id",
    "email",
    "fullname",
    "phone",
    "birthday",
    "Score",
    "status_user",
    "name_role",
    "admins"]

const initialState = {
    personalInformationData: [{}],
    peopleForCv: [{}],
    selectedValues: [{}],
    contentOptionSelect: [{}],
    error: [{}]
};


export const preloadUserCVData: any | any[] | undefined = createAsyncThunk(
    "userCV/preload",
    async () => {
        try {
            const {
                id,
                email,
                fullname,
                phone,
                birthday,
                Score,
                status_user,
                name_role,
                admins
            } = await readLocalStorage(dataSearch);

            // Verificar si el usuario es administrador
            if (name_role === "Administrador" && admins) {

                const todo: any = {
                    url: ` ${API_URL}/User/User/`,
                    method: 'GET', // Use 'GET', 'POST', 'PUT', etc. as needed
                    body: "",
                    idParams: null,
                    token: ""
                }

                const response = await useAxios(todo)

                const dataReturnCleanData = await preloadUserCVCleanForSelectServices(response?.data)
                const dataForSelect = await contentOptionSelectCVUsers(dataReturnCleanData)
                return [dataForSelect]; // Retornar un arreglo con el mensaje
            }

            // Verificar si el usuario no es administrador
            if (name_role !== "Administrador" || !admins) {
                // Retornar los datos del usuario
                return [[{
                    id,
                    email,
                    fullname,
                    phone,
                    birthday,
                    Score,
                    status_user,
                }]];
            }

            // Si ninguna de las condiciones se cumple, retorna null
            return null;
        } catch (error) {
            console.error("Error en preloadUserCVData:", error);
            throw error;
        }
    }
);

export const UserCVDataSelected: any | any[] | undefined = createAsyncThunk(
    "userCV/personalInformation",
    async () => {
        try {
            const {
                id,
                email,
                fullname,
                phone,
                birthday,
                Score,
                status_user,
                name_role,
                admins
            } = await readLocalStorage(dataSearch);

            // Verificar si el usuario es administrador
            if (name_role === "Administrador" && admins) {

                const todo: any = {
                    url: ` ${API_URL}/User/User/`,
                    method: 'GET', // Use 'GET', 'POST', 'PUT', etc. as needed
                    body: "",
                    idParams: null,
                    token: ""
                }

                const response = await useAxios(todo)

                const dataReturnCleanData = await preloadUserCVCleanForSelectServices(response?.data)
                return [dataReturnCleanData]; // Retornar un arreglo con el mensaje
            }

            // Verificar si el usuario no es administrador
            if (name_role !== "Administrador" || !admins) {
                // Retornar los datos del usuario


                return [[{
                    id,
                    email,
                    fullname,
                    phone,
                    birthday,
                    Score,
                    status_user,
                }]];
            }

            // Si ninguna de las condiciones se cumple, retorna null
            return null;
        } catch (error) {
            console.error("Error en preloadUserCVData:", error);
            throw error;
        }
    }
);










const personalInformationSlice = createSlice({
    name: 'personalInformation',
    initialState,
    reducers: {
        preloadDataUserForCv: (state, action) => {
            state.contentOptionSelect = action.payload;
        },

        dataUserCvSelect: (state, action) => {
            state.peopleForCv = action.payload;
        },
        insertInformationDataofDataFilterInPersonalInformationData: (state, action) => {
            state.personalInformationData = action.payload;        
        },

        setPersonalInformationData: (state, action) => {
            state.personalInformationData = action.payload;
        },
        addPersonalInformationEntry: (state) => {
            // state.personalInformationData.push({});
        },
        updatePersonalInformationEntry: (state, action) => {
            const { index, field, value } = action.payload;
            // state.personalInformationData[index] = {
            //     ...state.personalInformationData[index],
            //     [field]: value,
            // };
        },
        deletePersonalInformationEntry: (state, action) => {
            const { index } = action.payload;
            state.personalInformationData.splice(index, 1);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(preloadUserCVData.fulfilled, (state, action) => {
                state.contentOptionSelect = action.payload;

            })
            .addCase(preloadUserCVData.rejected, (state, action) => {
                state.error = action.error.message || "Error en la carga de datos de usuario.";
            })
            .addCase(UserCVDataSelected.fulfilled, (state, action) => {
                state.peopleForCv = action.payload;
            })
            .addCase(UserCVDataSelected.rejected, (state, action) => {
                state.error = action.error.message || "Error en la carga de datos de usuario.";
            });
    }
});

export const {
    insertInformationDataofDataFilterInPersonalInformationData,
    setPersonalInformationData,
    addPersonalInformationEntry,
    updatePersonalInformationEntry,
    deletePersonalInformationEntry,
} = personalInformationSlice.actions;

export default personalInformationSlice.reducer;

export const selectPersonalInformation = (state: RootState) => state.personalInformation;





