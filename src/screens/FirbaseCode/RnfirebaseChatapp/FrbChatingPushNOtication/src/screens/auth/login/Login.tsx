import React, {FC} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './login.style';
import useLogin from './useLogin';
import InputContainer from '../../../components/common/inputContainer/InputContainer';
import {Button} from '../../../components/componentsIndex';
import CustomStatusbar from '../../../components/common/customStatusbar/CustomStatusbar';
import color from '../../../theme/color';

export interface LoginProps {
  userLogin: UserLoginProps;
  userLoginError: UserLoginErrorProps;
  updateLoginInputValue: (key: string, value: string | boolean) => void;
  isLogin: () => void;
  onValidateLogin: () => void;
  navigateToForgotPassword: () => void;
  navigateToSignUp: () => void;
}

export interface UserLoginProps {
  email: string;
  password: string;
  isLoading: boolean;
}

export interface UserLoginErrorProps {
  emailError?: string;
  passwordError?: string;
}

const Login: FC = () => {
  const {
    userLogin,
    userLoginError,
    updateLoginInputValue,
    isLogin,
    onValidateLogin,
  } = useLogin();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <CustomStatusbar
        backgroundColor={color.darkGreen}
        barStyle="light-content"
      />
      <ScrollView style={styles.scrollContainer}>
        <Text allowFontScaling={false} style={styles.headingText}>
          Log in
        </Text>
        <View style={styles.formContainer}>
          <InputContainer
            labelSecond="Email"
            placeholder="Enter Email"
            onChangeText={res =>
              updateLoginInputValue('email', res?.toLowerCase()?.trim())
            }
            value={userLogin?.email}
            keyboardType="email-address"
            error={userLoginError?.emailError}
            containerStyle={styles.emailContainer}
          />
          <InputContainer
            labelSecond="Password"
            placeholder="Enter Password"
            rightElementType={'password'}
            value={userLogin?.password}
            onChangeText={res => updateLoginInputValue('password', res?.trim())}
            maxLength={16}
            error={userLoginError?.passwordError}
            containerStyle={styles.inputContainer}
            inputProps={{returnKeyType: 'done'}}
          />
        </View>
      </ScrollView>
      <View style={styles.btnContainer}>
        <Button
          label="Login"
          disabled={isLogin}
          inActive={isLogin}
          onPress={onValidateLogin}
          containerStyle={styles.btnStyle}
          isLoading={userLogin.isLoading}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
