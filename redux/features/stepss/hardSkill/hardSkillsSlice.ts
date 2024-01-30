import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  selectedValues: ['React.js'],
  contentOptionSelect: [
    { value: 'React.js', label: 'React.js' },
    { value: 'Node', label: 'Node' },
    { value: 'Python', label: 'Python' },
  ],
  MAX_COUNT: 3,

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
    addHardSkillsEntry: (state) => {
      // Implement logic for adding a new entry if needed
      return state;
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