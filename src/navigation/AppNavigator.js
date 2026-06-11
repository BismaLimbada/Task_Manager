import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import our screens
import HomeScreen from '../screens/HomeScreen';
import TaskDetailScreen from '../screens/TaskDetailScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// 1. This Stack nested navigation handles going deeper into a task item
function TaskStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="HomeDashboard" 
        component={HomeScreen} 
        options={{ title: 'My Tasks' }} 
      />
      <Stack.Screen 
        name="TaskDetail" 
        component={TaskDetailScreen} 
        options={{ title: 'Task Details' }} 
      />
    </Stack.Navigator>
  );
}

// 2. Main Tab Navigator setup that houses the Task Flow and Profile View
export default function AppNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen 
        name="Tasks" 
        component={TaskStack} 
        options={{ tabBarLabel: 'Tasks Dashboard' }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{ headerShown: true, title: 'My Profile' }}
      />
    </Tab.Navigator>
  );
}