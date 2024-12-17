import React, {FC, memo, useCallback, useEffect, useState} from 'react';
import {Text, TextStyle, TouchableOpacity, View, ViewStyle} from 'react-native';
import {styles} from './header.style';
import {useAuthNavigation} from '../../../hooks/useAppNavigation';
import Drawer from '../../../assets/svg/Drawer';
import Notification from '../../../assets/svg/Notification';
import {useAppSelector} from '../../../hooks/useRedux';
import {RootState} from '../../../services/redux/store';

export interface HeaderProps {
  containerStyle?: ViewStyle;
  showBackIcon?: boolean;
  lable?: string;
  subLabel?: string; // Sub-label added
  lableStyle?: TextStyle;
  rightButton?: boolean;
  onPressBackIcon?: () => void;
  onPressRightButton?: () => void;
}

const Header: FC<HeaderProps> = ({
  containerStyle,
  showBackIcon,
  lable,
  subLabel, // Sub-label prop
  lableStyle,
  rightButton,
  onPressBackIcon,
  onPressRightButton,
}) => {
  const navigation = useAuthNavigation();
  const {userData, isActiveNotification} = useAppSelector(
    (state: RootState) => state.UserData,
  );

  const handleBackNavigation = useCallback(() => {
    if (showBackIcon) {
      showBackIcon ? navigation.openDrawer() : navigation.goBack();
    }
  }, [navigation, onPressBackIcon, showBackIcon]);

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.rightIconRow}>
        <View style={styles.titleRow}>
          {showBackIcon && (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={handleBackNavigation}
              style={styles.backButtonView}>
              <Drawer />
            </TouchableOpacity>
          )}

          <View style={styles.labelContainer}>
            <Text
              allowFontScaling={false}
              numberOfLines={1}
              style={[styles.labelText, lableStyle]}>
              {userData?.profile?.firstName} {userData?.profile?.lastName}
            </Text>
            <Text
              allowFontScaling={false}
              numberOfLines={1}
              style={styles.subLabelText}>
              {userData?.profile?.address}
            </Text>
          </View>
        </View>
        {rightButton && (
          <>
            <TouchableOpacity
              onPress={onPressRightButton}
              activeOpacity={0.8}
              style={styles.rightView}>
              <Notification />
            </TouchableOpacity>
            {isActiveNotification && <View style={styles.notificationActive} />}
          </>
        )}
      </View>
    </View>
  );
};

export default memo(Header);

Header.defaultProps = {
  showBackIcon: false,
  rightButton: false,
};
