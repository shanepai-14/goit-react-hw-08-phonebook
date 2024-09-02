import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../api/api';
export const signupUser = createAsyncThunk('auth/signup', async (userData) => {
    const response = await API.post('/users/signup', userData);
    localStorage.setItem('token', response.data.token); // Save token to localStorage
    return response.data;
  });
  
  // Log in an existing user
  export const loginUser = createAsyncThunk('auth/login', async (credentials) => {
    const response = await API.post('/users/login', credentials);
    localStorage.setItem('token', response.data.token); // Save token to localStorage
    return response.data;
  });
  
  // Log out the current user
  export const logoutUser = createAsyncThunk('auth/logout', async () => {
    await API.post('/users/logout');
    localStorage.removeItem('token'); // Remove token from localStorage
  });
  
  // Get information about the current user
  export const getCurrentUser = createAsyncThunk('auth/current', async () => {
    const response = await API.get('/users/current');
    return response.data;
  });

  const authSlice = createSlice({
    name: 'auth',
    initialState: {
      user: null,
      token: localStorage.getItem('token') || null, // Initialize token from localStorage
      isLoading: false,
      error: null,
    },
    reducers: {
      clearError(state) {
        state.error = null;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(signupUser.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(signupUser.fulfilled, (state, action) => {
          state.isLoading = false;
          state.user = action.payload.user;
          state.token = action.payload.token;
        })
        .addCase(signupUser.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.error.message;
        })
        .addCase(loginUser.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
          state.isLoading = false;
          state.user = action.payload.user;
          state.token = action.payload.token;
        })
        .addCase(loginUser.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.error.message;
        })
        .addCase(logoutUser.fulfilled, (state) => {
          state.user = null;
          state.token = null;
        })
        .addCase(getCurrentUser.fulfilled, (state, action) => {
          state.user = action.payload;
        });
    },
  });
  
  export const { clearError } = authSlice.actions;
  export default authSlice.reducer;