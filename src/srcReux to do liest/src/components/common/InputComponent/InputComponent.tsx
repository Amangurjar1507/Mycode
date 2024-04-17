import React, {FC, memo, useRef, useState} from 'react';
import {Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import {InputComponentProps} from './inputComponent.interface';
import styles from './inputComponent.style';
import imageIndex from '../../../assets/imageIndex';

const InputComponent: FC<InputComponentProps> = props => {
  const [passwordVisible, setPasswordVisible] = useState<boolean | undefined>(
    props?.secureText || true,
  );
  const [isFocuse, setIsFocuse] = useState<boolean | undefined>(false);
  const inputRef = useRef<TextInput>(null);
  const checkIsFocusedHandler = () => {
    let result = inputRef.current?.isFocused();
    setIsFocuse(result);
  };
  return (
    <View style={[styles.input, props.input]}>
      <View style={[styles.container, props.inputContainer]}>
        {props.label && (
          <Text style={[styles.textStyle, props.lableStyle]}>
            {props.label}
          </Text>
        )}

        <View style={[styles.borderView, props.mainInputView]}>
          {props.countryView}
          <TextInput
            ref={inputRef}
            onChangeText={props.onChangeText}
            value={props.value}
            placeholder={props.placeholder}
            placeholderTextColor={props.placeholderTextColor}
            style={[styles.inputStyle, props.inputStyle]}
            secureTextEntry={props.hideshow ? passwordVisible : false}
            onFocus={checkIsFocusedHandler}
            onEndEditing={() => setIsFocuse(false)}
            onSubmitEditing={() => setIsFocuse(false)}
            keyboardType={props.keyboardType}
            maxLength={props.maxLength}
            multiline={props.multiline}
            numberOfLines={props.numberOfLines}
            returnKeyType={props.returnKeyboardType}
            textAlignVertical={props.textAlignVertical}
            editable={props.editable}
            {...props.inputProps}
          />

          {props.hideshow && (
            <TouchableOpacity
              onPress={() => {
                setPasswordVisible(!passwordVisible);
              }}
              activeOpacity={0.5}
              style={styles.eyetouch}>
              <Image
                style={styles.hideStyle}
                source={
                  passwordVisible ? imageIndex.Twitter : imageIndex.youtube
                }
              />
            </TouchableOpacity>
          )}
        </View>
        {props?.error ? (
          <Text style={[styles.errorText, props.errorTwo]}>{props?.error}</Text>
        ) : null}
      </View>
    </View>
  );
};
InputComponent.defaultProps = {
  type: 'normal',
};

export default memo(InputComponent);
