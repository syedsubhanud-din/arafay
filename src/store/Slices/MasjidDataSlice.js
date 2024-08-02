import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {BASE_URL, IP_ADDRESS} from '../../config/constants';
import axios from 'axios';

const state = {
  loading: false,
  MasjidsDetails: [],
  specificMasjidDetails: {},
  error: null,
};

// Create async thunk for getAllMasjidDetails
export const getAllMasjidDetails = createAsyncThunk(
  'get/allMasjidDetails',
  async (coords, thunkAPI) => {
    const {myLong, myLat} = coords;
    try {
      // const response = await axios.get(
      //   `http://${IP_ADDRESS}:3000/api/nearby?latitude=${myLat}&longitude=${myLong}&radius=5000`,
      // );
      const response = await axios.get(
        `${BASE_URL}/api/nearby?latitude=${myLat}&longitude=${myLong}&radius=5000`,
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

// Create async thunk for getAllMasjidDetails
export const getSpecificMasjidDetails = createAsyncThunk(
  'get/specificMasjidDetails',
  async (id, thunkAPI) => {
    try {
      // const response = await axios.get(
      //   `http://${IP_ADDRESS}:3000/api/timings?id=${id}`,
      // );
      const response = await axios.get(`${BASE_URL}/api/timings?id=${id}`);
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
      })
      .addCase(getSpecificMasjidDetails.pending, state => {
        // state.loading = true;
        state.error = null;
      })
      .addCase(getSpecificMasjidDetails.fulfilled, (state, action) => {
        state.specificMasjidDetails = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getSpecificMasjidDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// export const {logout} = MasjidDataSlice.actions;
export default MasjidDataSlice.reducer;
