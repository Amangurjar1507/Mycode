import { Button, Container, InputContainer, OrLine } from '@components';
import React, { FC } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './login.style';
import useLogin from './useLogin';

export interface LoginProps {
  userLogin: UserLoginProps;
  error: UserLoginErrorProps;
  handleChangeValue: (value: string, state: string) => void;
  onClickBack: () => void;
  onClickForgotPassword: () => void;
  onPressSignUp: () => void;
  onValidate: () => void;
}

export interface UserLoginErrorProps {
  email: string | undefined;
  password: string | undefined;
}

export interface UserLoginProps {
  email: string;
  password: string;
  loading: boolean;
}

const Login: FC = () => {
  const {
    userLogin,
    error,
    isDisabled,
    handleChangeValue,
    onClickForgotPassword,
    onPressSignUp,
    onValidate,
  } = useLogin();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container wrapperType="scroll" headerShown backIconsShown>
        <Text style={styles.headingText}>Log in</Text>
        <View style={styles.formContainer}>
          <InputContainer
            labelSecond="Email"
            placeholder="Your Email"
            onChangeText={res => handleChangeValue(res, 'email')}
            value={userLogin?.email}
            keyboardType="email-address"
            error={error.email}
          />
          <InputContainer
            labelSecond="Password"
            placeholder="Password"
            rightElementType={'password'}
            onChangeText={res => handleChangeValue(res, 'password')}
            value={userLogin?.password}
            error={error.password}
            containerStyle={styles.inputContainer}
          />
          <TouchableOpacity
            style={styles.forgotPassButton}
            activeOpacity={0.8}
            onPress={onClickForgotPassword}>
            <Text allowFontScaling={false} style={styles.forgotPasswordLabel}>
              Forget Password?
            </Text>
          </TouchableOpacity>
        </View>
      </Container>
      <View style={styles.btnContainer}>
        <View style={styles.privacyContainer}>
          <Text allowFontScaling={false} style={styles.dontHaveAccount}>
            By signing up, you agree to our{' '}
            <Text allowFontScaling={false} style={styles.signUpLabel}>
              Terms of service.
            </Text>
            {'\n'}
            Learn how we process your data in our{' '}
            <Text allowFontScaling={false} style={styles.signUpLabel}>
              Privacy Policy
            </Text>
            {'\n'}
            and{' '}
            <Text allowFontScaling={false} style={styles.signUpLabel}>
              Cookies Policy
            </Text>
            .
          </Text>
        </View>
        <OrLine />
        <Button
          label="Log in"
          disabled={isDisabled}
          inActive={isDisabled}
          onPress={onValidate}
          containerStyle={styles.btnStyle}
          isLoading={userLogin.loading}
        />
        <Text style={styles.dontIfDont} allowFontScaling={false}>
          If you don’t already have an account, please{'\n'}click here to{' '}
          <Text
            style={styles.signUpLabel}
            allowFontScaling={false}
            onPress={onPressSignUp}>
            sign up
          </Text>
          .
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
