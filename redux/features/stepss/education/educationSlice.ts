

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "@/redux/store";
import useAxios from "@/services/useAxios.services";
import { readLocalStorage, writedLocalStorage } from "@/services/storage.services";


const initialState = {
    educationData: [{}],
};

const educationSlice = createSlice({
    name: 'education',
    initialState,
    reducers: {
        setEducationData: (state, action) => {
            state.educationData = action.payload;
        },
        addEducationEntry: (state) => {
            state.educationData.push({});
        },
        updateEducationEntry: (state, action) => {
            const { index, field, value } = action.payload;
            state.educationData[index] = {
                ...state.educationData[index],
                [field]: value,
            };
        },
        deleteEducationEntry: (state, action) => {
            const { index } = action.payload;
            state.educationData.splice(index, 1);
        },
    },
});

export const {
    setEducationData,
    addEducationEntry,
    updateEducationEntry,
    deleteEducationEntry,
} = educationSlice.actions;

export default educationSlice.reducer;

export const selectEducation = (state: RootState) => state.education;





