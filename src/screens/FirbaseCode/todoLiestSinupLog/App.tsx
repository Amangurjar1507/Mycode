 

  import React from 'react'
  import {LogBox, PermissionsAndroid, Platform, Text} from 'react-native';

import Route from './src/navigation'
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);
LogBox.ignoreAllLogs();
 
 export default function App() {
   return (
      <Route/>
   )
 }

