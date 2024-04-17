import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/auth/login/Login';
 import HomeScreen from '../screens/HomeScreen';
import auth from '@react-native-firebase/auth';
import Signup from '../screens/auth/sinup/sinup';

const Stack = createNativeStackNavigator();

function Route() {
  const [user, setUser] = useState(null); // Initialize user state

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(newUser => {
      console.log("User state changed", newUser);
      setUser(newUser);
    });

    // Clean up subscription on unmount
    return unsubscribe;
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          cardOverlayEnabled: true,
          headerShown: false,
        }}
      >
        {!user ? (
           <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Sinup" component={Signup} />
          </>
        ) : (
           <Stack.Screen name="Home" component={HomeScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Route;
