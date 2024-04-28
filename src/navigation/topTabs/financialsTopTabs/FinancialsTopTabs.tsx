import {
  MaterialTopTabNavigationProp,
  createMaterialTopTabNavigator,
} from '@react-navigation/material-top-tabs';
import React, {FC} from 'react';
import {financialsTopTabs} from './financialsTopTabs.const';

const Tab = createMaterialTopTabNavigator();
export type FinancialTopTabStackParamList = {
  FinancialManagement: undefined;
  ReferralManagement: undefined;
};
export type FinancialTopTabNavigationProps =
  MaterialTopTabNavigationProp<FinancialTopTabStackParamList>;

import CustomFinancialsTopTabs from './CustomFinancialsTopTabs';

const FinancialsTopTabs: FC = () => {
  return (
    <Tab.Navigator tabBar={props => <CustomFinancialsTopTabs {...props} />}>
      {financialsTopTabs?.map(item => (
        <Tab.Screen
          key={item?.id}
          name={item?.name}
          component={item?.component}
        />
      ))}
    </Tab.Navigator>
  );
};
export default FinancialsTopTabs;
