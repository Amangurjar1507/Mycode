import color from '@theme/color';
import React, {FC, SVGProps, memo} from 'react';
import {
  ActivityIndicator,
  ActivityIndicatorProps,
  ColorValue,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';
import style from './button.style';

type TSVGElementProps = SVGProps<SVGSVGElement>;
interface ButtonProps {
  label: string;
  containerStyle?: StyleProp<ViewStyle> | undefined;
  isLoading?: boolean;
  activityProps?: ActivityIndicatorProps;
  nameTextStyle?: StyleProp<TextStyle> | undefined;
  onPress?: () => void;
  buttonProps?: TouchableOpacityProps;
  backgroundColor?: ColorValue | undefined;
  disabled?: boolean;
  type?: 'Solid' | 'Outline';
  marginHorizontal?: number;
  inActive?: boolean;
  leftIcon?: any;
  rightIcon?: any;
}

const Button: FC<ButtonProps> = ({
  label,
  activityProps,
  buttonProps,
  containerStyle,
  isLoading,
  nameTextStyle,
  onPress,
  disabled,
  type,
  marginHorizontal,
  inActive,
  ...props
}) => {
  return (
    <View style={[style.marginContainer, {marginHorizontal: marginHorizontal}]}>
      {type === 'Outline' ? (
        <TouchableOpacity
          style={[style.outlineContainer, containerStyle]}
          activeOpacity={0.7}
          onPress={onPress}
          disabled={disabled}
          {...buttonProps}>
          {isLoading && (
            <ActivityIndicator
              size="small"
              color={color.secondaryBG}
              style={style.indicatorStyle}
              {...activityProps}
            />
          )}
          <View style={style.iconView}>
            {props.leftIcon && (
              <View style={style.leftIcon}>
                <props.leftIcon />
              </View>
            )}
            <Text
              style={[style.nameStyle, nameTextStyle]}
              textBreakStrategy="highQuality">
              {label}
            </Text>
            {props.rightIcon && (
              <View style={style.rightIcon}>
                <props.rightIcon />
              </View>
            )}
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[
            inActive ? style.inActiveContainer : style.container,
            containerStyle,
          ]}
          activeOpacity={0.8}
          onPress={onPress}
          disabled={disabled || inActive}
          {...buttonProps}>
          {isLoading && (
            <ActivityIndicator
              size="small"
              color={color.secondaryBG}
              style={style.indicatorStyle}
              {...activityProps}
            />
          )}
          <View style={style.iconView}>
            {props.leftIcon && (
              <View style={style.leftIcon}>
                <props.leftIcon />
              </View>
            )}
            <Text
              style={[
                inActive ? style.inActiveNameStyle : style.nameStyle,
                nameTextStyle,
              ]}>
              {label}
            </Text>
            {props.rightIcon && (
              <View style={style.rightIcon}>
                <props.rightIcon />
              </View>
            )}
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default memo(Button);
Button.defaultProps = {
  isLoading: false,
  disabled: false,
  inActive: false,
  type: 'Solid',
};
