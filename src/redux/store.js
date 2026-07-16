import { configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import taskReducer from './tasksSlice';

// Configure how redux-persist connects to AsyncStorage
const persistConfig = {
  key: 'sync_task_manager_tasks', // Your storage key
  storage: AsyncStorage,
};

// Wrap your existing reducer in the persistence engine
const persistedReducer = persistReducer(persistConfig, taskReducer);

export const store = configureStore({
  reducer: {
    tasks: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // Ignore redux-persist actions so they don't trigger serialization warnings
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Export the persistor so we can wrap the app with it
export const persistor = persistStore(store);