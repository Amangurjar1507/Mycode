import {
  MaterialTopTabNavigationProp,
  createMaterialTopTabNavigator,
} from '@react-navigation/material-top-tabs';
import {FC} from 'react';
import CustomAnalyticsTopTabs from './CustomAnalyticsTopTabs';
import {AnalyticsTopTab} from './analyticsTopTabs.const';

const Tab = createMaterialTopTabNavigator();
export type AnalyticsTopTabStackParamList = {
  FinancialManagement: undefined;
  ReferralManagement: undefined;
};
export type AnalyticsTopTabNavigationProps =
  MaterialTopTabNavigationProp<AnalyticsTopTabStackParamList>;

const AnalyticsTopTabs: FC = () => {
  return (
    <Tab.Navigator tabBar={props => <CustomAnalyticsTopTabs {...props} />}>
      {AnalyticsTopTab?.map((item: any) => (
        <Tab.Screen
          key={item?.id}
          name={item?.name}
          component={item?.component}
        />
      ))}
    </Tab.Navigator>
  );
};

export default AnalyticsTopTabs;
