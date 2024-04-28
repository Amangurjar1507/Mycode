import {Button, Container, ErrorText} from '@components';
import color from '@theme/color';
import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {CodeField, Cursor} from 'react-native-confirmation-code-field';
import useVerifyOTP from './useVerifyOTP';
import styles from './verifyOTP.style';

export interface VerifyOTPProps {
  OTP: string | undefined;
  OTPRef: any;
  error: string | undefined;
  onChangeValue: () => void;
  onValidate: () => void;
  onSubmitEditing: () => void;
}

const VerifyOTP: FC = () => {
  const {
    otp,
    OTPRef,
    error,
    onChangeValue,
    onSubmitEditing,
    onValidate,
    onPressLogin,
  } = useVerifyOTP();

  return (
    <Container
      wrapperType="form"
      headerShown
      backIconsShown
      headingText={`Please Check Your\nEmail`}
      containerStyle={styles.headerContainerStyle}>
      <View style={styles.otpContainer}>
        <CodeField
          ref={OTPRef}
          value={otp}
          onChangeText={onChangeValue}
          cellCount={4}
          keyboardType="number-pad"
          returnKeyType="done"
          // autoFocus
          textContentType="oneTimeCode"
          onSubmitEditing={onSubmitEditing}
          renderCell={({index, symbol, isFocused}) => (
            <View
              key={index}
              style={[
                styles.cell,
                {
                  borderColor: error
                    ? color.warning
                    : !isFocused
                    ? color.secondaryText
                    : color.primaryText,
                  borderWidth: error ? 1.5 : !isFocused ? 1 : 1.5,
                },
              ]}>
              <Text key={index} style={[styles.otp]}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            </View>
          )}
        />
      </View>
      <Text style={styles.description}>
        Please enter the code that we have just{'\n'}sent you.
      </Text>
      <View style={styles.buttonContainer}>
        <ErrorText error={error} errorText={styles.errorLabel} />
        <Button
          label="Continue"
          inActive={!otp}
          disabled={!otp}
          onPress={onValidate}
          containerStyle={styles.btnContainerStyle}
        />
        <Text style={styles.rememberLabel}>
          Remember password{' '}
          <Text onPress={onPressLogin} style={styles.loginLabel}>
            Log in
          </Text>
          .
        </Text>
      </View>
    </Container>
  );
};

export default VerifyOTP;
