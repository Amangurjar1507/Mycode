import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import React, { FC } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Logout from '../../assets/svg/Logout';
import SmallHome from '../../assets/svg/SmallHome';
import SupportIcon from '../../assets/svg/SupportIcon';
import TernsIcon from '../../assets/svg/TernsIcon';
import User from '../../assets/svg/User';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { RootState } from '../../services/redux/store';
import { logoutSucces } from '../../services/redux/userReducer/reducer';
import { styles } from './customDrawerHome.style';

const CustomDrawerHome: FC<DrawerContentComponentProps> = ({
  state,
  navigation,
}) => {
  const {userData} = useAppSelector((state: RootState) => state.UserData);
  const dispatch = useAppDispatch();
  const drawerItems = [
    {
      icon: <SmallHome />,
      label: 'Home',
      screenName: 'Home',
    },
    {icon: <SupportIcon />, label: 'Support', screenName: 'Support'},
    {
      icon: <TernsIcon />,
      label: 'Terms and Conditions',
      screenName: 'TermsAndConditions',
    },
    {
      icon: <User />,
      label: 'Privacy Policy',
      screenName: 'PrivacyPolicy',
    },
    {
      icon: <Logout />,
      label: 'Log out',
      screenName: 'Logout',
    },
  ];

  const onPress = (screenName: string) => {
    if (screenName == 'Home') {
      navigation.reset({
        index: 0,
        routes: [{name: 'HomeDrawerCustom'}],
      });
    } else if (screenName == 'Logout') {
      dispatch(logoutSucces());
      navigation.reset({
        index: 0,
        routes: [{name: 'Login'}],
      });
    } else {
      navigation.navigate(screenName);
    }
  };

  return (
    <DrawerContentScrollView
      {...{state, navigation}}
      contentContainerStyle={{flex: 1, paddingTop: 0}}>
      <View style={styles.profileContainer}>
        <Image
          source={{uri: userData?.profile?.deliverymanImage}}
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <Text allowFontScaling={false} style={styles.profileName}>
            {userData?.profile?.firstName} {userData?.profile?.lastName}
          </Text>
          <Text allowFontScaling={false} style={styles.profilePhone}>
            {userData?.profile?.phone}
          </Text>
          <Text allowFontScaling={false} style={styles.profileEmail}>
            {userData?.profile?.email}
          </Text>
        </View>
      </View>
      <View style={styles.optionsContainer}>
        <Text style={styles.optionsTitle}>Options</Text>
        {drawerItems?.map((item, index) => (
          <TouchableOpacity
            activeOpacity={0.8}
            key={index}
            style={styles.drawerItem}
            onPress={() => onPress(item?.screenName)}>
            {item?.icon}
            <Text allowFontScaling={false} style={styles.drawerItemLabel}>
              {item?.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerHome;
