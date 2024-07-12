import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginUser = createAsyncThunk('user/loginUser', async (userCredentials) => {
  const response = await axios.post('http://localhost:3001/api/v1/user/login', userCredentials);
  const token = response.data.body.token;
  localStorage.setItem('token', token);
  return { ...response.data.body, token };
});

export const fetchUserProfile = createAsyncThunk('user/fetchUserProfile', async (token) => {
  const response = await axios.post('http://localhost:3001/api/v1/user/profile', {}, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  return response.data.body;
});

const initialState = {
  user: {
    id: '',
    email: '',
    firstName: '',
    lastName: '',
    token: '',
  },
  status: 'idle',
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logoutUser(state) {
      state.user = initialState.user; // Réinitialise l'utilisateur à l'état initial après la déconnexion
      localStorage.removeItem('token');
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchUserProfile.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = { ...state.user, ...action.payload };
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { logoutUser } = userSlice.actions;

export default userSlice.reducer;
