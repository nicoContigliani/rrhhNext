import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import todoReducer from './features/todo-slice';
import authReducer from '@/redux/features/auth/authSlice'
import cvReducer from '@/redux/features/CV/cvSlice'
import personalInformationReducer from '@/redux/features/stepss/personalnformation/personalnformationSlice'
import educationReducer from '@/redux/features/stepss/education/educationSlice'
import experienceReducer from '@/redux/features/stepss/experience/experienceSlice'
import softSkillsReducer from '@/redux/features/stepss/softSkill/softSkillsSlice'
import hardSkillsReducer from '@/redux/features/stepss/hardSkill/hardSkillsSlice'
import lenguageReducer from '@/redux/features/stepss/Lenguage/lenguageSlice'
import disponibilityReducer from '@/redux/features/stepss/disponibility/disponibilitySlice'
import personalDescriptionReducer from '@/redux/features/stepss/personalDescription/personalDescriptionSlice'
import tittleCVReducer from '@/redux/features/stepss/tittleCV/tittleCVSlice'
import moduleSevicesReducer from '@/redux/features/modulesServices/moduleServicesSlice'

export const store = configureStore({
  reducer: {
    todoReducer,
    auth: authReducer,
    cv: cvReducer,
    personalInformation: personalInformationReducer,
    personalDescription: personalDescriptionReducer,
    education: educationReducer,
    experience: experienceReducer,
    softSkills: softSkillsReducer,
    hardSkills: hardSkillsReducer,
    lenguage: lenguageReducer,
    disponibility: disponibilityReducer,
    tittleCV:tittleCVReducer,
    moduleServices:moduleSevicesReducer

  },
});

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;