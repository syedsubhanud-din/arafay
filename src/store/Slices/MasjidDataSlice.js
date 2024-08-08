import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {
  BASE_URL,
  HOME_URL,
  IP_ADDRESS,
  OFFICE_URL,
} from '../../config/constants';
import axios from 'axios';
import { ToastAndroid } from 'react-native';

const state = {
  loading: false,
  MasjidsDetails: [],
  specificMasjidDetails: {},
  error: null,
  searchCoords: null,
};

// Create async thunk for getAllMasjidDetails
export const getAllMasjidDetails = createAsyncThunk(
  'get/allMasjidDetails',
  async (coords, thunkAPI) => {
    const {myLong, myLat} = coords;
    try {
      const response = await axios.get(
        `${OFFICE_URL}/api/nearby?latitude=${myLat}&longitude=${myLong}&radius=5000`,
      );
      // const response = await axios.get(
      //   `${HOME_URL}/api/nearby?latitude=${myLat}&longitude=${myLong}&radius=5000`,
      // );
      // const response = await axios.get(
      //   `${BASE_URL}/api/nearby?latitude=${myLat}&longitude=${myLong}&radius=5000`,
      // );
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
      const response = await axios.get(`${OFFICE_URL}/api/timings?id=${id}`);
      // const response = await axios.get(`${HOME_URL}/api/timings?id=${id}`);
      // const response = await axios.get(`${BASE_URL}/api/timings?id=${id}`);
      console.log("Redux Specific MAsjid" , response.data)
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

// Edit Specific Masjid Description
export const editSpecificMasjidDescription = createAsyncThunk(
  'put/specificMasjidDescription',
  async (data, thunkAPI) => {
    const {id, Description, token, user, resHandler} = data;
    // console.log('masjidId', id);
    // console.log('Description', Description);
    // console.log('Token', token);
    try {
      const response = await axios.put(
        `${OFFICE_URL}/api/masjid/${id}/description`,
        {
          description: Description,
          user: user,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            id: id,
          },
        },
      );
      ToastAndroid.show('Description Successfully Edited', ToastAndroid.LONG);
      // console.log(response.data);
      if(response.status === 200) {
        resHandler(response.data);
      }
      return response.data;
      // const response = await axios.get(`${HOME_URL}/api/timings?id=${id}`);
      // const response = await axios.get(`${BASE_URL}/api/timings?id=${id}`);
    } catch (error) {
      ToastAndroid.show(error.response.data.message, ToastAndroid.LONG);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const MasjidDataSlice = createSlice({
  name: 'MasjidDetails',
  initialState: state,
  reducers: {
    searchPlace: (state, action) => {
      console.log(action.payload);
      state.searchCoords = action.payload;
      // return state;
    },
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
      })
      .addCase(editSpecificMasjidDescription.pending, state => {
        // state.loading = true;
        // state.error = null;
      })
      .addCase(editSpecificMasjidDescription.fulfilled, (state, action) => {
        state.specificMasjidDetails.description = action.payload.description;
        // state.MasjidsDetails = action.payload;
        // state.loading = false;
        // state.error = null;
      })
      .addCase(editSpecificMasjidDescription.rejected, (state, action) => {
        // state.loading = false;
        // state.error = action.payload;
      });
  },
});

export const {searchPlace} = MasjidDataSlice.actions;
export default MasjidDataSlice.reducer;
