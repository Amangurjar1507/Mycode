import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React, { FC } from 'react';
import CustomHomeBottomTabs from './CustomHomeBottomTabs';
import { homeBottomTabs } from './homeBottomTabs.const';

const Tab = createBottomTabNavigator();
export type BottomTabStackParamList = {
  MyPrograms: undefined;
  Financials: undefined;
  Analytics: undefined;
  MyProfile: undefined;
  Settings: undefined;
};
export type BottomTabNavigationProps =
  BottomTabNavigationProp<BottomTabStackParamList>;

interface HomeBottomTabsProps {
  navigation: BottomTabNavigationProps;
  route: { params: { userType: number } } | any;
}

const HomeBottomTabs: FC<HomeBottomTabsProps> = ({ route }: any) => {
  const userType = 0
  const initialRoute = userType === 0 ? 'MyPrograms' : 'MarketPlace';
  return (
    <Tab.Navigator
      tabBar={(props: any) => (
        <CustomHomeBottomTabs {...props} type={userType} />
      )}
      initialRouteName={initialRoute}
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}>
      {homeBottomTabs?.map(item => (
        <Tab.Screen
          key={item?.id}
          name={item?.name}
          component={item?.component}
          options={{ unmountOnBlur: true }}
        />
      ))}
    </Tab.Navigator>
  );
};
export default HomeBottomTabs;
