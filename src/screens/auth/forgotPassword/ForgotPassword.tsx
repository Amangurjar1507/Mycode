import {Button, Container, InputContainer} from '@components';
import React, {FC} from 'react';
import {Text, View} from 'react-native';
import styles from './forgotPassword.style';
import useForgotPassword from './useForgotPassword';

export interface ForgotPasswordProps {
  error: ForgotPasswordErrorProps;
  onValidate: () => void;
  onPressSent: () => void;
  onPressLogin: () => void;
}

export interface ForgotPasswordErrorProps {
  email: string | undefined;
}

const ForgotPassword: FC = () => {
  const {email, setEmail, error, onValidate, onPressSent, onPressLogin} =
    useForgotPassword();
  return (
    <Container
      wrapperType="form"
      headerShown
      backIconsShown
      headingText="Forget Password?"
      containerStyle={styles.headerContainerStyle}>
      <View style={styles.dataContainer}>
        <InputContainer
          labelSecond="Email"
          placeholder="Orr@gmail.com"
          onChangeText={res => setEmail(res)}
          value={email}
          keyboardType="email-address"
          error={error.email}
          containerStyle={styles.inputContainerEmail}
        />
        <Text style={styles.description}>
          Please enter your email so we could send {'\n'}you your password
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          label="Continue"
          onPress={onValidate}
          disabled={!email}
          inActive={!email}
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

export default ForgotPassword;
