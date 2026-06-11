import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import AddTaskScreen from '../screens/AddTaskScreen';
import CompletedScreen from '../screens/CompletedScreen';
import ProfileScreen from '../screens/ProfileScreen';
import TaskDetailScreen from '../screens/TaskDetailScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Custom component to display your brand icon inside navigation headers safely
const HeaderLogo = () => (
  <Image 
    source={require('../../assets/icon.png')} 
    style={styles.headerLogoImage}
    resizeMode="contain"
  />
);

function HomeStack() {
  return (
    <Stack.Navigator 
      screenOptions={{ 
        headerStyle: { 
          backgroundColor: '#ffdae6', // Your pastel pink background
          elevation: 0,               // Removes shadow on Android
          shadowOpacity: 0,           // Removes shadow on iOS
          borderBottomWidth: 0,       // Clean seamless look
        }, 
        headerTintColor: '#a366cc',   // Your custom brand purple
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen 
        name="SyncTaskHome" 
        component={HomeScreen} 
        options={{ 
          title: 'Sync Task',
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: '700',        // Makes it pop beautifully
            letterSpacing: 0.5,
            fontFamily: 'System',     // Keeps it clean and native across iOS/Android
            color: '#a366cc',
          }
        }} 
      />
      <Stack.Screen 
        name="AddTask" 
        component={AddTaskScreen} 
        options={{ title: 'Create New Task' }} 
      />
      <Stack.Screen 
        name="TaskDetail" 
        component={TaskDetailScreen} 
        options={{ title: 'Task Details' }} 
      />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Tab.Navigator 
      screenOptions={{ 
        tabBarActiveTintColor: '#a366cc',
        tabBarInactiveTintColor: '#b38ecc',
        tabBarStyle: { backgroundColor: '#fff', borderTopWidth: 1, borderTopColor: '#ffdae6' }
      }}
    >
      <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false, tabBarLabel: 'Tasks' }} />
      <Tab.Screen name="Completed Tasks" component={CompletedScreen} options={{ headerStyle: { backgroundColor: '#ffdae6' }, headerTintColor: '#a366cc' }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerStyle: { backgroundColor: '#ffdae6' }, headerTintColor: '#a366cc', title: 'About Developers' }} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  headerLogoImage: {
    width: 100,
    height: 40,
  },
});