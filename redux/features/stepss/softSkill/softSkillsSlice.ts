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
};

export const fetchSoftSkills = createAsyncThunk(
  'softSkills/fetchSoftSkills',
  async () => {
    return initialState;
  }
);

export const saveSoftSkills = createAsyncThunk(
  'softSkills/saveSoftSkills',
  async (selectedValues) => {
    // Perform saving logic (e.g., send to API, store in local storage)
    console.log('Saved data:', selectedValues);
  }
);

const softSkillsSlice = createSlice({
  name: 'softSkills',
  initialState,
  reducers: {
    setSelectedValues: (state, action) => {
      state.selectedValues = action.payload;
    },
    setContentOptionSelect: (state, action) => {
      state.contentOptionSelect = action.payload;
    },
    addSoftSkillOption: (state, action) => {
      state.contentOptionSelect.push(action?.payload);
      state.selectedValues.push(action.payload.value);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSoftSkills.fulfilled, (state, action) => {
        state.selectedValues = action.payload.selectedValues;
        state.contentOptionSelect = action.payload.contentOptionSelect;
      })
      .addCase(saveSoftSkills.fulfilled, (state) => {
      });
  },
});

export const { setSelectedValues, setContentOptionSelect, addSoftSkillOption } =
  softSkillsSlice.actions;

export default softSkillsSlice.reducer;