import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  selectedValues: ['8:00 - 13:00'],
  contentOptionSelect: [
    { value: '8:00 a 13:00', label: '8:00 a 13:00' },
    { value: '8:00 a 17:00', label: '8:00 a 13:00' },
    { value: '13:00 a 22:00', label: '13:00 a 22:00' },
  ],
  MAX_COUNT: 3,

};

const disponibilitySlice = createSlice({
  name: 'disponibility',
  initialState,
  reducers: {
    setDisponibilityData: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    addDisponibilityEntry: (state) => {
      // Implement logic for adding a new entry if needed
      return state;
    },
    updateDisponibilityEntry: (state, action) => {
      // Implement logic for updating an entry if needed
      return state;
    },
    deleteDisponibilityEntry: (state, action) => {
      // Implement logic for deleting an entry if needed
      return state;
    },
  },
});

export const {
  setDisponibilityData,
  addDisponibilityEntry,
  updateDisponibilityEntry,
  deleteDisponibilityEntry,
} = disponibilitySlice.actions;

export default disponibilitySlice.reducer;