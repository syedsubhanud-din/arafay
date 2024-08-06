import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {BASE_URL, IP_ADDRESS, OFFICE_URL} from '../../config/constants';
import axios from 'axios';
import {ToastAndroid} from 'react-native';
const state = {
  error: null,
  user: null,
};

export const claim = createAsyncThunk('user/claim', async (data, thunkAPI) => {
  console.log('data: ', data);
  const {masjidId, token, cnic, document} = data;
  const formData = new FormData();
  formData.append('cnic', cnic);
  formData.append('document', document);
  console.log(masjidId)

  try {
    const response = await axios.post(
      `${OFFICE_URL}/api/${masjidId}/claim`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
          // ...FormData.getHeaders(),
        },
      },
    );
    console.log('response', response.data);
    return response.data;
  } catch (error) {
    // console.log('error response', error.response.data.message);
    console.log('error response', error.response);

    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const claimUserData = createSlice({
  name: 'ClaimUserData',
  initialState: state,
  //   reducers: {
  //     logout: state => {
  //       state.error = null;
  //       state.user = null;
  //       state.token = null;
  //       state.isLoggedIn = false;
  //     },
  //   },
  extraReducers: builder => {
    builder
      .addCase(claim.pending, state => {
        // state.error = null;
      })
      .addCase(claim.fulfilled, (state, action) => {
        // console.log(action.payload);
        // const {user, token} = action.payload;
        // state.user = user;
        // state.token = token;
        // state.isLoggedIn = true;
      })
      .addCase(claim.rejected, (state, action) => {
        // state.error = action.payload;
      });
  },
});

export const {logout} = claimUserData.actions;
export default claimUserData.reducer;
