import { configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import taskReducer from './tasksSlice';

const STORAGE_KEY = '@sync_task_manager_tasks';

// Custom Middleware to auto-save tasks collection to hardware disk upon any state change
const persistentStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  
  // Intercept any task slice mutations to record immediate changes
  if (action.type.startsWith('tasks/')) {
    const currentState = store.getState();
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(currentState.tasks.items)).catch((err) =>
      console.error('Failed to auto-save tasks to disk:', err)
    );
  }
  
  return result;
};

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(persistentStorageMiddleware),
});