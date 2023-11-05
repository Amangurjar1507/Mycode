import React, {memo} from 'react';
import {StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
  
const Top = createMaterialTopTabNavigator();

const AvailabilityTopTab = props => {
  return (
    <Top.Navigator tabBar={props => <CustomMyTopTab {...props} />}>
      <Top.Screen
        // name={screenName.availabilitby}
        // component={screenName.lo}
        // options={{
        //   tabBarLabel: ({focused}) => (
        //     <TopTabCard focused={focused} lableName={'My Availability'} />
        //   ),
        // }}
      />
      <Top.Screen
        // name={utils.screenName.mySkils}
        // component={utils.navigationImport.mySkils}
        // // options={{
        //   tabBarLabel: ({focused}) => (
        //     <TopTabCard focused={focused} lableName={'My Skill'} />
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
    backgroundColor: uiConfig.colors.primary,
  },
});