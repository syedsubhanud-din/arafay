import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {BASE_URL, IP_ADDRESS} from '../../config/constants';
import axios from 'axios';
import {ToastAndroid} from 'react-native';
const state = {
  isLoggedIn: false,
  user: null,
  token: null,
  error: null,
};

// Create async thunk for login
export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    const {phone_number, password} = credentials;
    console.log('Credentials', credentials);
    try {
      // const response = await axios.get(
      //   `http://${IP_ADDRESS}:3000/api/auth/login?phone_number=${phone_number}&password=${password}`,
      // );
      const response = await axios.get(
        `${BASE_URL}/api/auth/login?phone_number=${phone_number}&password=${password}`,
      );
      ToastAndroid.show('Login successful!', ToastAndroid.LONG);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    const {name, phone_number, password, email, setState} = credentials;
    console.log('Credentials', credentials);
    try {
      // const response = await axios.post(
      //   `http://${IP_ADDRESS}:3000/api/auth/register?name=${name}&phone_number=${phone_number}&password=${password}&email=${email}`,
      // );
      const response = await axios.post(
        `${BASE_URL}/api/auth/register?name=${name}&phone_number=${phone_number}&password=${password}&email=${email}`,
      );
      setState('login');
      ToastAndroid.show('Successfully Signed up!', ToastAndroid.LONG);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const getUserData = createSlice({
  name: 'GetUserData',
  initialState: state,
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
        console.log(action.payload);
        const {user, token} = action.payload;
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
