import {MaterialTopTabBarProps} from '@react-navigation/material-top-tabs';
import color from '@theme/color';
import React, {FC} from 'react';
import {Animated, ScrollView, TouchableOpacity, View} from 'react-native';
import {styles} from './analyticsTopTabs.style';

const CustomAnalyticsTopTabs: FC<MaterialTopTabBarProps> = ({
  state,
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <ScrollView
        bounces={false}
        horizontal
        contentContainerStyle={styles.mainContainer}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        {state?.routes?.map((route, index) => {
          const isFocused = state?.index === index;
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={onPress}
              style={[styles.tabRow, {marginLeft: index !== 0 ? 30 : 0}]}>
              <View
                style={[
                  styles.titleView,
                  {
                    borderBottomColor: isFocused
                      ? color.primary
                      : color.primaryBG,
                  },
                ]}>
                <Animated.Text style={styles.titleText}>
                  {route?.name}
                </Animated.Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default CustomAnalyticsTopTabs;
