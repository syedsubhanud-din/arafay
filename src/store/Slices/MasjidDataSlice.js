import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {IP_ADDRESS} from '../../config/constants';
import axios from 'axios';

const state = {
  MasjidDetails: [],
};

export const getMasjidDetails = createAsyncThunk(
  'get/masjidDetails',
  async (latLong, thunkAPI) => {
    console.log('latLong', latLong);
    try {
      const response = await axios.get(
        `http://${IP_ADDRESS}:3000/api/nearby?latitude=24.8270&longitude=67.0251&radius=5000`,
      );
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const MasjidDataSlice = createSlice({
  name: 'MasjidDetails',
  initialState: state,
  reducers: {
    logout: state => {
      //   state.error = null;
      return state;
    },
  },
  extraReducers: builder => {
    builder;
    //   .addCase(login.pending, state => {
    //     // state.error = null;
    //   })
    //   .addCase(login.fulfilled, (state, action) => {
    //     // console.log(action.payload);
    //     // const {user, token} = action.payload;
    //     // state.masjidDetails = user;
    //     // state.token = token;
    //     // state.isLoggedIn = true;
    //     // console.log({...state});
    //   })
    //   .addCase(login.rejected, (state, action) => {
    //     // state.error = action.payload;
    //   });
  },
});

export const {logout} = MasjidDataSlice.actions;
export default MasjidDataSlice.reducer;
