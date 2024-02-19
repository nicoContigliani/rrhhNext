

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "@/redux/store";
import useAxios from "@/services/useAxios.services";
import { readLocalStorage, writedLocalStorage } from "@/services/storage.services";


const initialState = {
    experienceFreeData: [{}],
};

const experienceFreeSlice = createSlice({
    name: 'experienceFree',
    initialState,
    reducers: {
        setExperienceFreeData: (state, action) => {
            state.experienceFreeData = action.payload;
        },
        addExperienceFreeEntry: (state) => {
            state.experienceFreeData.push({});
        },
        updateExperienceFreeEntry: (state, action) => {
            const { index, field, value } = action.payload;
            state.experienceFreeData[index] = {
                ...state.experienceFreeData[index],
                [field]: value,
            };
        },
        deleteExperienceFreeEntry: (state, action) => {
            const { index } = action.payload;
            state.experienceFreeData.splice(index, 1);
        },
    },
});

export const {
    setExperienceFreeData,
    addExperienceFreeEntry,
    updateExperienceFreeEntry,
    deleteExperienceFreeEntry,
} = experienceFreeSlice.actions;

export default experienceFreeSlice.reducer;

export const selectExperience = (state: RootState) => state.experience;





