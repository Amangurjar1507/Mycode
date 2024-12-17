import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './homeBottomTabs.style';
import color from '../../../theme/color';
import HomeIcon from '../../../assets/svg/HomeIcon';
import Order from '../../../assets/svg/Order';

const CustomHomeBottomTabs: FC<BottomTabBarProps> = ({state, navigation}) => {
  const isFocused = state?.index;

  const onPress = (screenName: string) => {
    if (screenName) {
      navigation.reset({
        index: 0,
        routes: [{name: screenName}],
      });
    }
  };

  return (
    <View style={styles.container}>
      {/* Dashboard Tab */}
      <TouchableOpacity
        style={styles.rowView}
        activeOpacity={0.8}
        onPress={() => onPress('Dashboard')}>
        {isFocused === 0 ? (
          <HomeIcon fill={color.darkGreen} />
        ) : (
          <HomeIcon fill={color.viridianGreen} />
        )}
        <Text
          allowFontScaling={false}
          numberOfLines={1}
          style={[
            styles.nameText,
            {
              color: isFocused === 0 ? color.darkGreen : color.viridianGreen,
               fontWeight:isFocused === 0 ? '800' : '600'
            },
          ]}>
          Home
        </Text>
      </TouchableOpacity>

      {/* OrderList Tab */}
      <TouchableOpacity
        style={styles.rowView}
        activeOpacity={0.7}
        onPress={() => onPress('OrderList')}>
        <View>
          {isFocused === 1 ? (
            <Order fill={color.darkGreen} />
          ) : (
            <Order fill={color.viridianGreen} />
          )}
        </View>
        <Text
          allowFontScaling={false}
          numberOfLines={1}
          style={[
            styles.nameText,
            {
              color: isFocused === 1 ? color.darkGreen : color.viridianGreen,
              fontWeight: isFocused === 1 ? '800' : '600',
            },
          ]}>
          Order
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomHomeBottomTabs;
