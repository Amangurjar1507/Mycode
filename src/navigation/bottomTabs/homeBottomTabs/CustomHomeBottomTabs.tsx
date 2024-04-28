import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import SvgIndex from '@svgIndex';
import color from '@theme/color';
import {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './homeBottomTabs.style';

const CustomHomeBottomTabs: FC<BottomTabBarProps> = ({
  state,
  navigation,
  type,
}) => {
  const isFocused = state?.index;
  const onPress = (screenName: string) => {
    if (screenName) {
      navigation.navigate(screenName);
    }
  };
  const userType: number = type ?? 0;
  return (
    <View style={styles.container}>
      {userType === 0 ? (
        <>
          <TouchableOpacity
            style={styles.rowView}
            activeOpacity={0.8}
            onPress={() => onPress('MyPrograms')}>
            {isFocused === 0 ? (
              <SvgIndex.myProgramsFocus />
            ) : (
              <SvgIndex.myProgramsUnfocus />
            )}
            <Text
              style={[
                styles.nameText,
                {
                  color: isFocused === 0 ? color.primary : color.secondaryText,
                },
              ]}>
              MyPrograms
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.rowView]}
            activeOpacity={0.7}
            onPress={() => onPress('Financials')}>
            {isFocused === 1 ? (
              <SvgIndex.financialsFocus />
            ) : (
              <SvgIndex.financialsUnfocus />
            )}
            <Text
              style={[
                styles.nameText,
                {color: isFocused === 1 ? color.primary : color.secondaryText},
              ]}>
              Financials
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.rowView]}
            activeOpacity={0.7}
            onPress={() => onPress('Analytics')}>
            {isFocused === 2 ? (
              <SvgIndex.analyticsFocus />
            ) : (
              <SvgIndex.analyticsUnfocus />
            )}
            <Text
              style={[
                styles.nameText,
                {color: isFocused === 2 ? color.primary : color.secondaryText},
              ]}>
              Analytics
            </Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TouchableOpacity
            style={[styles.rowView]}
            activeOpacity={0.7}
            onPress={() => onPress('MarketPlace')}>
            {isFocused === 3 ? (
              <SvgIndex.marketplaceFocus />
            ) : (
              <SvgIndex.marketplaceUnfocus />
            )}
            <Text
              style={[
                styles.nameText,
                {color: isFocused === 3 ? color.primary : color.secondaryText},
              ]}>
              Marketplace
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.rowView]}
            activeOpacity={0.7}
            onPress={() => onPress('Workout')}>
            {isFocused === 4 ? (
              <SvgIndex.myProgramsFocus />
            ) : (
              <SvgIndex.myProgramsUnfocus />
            )}
            <Text
              style={[
                styles.nameText,
                {color: isFocused === 4 ? color.primary : color.secondaryText},
              ]}>
              Workout
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.rowView]}
            activeOpacity={0.7}
            onPress={() => onPress('History')}>
            {isFocused === 5 ? (
              <SvgIndex.historyFocus />
            ) : (
              <SvgIndex.historyUnfocus />
            )}
            <Text
              style={[
                styles.nameText,
                {color: isFocused === 5 ? color.primary : color.secondaryText},
              ]}>
              History
            </Text>
          </TouchableOpacity>
        </>
      )}
      <TouchableOpacity
        style={[styles.rowView]}
        activeOpacity={0.7}
        onPress={() => onPress('MyProfile')}>
        {isFocused === 6 ? (
          <SvgIndex.myProfileFocus />
        ) : (
          <SvgIndex.myProfileUnfocus />
        )}
        <Text
          style={[
            styles.nameText,
            {color: isFocused == 6 ? color.primary : color.secondaryText},
          ]}>
          MyProfile
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.rowView]}
        activeOpacity={0.7}
        onPress={() => onPress('Settings')}>
        {isFocused === 7 ? (
          <SvgIndex.settingsFocus />
        ) : (
          <SvgIndex.settingsUnfocus />
        )}
        <Text
          style={[
            styles.nameText,
            {color: isFocused === 7 ? color.primary : color.secondaryText},
          ]}>
          Settings
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomHomeBottomTabs;
