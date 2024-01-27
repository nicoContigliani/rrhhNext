

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "@/redux/store";
import useAxios from "@/services/useAxios.services";
import { readLocalStorage, writedLocalStorage } from "@/services/storage.services";


const initialState = {
    experienceData: [{}],
};

const experienceSlice = createSlice({
    name: 'experience',
    initialState,
    reducers: {
        setExperienceData: (state, action) => {
            state.experienceData = action.payload;
        },
        addExperienceEntry: (state) => {
            state.experienceData.push({});
        },
        updateExperienceEntry: (state, action) => {
            const { index, field, value } = action.payload;
            state.experienceData[index] = {
                ...state.experienceData[index],
                [field]: value,
            };
        },
        deleteExperienceEntry: (state, action) => {
            const { index } = action.payload;
            state.experienceData.splice(index, 1);
        },
    },
});

export const {
    setExperienceData,
    addExperienceEntry,
    updateExperienceEntry,
    deleteExperienceEntry,
} = experienceSlice.actions;

export default experienceSlice.reducer;

export const selectExperience = (state: RootState) => state.experience;





