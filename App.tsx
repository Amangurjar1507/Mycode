import {LogBox} from 'react-native';
import React, {useEffect} from 'react';
import Route from './src/navigation';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import store from './src/services/redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
// react-native-inappbrowser-reborn
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);
LogBox.ignoreAllLogs();
const App = () => {
  const persistStore = store();
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  });
  return (
    <Provider store={persistStore.store}>
      <PersistGate persistor={persistStore.persistor}>
        <Route />
      </PersistGate>
    </Provider>
  );
};

export default App;
