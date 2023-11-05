import React, {useEffect} from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import Login from '../../screens/auth/login/login';
import screenName from '../screenName';
export type AuthParams = {
  Login: undefined;
};
const Stack = createStackNavigator();
export type AuthNavigationProps = StackNavigationProp<AuthParams>;
const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={screenName.login} component={Login} />
    </Stack.Navigator>
  );
};
export default AuthStack;
