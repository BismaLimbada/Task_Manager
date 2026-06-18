import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fetchQuote } from '../service/api';

const STORAGE_KEY = '@sync_task_manager_tasks';

// Boot Thunk: Reads task structures directly from local storage during startup
export const loadTasks = createAsyncThunk('tasks/load', async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.error('Error reading hardware storage disk:', error);
    return [];
  }
});

// Live Network Thunk: Pulls dynamic quotes from ZenQuotes
export const loadDailyQuote = createAsyncThunk('tasks/fetchQuote', async () => {
  return await fetchQuote();
});

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: { 
    items: [], 
    quote: '', 
    author: '',
    loadingQuote: false 
  },
  reducers: {
    addTask: (state, action) => {
      state.items.push(action.payload);
    },
    updateTask: (state, action) => {
    const index = state.items.findIndex((item) => item.id === action.payload.id);
    if (index !== -1) {
      state.items[index] = { ...state.items[index], ...action.payload };
    }
  },
    deleteTask: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    toggleTaskCompletion: (state, action) => {
      const task = state.items.find((item) => item.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    updateTask: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = { ...state.items[index], ...action.payload };
      }
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle local disk extraction
      .addCase(loadTasks.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      // Handle cloud REST endpoints
      .addCase(loadDailyQuote.pending, (state) => {
        state.loadingQuote = true;
      })
      .addCase(loadDailyQuote.fulfilled, (state, action) => {
        state.quote = action.payload.q;
        state.author = action.payload.a;
        state.loadingQuote = false;
      })
      .addCase(loadDailyQuote.rejected, (state) => {
        state.quote = 'Stay focused and keep syncing.';
        state.author = 'Sync Task';
        state.loadingQuote = false;
      });
  },
});

export const { addTask, deleteTask, toggleTaskCompletion, updateTask } = tasksSlice.actions;
export default tasksSlice.reducer;