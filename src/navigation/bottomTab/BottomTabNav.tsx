import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../../screens/home/home/Home';
import screenName from '../screenName';
import BottomTab from './BottomTab';
import {StackNavigationProp} from '@react-navigation/stack';
import EditProfile from '../../screens/home/editProfile/EditProfile';
import Notification from '../../screens/home/notification/Notification';
import ProductsStack from '../stacks/ProductsStack';

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
      initialRouteName={screenName.home}
      tabBar={props => <BottomTab {...props} />}>
      
      {/* <Tab.Screen name={screenName.notification} component={Notification} /> */}
    </Tab.Navigator>
  );
};

export default BottomTabNav;
