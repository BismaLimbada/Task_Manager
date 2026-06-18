import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ASYNC_STORAGE_KEY = '@task_manager_tasks';

// Asynchronous Thunk to fetch tasks from AsyncStorage on application start
export const loadTasksFromStorage = createAsyncThunk(
  'tasks/loadTasksFromStorage',
  async () => {
    try {
      const storedTasks = await AsyncStorage.getItem(ASYNC_STORAGE_KEY);
      if (storedTasks !== null) {
        return JSON.parse(storedTasks);
      }
      // Fallback to exact original mockup arrays if device storage is brand new
      return [
        { id: '1', title: 'Revise OS Lecture 3 Notes', description: 'Review processes and kernels', dueDate: 'June 18, 2026', priority: 'High', category: 'Study', completed: false },
        { id: '2', title: 'Design Task Manager Logo Frame', description: 'Create pastel design vectors', dueDate: 'June 20, 2026', priority: 'Medium', category: 'Work', completed: false },
        { id: '3', title: 'Buy pastel highlighters', description: 'Need soft color palettes', dueDate: 'June 22, 2026', priority: 'Low', category: 'Personal', completed: false },
      ];
    } catch (error) {
      console.error("Failed to load tasks from local storage:", error);
      return [];
    }
  }
);

// Helper function to handle background disk serialization writes
const saveTasksToStorage = async (tasksArray) => {
  try {
    await AsyncStorage.setItem(ASYNC_STORAGE_KEY, JSON.stringify(tasksArray));
  } catch (error) {
    console.error("Failed to save tasks to local storage:", error);
  }
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    loading: false,
  },
  reducers: {
    addTask: (state, action) => {
      state.items.push(action.payload);
      saveTasksToStorage(state.items);
    },
    toggleTaskCompletion: (state, action) => {
      const task = state.items.find(t => t.id === action.payload);
      if (task) {
        task.completed = !task.completed;
        saveTasksToStorage(state.items);
      }
    },
    deleteTask: (state, action) => {
      state.items = state.items.filter(t => t.id !== action.payload);
      saveTasksToStorage(state.items);
    },
    updateTask: (state, action) => {
      const index = state.items.findIndex(t => t.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
        saveTasksToStorage(state.items);
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadTasksFromStorage.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadTasksFromStorage.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(loadTasksFromStorage.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { addTask, toggleTaskCompletion, deleteTask, updateTask } = tasksSlice.actions;
export default tasksSlice.reducer;