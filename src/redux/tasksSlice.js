import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchQuote } from '../service/api';

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