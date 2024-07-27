import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
const state = {
  isLoggedIn: false,
  user: null,
  token: null,
  loading: false,
  error: null,
};

// Create async thunk for login
export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    const {phone_number, password} = credentials;
    try {
      const response = await axios.post(
        `http://192.168.80.79:3000/api/auth/login?phone_number=${phone_number}&password=${password}`,
      );
      console.log(response.data)
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const getUserData = createSlice({
  name: 'UserData',
  initialState: state,
  reducers: {
    logout: state => {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(login.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = action.payload.isLoggedIn;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// export const {increment, decrement, incrementByAmount} = counterSlice.actions;
export const {logout} = getUserData.actions;
export default getUserData.reducer;
