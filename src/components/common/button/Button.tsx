import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import styles from './button.style';
import {PropsTypes} from './button.interface';
import color from '../../../theme/color';

const Button: React.FC<PropsTypes> = props => {
  return (
    <TouchableOpacity
      style={[styles.touchableStyle, props.buttonContainer]}
      activeOpacity={0.7}
      disabled={props.disabled}
      onPress={props.onPress}>
      {props.isLoading ? (
        <ActivityIndicator
          size="small"
          color={color.black}
          style={{marginRight: 10}}
          {...props.activityProps}
        />
      ) : (
        <Text style={[styles.buttonText, props.buttonTextStyle]}>
          {props.text}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default memo(Button);
