import {configureStore} from '@reduxjs/toolkit';
import getMasjidDataSlice from './Slices/getMasjidDataSlice';
import getUserDataSlice from './Slices/UserDataSlice';
import MasjidDataSlice from './Slices/MasjidDataSlice';

const store = configureStore({
  reducer: {
    masjidInfo: getMasjidDataSlice,
    UserInfo: getUserDataSlice,
    masjidDetails: MasjidDataSlice,
  },
});

export default store;
