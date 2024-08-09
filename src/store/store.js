import {configureStore} from '@reduxjs/toolkit';
import getUserDataSlice from './Slices/UserDataSlice';
import MasjidDataSlice from './Slices/MasjidDataSlice';
import claimUserData from './Slices/ClaimUserSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedUser = persistReducer(persistConfig, getUserDataSlice);

export const store = configureStore({
  reducer: {
    UserInfo: getUserDataSlice,
    // UserInfo: persistedUser,
    masjidSlice: MasjidDataSlice,
    claimSlice: claimUserData,
  },
  // middleware: [thunk],
});

// export const persistor = persistStore(store);
