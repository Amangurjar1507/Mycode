import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Userlist from './src/screens/Userlist';
import Adduser from './src/screens/Adduser';
// import store, { persistor } from './src/redux/Store';
import { Provider } from 'react-redux';
import store, { persistor } from './src/redux/Store';
import { PersistGate } from 'redux-persist/integration/react';
// import { PersistGate } from 'redux-persist/integration/react';
// import Store from './src/redux/Store';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Userlist'>
            <Stack.Screen name="Userlist" component={Userlist} />
            <Stack.Screen name="Adduser" component={Adduser} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})