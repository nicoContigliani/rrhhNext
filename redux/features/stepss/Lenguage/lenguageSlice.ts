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
    addLenguageEntry: (state,action) => {
      const newEntry = action.payload; // Assuming correct payload structure

      // Check for existing entry with the same `value` (optional)
      const existingEntryIndex = state.contentOptionSelect.findIndex(
        (option) => option.value === newEntry.value
      );

      // Handle maximum limit (optional)
      if (state.contentOptionSelect.length >= state.MAX_COUNT) {
        // Logic to remove older entries if needed
      }

      // Update state using concat or spread operator
      return {
        ...state,
        contentOptionSelect: existingEntryIndex !== -1
          ? // Update existing entry if found
            state.contentOptionSelect.map((option, index) =>
              index === existingEntryIndex ? newEntry : option
            )
          : // Add new entry if not found
            state.contentOptionSelect.concat(newEntry),
      };
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