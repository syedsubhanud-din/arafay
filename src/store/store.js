import { configureStore } from '@reduxjs/toolkit';
import getMasjidDataSlice from './getMasjidDataSlice';
import getUserDataSlice from './getUserDataSlice';

const store = configureStore({
  reducer: {
    masjidInfo: getMasjidDataSlice,
    UserInfo: getUserDataSlice,
  },
});

export default store;