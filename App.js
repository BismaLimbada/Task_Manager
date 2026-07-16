import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
// 1. Import PersistGate and your new persistor
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux/store';
import AppNavigator from './src/navigation/AppNavigator';
// 2. loadTasks is gone, so we only import loadDailyQuote
import { loadDailyQuote } from './src/redux/tasksSlice';

export default function App() {
  useEffect(() => {
    store.dispatch(loadDailyQuote());
  }, []);

  return (
    <Provider store={store}>
      {/* 3. Wrap NavigationContainer in PersistGate */}
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}