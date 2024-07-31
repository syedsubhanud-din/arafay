import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {IP_ADDRESS} from '../../config/constants';
import axios from 'axios';

const state = {
  loading: false,
  MasjidsDetails: [],
  error: null,
};

// Create async thunk for getAllMasjidDetails
export const getAllMasjidDetails = createAsyncThunk(
  'get/masjidDetails',
  async (coords, thunkAPI) => {
    const {myLong, myLat} = coords;
    try {
      const response = await axios.get(
        `http://${IP_ADDRESS}:3000/api/nearby?latitude=${myLat}&longitude=${myLong}&radius=5000`,
      );
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
    // logout: state => {
    //   //   state.error = null;
    //   return state;
    // },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllMasjidDetails.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllMasjidDetails.fulfilled, (state, action) => {
        state.MasjidsDetails = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getAllMasjidDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// export const {logout} = MasjidDataSlice.actions;
export default MasjidDataSlice.reducer;
