import React, { FC } from 'react';
import { LogBox } from 'react-native';
import Route from './src/navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Store } from '@redux/store';
import persistStore from 'redux-persist/es/persistStore';
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead',
]);
LogBox.ignoreAllLogs();
let persistor = persistStore(Store);

const App: FC = () => {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <Route />
      </PersistGate>
    </Provider>
  )
};
export default App;