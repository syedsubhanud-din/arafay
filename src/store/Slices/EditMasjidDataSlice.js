import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {
  BASE_URL,
  HOME_URL,
  IP_ADDRESS,
  OFFICE_URL,
} from '../../config/constants';
import axios from 'axios';

const state = {
  loading: false,
  MasjidsDetails: [],
  specificMasjidDetails: {},
  error: null,
  searchCoords: null,
};

// Create async thunk for getAllMasjidDetails
// export const getSpecificMasjidDetails = createAsyncThunk(
//   'get/specificMasjidDetails',
//   async (id, thunkAPI) => {
//     try {
//       const response = await axios.get(`${OFFICE_URL}/api/timings?id=${id}`);
//       // const response = await axios.get(`${HOME_URL}/api/timings?id=${id}`);
//       // const response = await axios.get(`${BASE_URL}/api/timings?id=${id}`);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   },
// );

export const editSpecificMasjidDetails = createAsyncThunk(
  'get/specificMasjidDetails',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`${OFFICE_URL}/api/timings?id=${id}`);
      // const response = await axios.get(`${HOME_URL}/api/timings?id=${id}`);
      // const response = await axios.get(`${BASE_URL}/api/timings?id=${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const EditMasjidDataSlice = createSlice({
  name: 'EditMasjidDetails',
  initialState: state,
  reducers: {
    // searchPlace: (state, action) => {
    //   console.log(action.payload);
    //   state.searchCoords = action.payload;
    //   // return state;
    // },
  },
  extraReducers: builder => {
    builder
      .addCase(EditMasjidDataSlice.pending, state => {
        // state.loading = true;
        // state.error = null;
      })
      .addCase(EditMasjidDataSlice.fulfilled, (state, action) => {
        state.MasjidsDetails = action.payload;
        // state.loading = false;
        // state.error = null;
      })
      .addCase(EditMasjidDataSlice.rejected, (state, action) => {
        // state.loading = false;
        // state.error = action.payload;
      })
  },
});

// export const {searchPlace} = EditMasjidDataSlice.actions;
export default EditMasjidDataSlice.reducer;
