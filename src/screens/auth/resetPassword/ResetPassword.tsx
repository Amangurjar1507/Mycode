import {Button, Container, InputContainer} from '@components';
import React, {FC} from 'react';
import {Text, View} from 'react-native';
import styles from './resetPassword.style';
import useResetPassword from './useResetPassword';

export interface ResetPasswordProps {
  passwordInfo: PasswordInfoProps;
  error: PasswordInfoErrorProps;
  handleChangeValue: (value: string, state: string) => void;
  onPressLogin: () => void;
  onValidate: () => void;
}

export interface PasswordInfoProps {
  newPassword: string | undefined;
  confirmPassword: string | undefined;
}

export interface PasswordInfoErrorProps {
  newPassword: string | undefined;
  confirmPassword: string | undefined;
}

const ResetPassword: FC = () => {
  const {
    passwordInfo,
    error,
    isDisabled,
    handleChangeValue,
    onPressLogin,
    onValidate,
  } = useResetPassword();

  return (
    <Container
      wrapperType="form"
      headerShown
      backIconsShown
      headingText={'Reset Password'}
      headingDesText={`Please enter password that you’ll \nremember`}
      headingDesTextStyle={styles.headingDesTextStyle}>
      <View style={styles.dataContainer}>
        <InputContainer
          labelSecond="New Password"
          placeholder="Orr@gmail.com"
          rightElementType="password"
          value={passwordInfo?.newPassword}
          onChangeText={val => handleChangeValue(val, 'newPassword')}
          maxLength={16}
          containerStyle={styles.inputContainer}
        />
        <InputContainer
          labelSecond="Confirm Password"
          placeholder="***********"
          rightElementType="password"
          value={passwordInfo?.confirmPassword}
          onChangeText={val => handleChangeValue(val, 'confirmPassword')}
          error={error.confirmPassword}
          maxLength={16}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          label="Reset Password"
          onPress={onValidate}
          disabled={isDisabled}
          inActive={isDisabled}
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

export default ResetPassword;
