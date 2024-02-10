import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  selectedValues: ['god man'],
  contentOptionSelect: [
    { value: 'God Man', label: 'God Man' },
    { value: 'Leadership', label: 'Leadership' },
    { value: 'Conflict resolution', label: 'Conflict resolution' },
    { value: 'Interpersonal relationships', label: 'Interpersonal relationships' },
    { value: 'Collaboration', label: 'Collaboration' },
    { value: 'Problem-solving and critical thinking', label: 'Problem-solving and critical thinking' },
    { value: 'Critical thinking', label: 'Critical thinking' },
    { value: 'Creativity', label: 'Creativity' },
    { value: 'Problem-solving', label: 'Problem-solving' },
    { value: 'Adaptability', label: 'Adaptability' },
    { value: 'Resilience', label: 'Resilience' },
    { value: 'Self-management', label: 'Self-management' },
    { value: 'Time management', label: 'Time management' },
    { value: 'Motivation', label: 'Motivation' },
    { value: 'Stress management', label: 'Stress management' },
    { value: 'Organization', label: 'Organization' },
    { value: 'Initiative', label: 'Initiative' }
  ],
  MAX_COUNT: 5,

};

const softSkillsSlice = createSlice({
  name: 'softSkills',
  initialState,
  reducers: {
    setSoftSkillsData: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    addSoftSkillsEntry: (state, action) => {
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
    updateSoftSkillsEntry: (state, action) => {
      // Implement logic for updating an entry if needed
      return state;
    },
    deleteSoftSkillsEntry: (state, action) => {
      // Implement logic for deleting an entry if needed
      return state;
    },
  },
});

export const {
  setSoftSkillsData,
  addSoftSkillsEntry,
  updateSoftSkillsEntry,
  deleteSoftSkillsEntry,
} = softSkillsSlice.actions;

export default softSkillsSlice.reducer;