

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "@/redux/store";
import useAxios from "@/services/useAxios.services";
import { readLocalStorage, writedLocalStorage } from "@/services/storage.services";


const dataSearch: any[] = ["name_role","admins"]

const initialState = {
    personalInformationData: [{}],
};

const personalInformationSlice = createSlice({
    name: 'personalInformation',
    initialState,
    reducers: {
        setPersonalInformationData: (state, action) => {
            state.personalInformationData = action.payload;
        },
        addPersonalInformationEntry: (state) => {
            state.personalInformationData.push({});
        },
        updatePersonalInformationEntry: (state, action) => {
            const { index, field, value } = action.payload;
            state.personalInformationData[index] = {
                ...state.personalInformationData[index],
                [field]: value,
            };
        },
        deletePersonalInformationEntry: (state, action) => {
            const { index } = action.payload;
            state.personalInformationData.splice(index, 1);
        },
    },
});

export const {
    setPersonalInformationData,
    addPersonalInformationEntry,
    updatePersonalInformationEntry,
    deletePersonalInformationEntry,
} = personalInformationSlice.actions;

export default personalInformationSlice.reducer;

export const selectPersonalInformation = (state: RootState) => state.personalInformation;





