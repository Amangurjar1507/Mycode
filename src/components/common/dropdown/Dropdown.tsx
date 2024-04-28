import SvgIndex from '@svgIndex';
import color from '@theme/color';
import React, {FC, memo} from 'react';
import {
  FlatList,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import style from './dropdown.style';

export interface DropdownProps {
  data?: DataProps[];
  isOpen?: boolean;
  setIsopen?: React.Dispatch<React.SetStateAction<boolean>>;
  containerStyle?: StyleProp<ViewStyle> | undefined;
  placeholder?: string;
  placeholderStyle?: StyleProp<TextStyle> | undefined;
  labelStyle?: StyleProp<TextStyle> | undefined;
  value?: string;
  setValue?: React.Dispatch<React.SetStateAction<string | undefined>>;
  onPress?: () => void;
  label?: string;
  lableStyle?: StyleProp<TextStyle> | undefined;
  innerLabel?: string;
  mainViewStyle?: StyleProp<ViewStyle> | undefined;
  rightIconShow?: boolean | undefined;
  onPressRightIcon?: () => void;
  filterRowContainer?: ViewStyle;
}
interface DataProps {
  title?: string | undefined;
}

const Dropdown: FC<DropdownProps> = ({
  placeholder,
  containerStyle,
  onPress,
  isOpen,
  value,
  data,
  setValue,
  placeholderStyle,
  setIsopen,
  label,
  lableStyle,
  innerLabel,
  mainViewStyle,
  rightIconShow,
  onPressRightIcon,
  filterRowContainer,
}) => {
  const renderItem = ({item, index}: any) => {
    return (
      <>
        {index !== 0 && <View style={style.itemDivider} />}
        <TouchableOpacity
          style={style.itemRow}
          onPress={() => {
            setValue?.(item?.title);
            setIsopen?.(!isOpen);
          }}>
          <Text style={style.titleText}>{item?.title}</Text>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <View style={[style.mainView, mainViewStyle]}>
      {label && <Text style={[style.label, lableStyle]}>{label}</Text>}
      <View style={[style.filterRowContainer, filterRowContainer]}>
        <TouchableOpacity
          style={[style.container, containerStyle]}
          activeOpacity={0.7}
          onPress={onPress}>
          <View style={style.innerLableView}>
            {innerLabel && <Text style={style.innerLable}>{innerLabel}</Text>}
            <View style={style.valueView}>
              <Text
                style={[
                  value ? style.valueText : style.placeholderText,
                  ,
                  placeholderStyle,
                ]}>
                {value ? value : placeholder}
              </Text>
            </View>
          </View>
          <View style={style.arrowView}>
            <SvgIndex.downArroy />
          </View>
        </TouchableOpacity>
        {rightIconShow && (
          <TouchableOpacity
            onPress={onPressRightIcon}
            activeOpacity={0.7}
            style={style.filterIconStyle}>
            <SvgIndex.filter />
          </TouchableOpacity>
        )}
      </View>
      {isOpen && (
        <View style={style.openDropdown}>
          <FlatList
            data={data}
            keyExtractor={(item, index) => {
              return `${index}`;
            }}
            renderItem={renderItem}
          />
        </View>
      )}
    </View>
  );
};

export default memo(Dropdown);
