import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import MainScreen from '../screens/MainScreen';
import HomeScreen from '../screens/HomeScreen';
import AddTaskScreen from '../screens/AddTaskScreen';
import CompletedScreen from '../screens/CompletedScreen';
import ProfileScreen from '../screens/ProfileScreen';
import TaskDetailScreen from '../screens/TaskDetailScreen';

const RootStack = createStackNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


// HOME STACK
function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ffdae6',
          height: 120,
        },
        headerTintColor: '#5e2783',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 28,
        },
      }}
    >
      <Stack.Screen
        name="SyncTaskHome"
        component={HomeScreen}
        options={{
          title: 'My Tasks',
        }}
      />

      <Stack.Screen
        name="AddTask"
        component={AddTaskScreen}
        options={{
          title: 'Add Task',
        }}
      />

      <Stack.Screen
        name="TaskDetail"
        component={TaskDetailScreen}
        options={{
          title: 'Task Details',
        }}
      />
    </Stack.Navigator>
  );
}


// BOTTOM TABS
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#a366cc',
        tabBarInactiveTintColor: '#b38ecc',
        tabBarStyle: {
          backgroundColor: '#ffdae6',
          borderTopWidth: 1,
          borderTopColor: '#ffdae6',
          height: 95,
          paddingBottom: 14,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Tasks',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="notebook-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Completed Tasks"
        component={CompletedScreen}
        options={{
          headerStyle: {
            backgroundColor: '#ffdae6',
            height: 120,
          },
          headerTintColor: '#5e2783',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 28,
          },
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="check-decagram-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'About Developers',
          headerStyle: {
            backgroundColor: '#ffdae6',
            height: 120,
          },
          headerTintColor: '#5e2783',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 28,
          },
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-supervisor-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}


// ROOT NAVIGATOR
export default function AppNavigator() {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen
        name="Main"
        component={MainScreen}
      />

      <RootStack.Screen
        name="HomeTabs"
        component={TabNavigator}
      />
    </RootStack.Navigator>
  );
}