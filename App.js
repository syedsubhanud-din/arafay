import React, {useEffect} from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import {Provider, useDispatch} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import ToastManager from 'toastify-react-native';
import {persistor, store} from './src/store/store';
import { loadUserData } from './src/store/Slices/UserDataSlice';


// Component to handle user data loading
function LoadUserData() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Load user data when the app initializes
    dispatch(loadUserData());
  }, [dispatch]);

  return null;
}

function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   // Load user data when the app initializes
  //   dispatch(loadUserData());
  // }, [dispatch]);
  return (
    <Provider store={store}>
      {/* <ToastManager /> */}
      {/* <PersistGate loading={null} persistor={persistor}>
        <AppNavigator />
      </PersistGate> */}
      {/* <LoadUserData /> */}
      <AppNavigator />
    </Provider>
  );
}

export default App;
