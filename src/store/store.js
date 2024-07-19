import { configureStore } from '@reduxjs/toolkit';
import getMasjidDataSlice from './getMasjidDataSlice';

const store = configureStore({
  reducer: {
    masjidInfo: getMasjidDataSlice,
  },
});

export default store;