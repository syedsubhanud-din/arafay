import {configureStore} from '@reduxjs/toolkit';
import getUserDataSlice from './Slices/UserDataSlice';
import MasjidDataSlice from './Slices/MasjidDataSlice';
import claimUserData from './Slices/ClaimUserSlice';

const store = configureStore({
  reducer: {
    UserInfo: getUserDataSlice,
    masjidSlice: MasjidDataSlice,
    claimSlice: claimUserData,
  },
});

export default store;
