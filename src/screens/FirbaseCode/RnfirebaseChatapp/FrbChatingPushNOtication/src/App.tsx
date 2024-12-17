import React from 'react';
import {LogBox} from 'react-native';
import Route from './src/navigation';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

LogBox.ignoreAllLogs();

// <uses-permission android:name="android.permission.POST_NOTIFICATIONS" />
// <uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED" />
// <uses-permission android:name="android.permission.READ_MEDIA_IMAGES" />
// <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"  />
// <uses-permission android:name="android.permission.READ_MEDIA_IMAGES"/>

const App = () => {
  return <Route />;
};

export default App;
