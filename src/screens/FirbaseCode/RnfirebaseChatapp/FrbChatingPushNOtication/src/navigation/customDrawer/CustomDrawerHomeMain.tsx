import React, {FC} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawerHome from './CustomDrawerHome';
import HomeBottomTabs from '../bottomTabs/homeBottomTabs/HomeBottomTabs';

const Drawer = createDrawerNavigator();

const HomeDrawerCustom: FC = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerHome {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="HomeBottomTabs" component={HomeBottomTabs} />
    </Drawer.Navigator>
  );
};

export default HomeDrawerCustom;
