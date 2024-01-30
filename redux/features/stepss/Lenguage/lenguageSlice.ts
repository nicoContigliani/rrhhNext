import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  selectedValues: ['Englis'],
  contentOptionSelect: [
    { value: 'English', label: 'English' },
    { value: 'letonian', label: 'letonian' },
    { value: 'Spanish', label: 'Spanish' },
    { value: 'French', label: 'French' },
  ],
  MAX_COUNT: 3,

};

const lenguageSlice = createSlice({
  name: 'Lenguage',
  initialState,
  reducers: {
    setLenguageData: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    addLenguageEntry: (state) => {
      // Implement logic for adding a new entry if needed
      return state;
    },
    updateLenguageEntry: (state, action) => {
      // Implement logic for updating an entry if needed
      return state;
    },
    deleteLenguageEntry: (state, action) => {
      // Implement logic for deleting an entry if needed
      return state;
    },
  },
});

export const {
  setLenguageData,
  addLenguageEntry,
  updateLenguageEntry,
  deleteLenguageEntry,
} = lenguageSlice.actions;

export default lenguageSlice.reducer;