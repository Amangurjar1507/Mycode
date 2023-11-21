import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import screenName from '../screenName';
import BottomTab from './BottomTab';
import {StackNavigationProp} from '@react-navigation/stack';
 
const Tab = createBottomTabNavigator();
export type BottomParams = {
  notification: undefined;
  home: undefined;
  editProfile: undefined;
  productsStack: undefined;
};

export type BottomNavigationProps = StackNavigationProp<BottomParams>;
const BottomTabNav: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      // initialRouteName={screenName.login}
      tabBar={props => <BottomTab {...props} />}>
      {/* <Tab.Screen name={screenName.login} component={Login} /> */}
    </Tab.Navigator>
  );
};

export default BottomTabNav;
