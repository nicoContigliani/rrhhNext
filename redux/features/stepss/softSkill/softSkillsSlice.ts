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
  MAX_COUNT: 3,

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
    addSoftSkillsEntry: (state) => {
      // Implement logic for adding a new entry if needed
      return state;
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