import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import filtersReducer from './features/filters/filtersSlice';
import tasksReducer from './features/tasks/taskSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
