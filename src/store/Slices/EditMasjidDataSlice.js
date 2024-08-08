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
  description: 'This is sample Description',
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

export const editSpecificMasjidDescription = createAsyncThunk(
  'put/specificMasjidDescription',
  async (data, thunkAPI) => {
    const {id, Description, token} = data;
    console.log('masjidId', id);
    console.log('Description', Description);
    console.log('Token', token);
    try {
      const response = await axios.put(
        `${OFFICE_URL}/api/masjid/${id}/description`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            description: Description, // sending as a URL parameter
          },
        },
      );
      ToastAndroid.show('Description Successfully Edited', ToastAndroid.LONG);
      console.log(response.data);
      return response.data;
      // const response = await axios.get(`${HOME_URL}/api/timings?id=${id}`);
      // const response = await axios.get(`${BASE_URL}/api/timings?id=${id}`);
    } catch (error) {
      ToastAndroid.show(error.response.data.message, ToastAndroid.LONG);
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
      .addCase(editSpecificMasjidDescription.pending, state => {
        // state.loading = true;
        // state.error = null;
      })
      .addCase(editSpecificMasjidDescription.fulfilled, (state, action) => {
        state.description = action.payload;
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

// export const {searchPlace} = EditMasjidDataSlice.actions;
export default EditMasjidDataSlice.reducer;
