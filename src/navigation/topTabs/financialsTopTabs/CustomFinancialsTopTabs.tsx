import {MaterialTopTabBarProps} from '@react-navigation/material-top-tabs';
import color from '@theme/color';
import React from 'react';
import {Animated, TouchableOpacity, View} from 'react-native';
import {styles} from './financialsTopTabs.style';

const CustomFinancialsTopTabs: React.FC<MaterialTopTabBarProps> = ({
  state,
  navigation,
}) => {
  const isFocused = state.index;
  const onPress = (nav: string) => {
    if (!nav) {
      return;
    } else {
      navigation?.navigate(nav);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => onPress('FinanManagement')}
        style={styles.tabRow}>
        <View
          style={[
            styles.titleView,
            {
              borderBottomColor:
                isFocused === 0 ? color.primary : color.primaryBG,
            },
          ]}>
          <Animated.Text style={styles.titleText}>
            Financial Management
          </Animated.Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => onPress('RefManagement')}
        style={styles.tabRow}>
        <View
          style={[
            styles.titleView,
            {
              borderBottomColor:
                isFocused === 1 ? color.primary : color.primaryBG,
            },
          ]}>
          <Animated.Text style={styles.titleText}>
            Referral Management
          </Animated.Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomFinancialsTopTabs;
