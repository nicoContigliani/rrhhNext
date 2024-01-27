import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import todoReducer from './features/todo-slice';
import authReducer from '@/redux/features/auth/authSlice'
import cvReducer from '@/redux/features/CV/cvSlice'
import personalInformationReducer from '@/redux/features/stepss/personalnformation/personalnformationSlice'
import educationReducer from '@/redux/features/stepss/education/educationSlice'
import experienceReducer from '@/redux/features/stepss/experience/experienceSlice'



export const store = configureStore({
  reducer: {
    todoReducer,
    auth: authReducer,
    cv: cvReducer,
    personalInformation: personalInformationReducer,
    education: educationReducer,
    experience: experienceReducer
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