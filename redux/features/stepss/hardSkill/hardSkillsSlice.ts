import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  selectedValues: ['React.js'],
  contentOptionSelect: [
    { value: 'React.js', label: 'React.js' },
    { value: 'Node', label: 'Node' },
    { value: 'Python', label: 'Python' },
  ],
  MAX_COUNT: 5,

};

const hardSkillsSlice = createSlice({
  name: 'hardSkills',
  initialState,
  reducers: {
    setHardSkillsData: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    addHardSkillsEntry: (state, action) => {
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
    updateHardSkillsEntry: (state, action) => {
      // Implement logic for updating an entry if needed
      return state;
    },
    deleteHardSkillsEntry: (state, action) => {
      // Implement logic for deleting an entry if needed
      return state;
    },
  },
});

export const {
  setHardSkillsData,
  addHardSkillsEntry,
  updateHardSkillsEntry,
  deleteHardSkillsEntry,
} = hardSkillsSlice.actions;

export default hardSkillsSlice.reducer;