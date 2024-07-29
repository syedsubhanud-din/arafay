import {configureStore} from '@reduxjs/toolkit';
import getMasjidDataSlice from './Slices/getMasjidDataSlice';
import getUserDataSlice from './Slices/UserDataSlice';

const store = configureStore({
  reducer: {
    masjidInfo: getMasjidDataSlice,
    UserInfo: getUserDataSlice,
  },
});

export default store;
