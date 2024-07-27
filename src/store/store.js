import { configureStore } from '@reduxjs/toolkit';
import getMasjidDataSlice from './Slices/getMasjidDataSlice';
import getUserDataSlice from './Slices/getUserDataSlice';

const store = configureStore({
  reducer: {
    masjidInfo: getMasjidDataSlice,
    UserInfo: getUserDataSlice,
  },
});

export default store;