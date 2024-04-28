import SvgIndex from '@svgIndex';
import color from '@theme/color';
import React, {FC, memo, useRef, useState} from 'react';
import {
  KeyboardTypeOptions,
  StyleProp,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {styles} from './inputContainer.style';

interface InputPorps {
  containerStyle?: ViewStyle;
  lableRowStyle?: ViewStyle;
  labelIcon?: any;
  label?: string;
  labelStyle?: TextStyle;
  labelSecondOptional?: string;
  labelSecondOptionalStyle?: TextStyle;
  labelSecond?: string;
  labelSecondViewStyle?: ViewStyle;
  labelSecondIcon?: any;
  labelSecondTextStyle?: TextStyle;
  inputContainerStyle?: ViewStyle;
  leftIcon?: any;
  inputStyle?: StyleProp<TextStyle> | undefined;
  placeholder?: string;
  placeholderTextColor?: string;
  secureTextEntry?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  returnKeyType?: 'done' | 'go' | 'next' | 'search' | 'send' | undefined;
  inputProps?: TextInputProps;
  rightElementType?: 'password' | 'dropdown' | 'textButton';
  hidePassword?: boolean;
  value?: string | undefined;
  onChangeText?: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
  multiline?: boolean;
  numberOfLines?: number;
  maxLength?: number;
  editable?: boolean;
  onPressDropdown?: () => void;
  onPressTextButton?: () => void;
  textButtonText?: string;
  error?: string;
  validationLabelcolor?: boolean;
}

const InputContainer: FC<InputPorps> = ({
  containerStyle,
  lableRowStyle,
  label,
  labelStyle,
  labelSecondOptional,
  labelSecondOptionalStyle,
  labelSecond,
  labelSecondViewStyle,
  labelSecondTextStyle,
  inputContainerStyle,
  inputStyle,
  placeholder,
  placeholderTextColor,
  secureTextEntry,
  autoCapitalize,
  returnKeyType,
  rightElementType,
  hidePassword,
  value,
  onChangeText,
  keyboardType,
  multiline,
  numberOfLines,
  maxLength,
  editable,
  onPressDropdown,
  onPressTextButton,
  textButtonText,
  error,
  validationLabelcolor,
  inputProps,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const inputRef = useRef<TextInput>(null);
  const checkIsFocusedHandler = () => {
    let result = inputRef.current?.isFocused();
    setIsFocused(result ?? false);
  };
  return (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <View style={[styles.lableRow, lableRowStyle]}>
          {props.labelIcon && (
            <View style={styles.lableIcon}>
              {props?.labelIcon && <props.labelIcon />}
            </View>
          )}
          {label && (
            <Text
              style={[styles.lable, labelStyle]}
              numberOfLines={1}
              allowFontScaling={false}>
              {label}{' '}
              {labelSecondOptional && (
                <Text style={[styles.optionalLable, labelSecondOptionalStyle]}>
                  {labelSecondOptional}
                </Text>
              )}
            </Text>
          )}
        </View>
      )}
      {labelSecond && (
        <View style={[styles.lableSecondView, labelSecondViewStyle]}>
          {props?.labelSecondIcon && (
            <View style={styles.lableSecondIconView}>
              <props.labelSecondIcon />
            </View>
          )}
          <Text
            style={[
              styles.lableSecond,
              labelSecondTextStyle,
              {
                color:
                  validationLabelcolor && error
                    ? color.warning
                    : color.primaryText,
              },
            ]}
            numberOfLines={1}
            allowFontScaling={false}>
            {labelSecond}
          </Text>
        </View>
      )}
      <View
        style={[
          styles.inputContainer,
          {
            borderColor: error
              ? color.warning
              : !isFocused
              ? color.lightgray
              : color.primary,
            borderWidth: !isFocused && !error ? 1 : 1.5,
          },
          inputContainerStyle,
        ]}>
        {props.leftIcon && (
          <View style={styles.leftIconView}>
            <props.leftIcon />
          </View>
        )}
        <TextInput
          ref={inputRef}
          style={[styles.inputStyle, inputStyle]}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor ?? color.secondaryText}
          onFocus={checkIsFocusedHandler}
          onEndEditing={checkIsFocusedHandler}
          secureTextEntry={
            rightElementType === 'password'
              ? !showPassword
              : hidePassword
              ? true
              : false
          }
          autoCorrect={false}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          multiline={multiline}
          numberOfLines={numberOfLines}
          maxLength={maxLength}
          editable={editable}
          cursorColor={color.primary}
          autoCapitalize={autoCapitalize}
          returnKeyType={returnKeyType}
          {...inputProps}
        />
        {rightElementType === 'password' && (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setShowPassword(!showPassword)}>
            {!showPassword ? <SvgIndex.closeEye /> : <SvgIndex.openEye />}
          </TouchableOpacity>
        )}
        {rightElementType === 'dropdown' && (
          <TouchableOpacity
            style={styles.dropDownStyle}
            activeOpacity={0.8}
            onPress={onPressDropdown}>
            <SvgIndex.downArroy />
          </TouchableOpacity>
        )}
        {rightElementType === 'textButton' && (
          <TouchableOpacity activeOpacity={0.8} onPress={onPressTextButton}>
            <Text style={styles.textBtnText}>{textButtonText}</Text>
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={styles.errorLabel}>{error}</Text>}
    </View>
  );
};

export default memo(InputContainer);
