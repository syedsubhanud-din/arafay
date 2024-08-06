import {configureStore} from '@reduxjs/toolkit';
import getUserDataSlice from './Slices/UserDataSlice';
import MasjidDataSlice from './Slices/MasjidDataSlice';
import claimUserData from './Slices/ClaimUserSlice';
import EditMasjidDataSlice from './Slices/EditMasjidDataSlice';

const store = configureStore({
  reducer: {
    UserInfo: getUserDataSlice,
    masjidSlice: MasjidDataSlice,
    claimSlice: claimUserData,
    editMasjidSlice: EditMasjidDataSlice,
  },
});

export default store;
