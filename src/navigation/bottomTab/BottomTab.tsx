import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import style from './bottomTab.style';

const BottomTab: React.FC<BottomTabBarProps> = props => {
  const {index} = props.state;

  return (
    <View style={style.container}>
      <View style={style.mainView}>
        <TouchableOpacity style={style.tabButton} activeOpacity={0.7}>
          <View style={style.lineView}>
            <View
              style={[
                style.topView,
                {backgroundColor: index === 0 ? 'red' : 'pink'},
              ]}
            />
          </View>
          <View style={style.iconView}>
            {/* <SvgIndex.homeIcon
              stroke={index === 0 ? color.primary : color.gray400}
              fill={index === 0 ? color.primary : color.gray400}
            /> */}
            <Text
              style={[
                style.tabText,
                {
                  color: index === 0 ? 'red' : 'blue',
                },
              ]}>
              Home
            </Text>
          </View>
          <View style={style.lineView}>
            <View
              style={[
                style.halfCurveView,
                {backgroundColor: index === 0 ? 'red' : 'pink'},
              ]}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={style.tabButton} activeOpacity={0.7}>
          <View style={style.lineView}>
            <View
              style={[
                style.topView,
                {backgroundColor: index === 1 ? 'red' : 'pink'},
              ]}
            />
          </View>
          <View style={style.iconView}>
            {/* <SvgIndex.calendarIcon
              stroke={index === 1 ? color.primary : color.gray400}
              fill={index === 1 ? color.primary : color.gray400}
            /> */}
            <Text
              style={[
                style.tabText,
                {
                  color: index === 1 ? 'red' : 'pink',
                },
              ]}>
              Services
            </Text>
          </View>
          <View style={style.lineView}>
            <View
              style={[
                style.halfCurveView,
                {backgroundColor: index === 1 ? 'red' : 'pink'},
              ]}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default BottomTab;
