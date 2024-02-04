

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "@/redux/store";
import useAxios from "@/services/useAxios.services";
import { readLocalStorage, writedLocalStorage } from "@/services/storage.services";


const initialState = {
    personalDescriptionData: [{}],
};

const personalDescriptionSlice = createSlice({
    name: 'personalInformation',
    initialState,
    reducers: {
        setPersonalDescriptionData: (state, action) => {
            state.personalDescriptionData = action.payload;
        },
        addPersonalDescriptionEntry: (state) => {
            state.personalDescriptionData.push({});
        },
        updatePersonalDescriptionEntry: (state, action) => {
            const { index, field, value } = action.payload;
            state.personalDescriptionData[index] = {
                ...state.personalDescriptionData[index],
                [field]: value,
            };
        },
        deletePersonalDescriptionEntry: (state, action) => {
            const { index } = action.payload;
            state.personalDescriptionData.splice(index, 1);
        },
    },
});

export const {
    setPersonalDescriptionData,
    addPersonalDescriptionEntry,
    updatePersonalDescriptionEntry,
    deletePersonalDescriptionEntry,
} = personalDescriptionSlice.actions;

export default personalDescriptionSlice.reducer;

export const selectPersonalDescription = (state: RootState) => state.personalDescription;





