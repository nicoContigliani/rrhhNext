import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import todoReducer from './features/todo-slice';
import authReducer from '@/redux/features/auth/authSlice'


export const store = configureStore({
  reducer: {
    todoReducer,
    auth: authReducer,
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