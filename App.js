import 'react-native-gesture-handler'; // <-- MUST BE AT THE VERY TOP
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { loadTasksFromStorage } from './src/redux/tasksSlice';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  // Dispatches the background AsyncStorage loader right as the app mounts
  useEffect(() => {
    store.dispatch(loadTasksFromStorage());
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}