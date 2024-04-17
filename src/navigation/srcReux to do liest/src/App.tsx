// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import AddUserScreen from './src/screens/AddUserScreen'
// import UserScreen from './src/screens/UserScreen';
// import UserDetailScreen from './src/screens/UserDetailScreen';

// const Stack = createStackNavigator();

// const MyStack = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerStyle: {
//           backgroundColor: '#621FF7',
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//           fontWeight: 'bold',
//         },
//       }}
//     >
//       <Stack.Screen 
//         name="AddUserScreen" 
//         component={AddUserScreen} 
//         options={{ title: 'Add User' }}
//       />
//       <Stack.Screen 
//         name="UserScreen" 
//         component={UserScreen} 
//         options={{ title: 'Users List' }}
//       />
//       <Stack.Screen 
//         name="UserDetailScreen" 
//         component={UserDetailScreen} 
//         options={{ title: 'User Detail' }}
//       />
//     </Stack.Navigator>
//   );
// };

// const App = () => {
//   return (
//     <NavigationContainer>
//       <MyStack />
//     </NavigationContainer>
//   );
// };

// export default App;

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

