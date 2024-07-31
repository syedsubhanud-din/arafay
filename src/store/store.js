import {configureStore} from '@reduxjs/toolkit';
import getUserDataSlice from './Slices/UserDataSlice';
import MasjidDataSlice from './Slices/MasjidDataSlice';

const store = configureStore({
  reducer: {
    UserInfo: getUserDataSlice,
    masjidSlice: MasjidDataSlice,
  },
});

export default store;
