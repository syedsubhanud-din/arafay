import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {
  BASE_URL,
  HOME_URL,
  IP_ADDRESS,
  OFFICE_URL,
} from '../../config/constants';
import axios from 'axios';
import {ToastAndroid} from 'react-native';
const state = {
  isLoggedIn: false,
  user: null,
  token: null,
  error: null,
};
const stateTesting = {
  error: null,
  isLoggedIn: true,
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiYzQzZDZiMDQtMzc5Yi00ZGY2LTgxM2MtZTc0YWExNzRiODg1IiwibmFtZSI6IlJhZmF5Iiwicm9sZSI6InVzZXIifSwiaWF0IjoxNzIyNzIyMzU5LCJleHAiOjMzMjQ4NzY0NzU5fQ.UJ3fQnPb7Yn4CABebf915-L2TRxrf1DDFUe8xi0rQFQ',
  user: {
    createdAt: '2024-08-03T21:58:53.000Z',
    email: 'arafay493@gmail.com',
    id: 'c43d6b04-379b-4df6-813c-e74aa174b885',
    name: 'Rafay',
    password: '$2b$10$8WssILK/zlZIe5W80oSSieajjLTOq.sdluTwZOYZk6JgIoy6dqqeK',
    phone_number: '+923173775920',
    role: 'owner',
    updatedAt: '2024-08-03T21:58:53.000Z',
  },
};

// Create async thunk for login
export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    const {phone_number, password} = credentials;
    // console.log('Credentials', credentials);
    try {
      const response = await axios.get(
        `${OFFICE_URL}/api/auth/login?phone_number=${phone_number}&password=${password}`,
      );
      // const response = await axios.get(
      //   `${HOME_URL}/api/auth/login?phone_number=${phone_number}&password=${password}`,
      // );
      // const response = await axios.get(
      //   `${BASE_URL}/api/auth/login?phone_number=${phone_number}&password=${password}`,
      // );
      ToastAndroid.show('Login successful!', ToastAndroid.LONG);
      return response.data;
    } catch (error) {
      ToastAndroid.show(error.response.data.error, ToastAndroid.LONG);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    const {name, phone_number, password, email, setState} = credentials;
    // console.log('Credentials', credentials);
    try {
      const response = await axios.post(
        `${OFFICE_URL}/api/auth/register?name=${name}&phone_number=${phone_number}&password=${password}&email=${email}`,
      );
      // const response = await axios.post(
      //   `${HOME_URL}/api/auth/register?name=${name}&phone_number=${phone_number}&password=${password}&email=${email}`,
      // );
      // const response = await axios.post(
      //   `${BASE_URL}/api/auth/register?name=${name}&phone_number=${phone_number}&password=${password}&email=${email}`,
      // );
      setState('login');
      ToastAndroid.show('Successfully Signed up!', ToastAndroid.LONG);
      return response.data;
    } catch (error) {
      ToastAndroid.show(error.response.data.message, ToastAndroid.LONG);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const getUserData = createSlice({
  name: 'GetUserData',
  initialState: state,
  // initialState: stateTesting,
  reducers: {
    logout: state => {
      state.error = null;
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(login.pending, state => {
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        // console.log(action.payload);
        const {user, token} = action.payload;
        // console.log("Redux Token" , token)
        state.user = user;
        state.token = token;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const {logout} = getUserData.actions;
export default getUserData.reducer;
