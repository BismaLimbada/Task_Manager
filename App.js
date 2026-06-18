import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { store } from './src/redux/store';
import AppNavigator from './src/navigation/AppNavigator';
import { loadTasks, loadDailyQuote } from './src/redux/tasksSlice';

export default function App() {
  useEffect(() => {
    store.dispatch(loadTasks());
    store.dispatch(loadDailyQuote());
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
}
