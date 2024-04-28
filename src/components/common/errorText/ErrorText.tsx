import React, {FC, memo} from 'react';
import {StyleProp, Text, TextStyle, View, ViewStyle} from 'react-native';
import styles from './errorText.style';

interface ErrorTextProps {
  error?: string | undefined;
  errorContainerStyle?: StyleProp<ViewStyle> | undefined;
  errorText?: StyleProp<TextStyle> | undefined;
}
const ErrorText: FC<ErrorTextProps> = ({
  error,
  errorContainerStyle,
  errorText,
}) => {
  return error != undefined ? (
    <View style={[styles.errorViewStyle, errorContainerStyle]}>
      <Text style={[styles.errorStyle, errorText]}>{error}</Text>
    </View>
  ) : null;
};

export default memo(ErrorText);
