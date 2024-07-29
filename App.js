import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import {Provider} from 'react-redux';
import store from './src/store/store';
import {PersistGate} from 'redux-persist/integration/react';
import ToastManager from 'toastify-react-native';

function App() {
  return (
    <Provider store={store}>
      <ToastManager />
      <AppNavigator />
    </Provider>
  );
}

export default App;
