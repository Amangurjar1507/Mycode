import React, {memo} from 'react';
import {StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import screenName from '../screenName';
import CustomMyTopTab from './TopTabNav';
import Login from '../../screens/auth/login/Login';

const Top = createMaterialTopTabNavigator();

const AvailabilityTopTab = props => {
  return (
    <Top.Navigator tabBar={props => <CustomMyTopTab {...props} />}>
      <Top.Screen
        name={screenName.login}
        component={Login}
        // options={{
        //   tabBarLabel: ({focused}) => (
        //     <TopTabCard focused={focused} lableName={'My Availability'} />
        //   ),
        // }}
      />
    </Top.Navigator>
  );
};

export default memo(AvailabilityTopTab);
const styles = StyleSheet.create({
  tabBar: {
    width: '100%',
    backgroundColor: 'green',
  },
});
