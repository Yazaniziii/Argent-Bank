import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  user: {
    id: '',
    email: '',
    firstName: '',
    lastName: '',
    token: localStorage.getItem('token') || '',
  },
  status: 'idle',
  error: null,
};

if (initialState.user.token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${initialState.user.token}`;
}

export const loginUser = createAsyncThunk('user/loginUser', async (userCredentials) => {
  const response = await axios.post('http://localhost:3001/api/v1/user/login', userCredentials);
  return response.data.body;
});

export const fetchUserProfile = createAsyncThunk('user/fetchUserProfile', async () => {
  const response = await axios.post('http://localhost:3001/api/v1/user/profile');
  return response.data.body;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logoutUser(state) {
      state.user = {
        id: '',
        email: '',
        firstName: '',
        lastName: '',
        token: '',
      };
      localStorage.removeItem('token');
      delete axios.defaults.headers.common['Authorization'];
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
        localStorage.setItem('token', action.payload.token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload.token}`;
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
