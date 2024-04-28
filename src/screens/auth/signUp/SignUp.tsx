import {Button, Container, InputContainer} from '@components';
import React, {FC} from 'react';
import {Text, View} from 'react-native';
import styles from './signUp.style';
import useSignUp from './useSignUp';

export interface SignUpProps {
  email: string | undefined;
  error: SignUpErrorProps;
  onPressLogin: () => void;
  onValidate: () => void;
  onPressSignUp: () => void;
}

export interface SignUpErrorProps {
  email: string | undefined;
}

const SignUp: FC = () => {
  const {email, setEmail, error, onValidate, onPressLogin, onPressSignUp} =
    useSignUp();
  return (
    <Container
      wrapperType="form"
      headerShown
      backIconsShown
      headingText="Create Account"
      containerStyle={styles.headerContainerStyle}>
      <View style={styles.dataContainer}>
        <InputContainer
          labelSecond="Email"
          placeholder="Your Email"
          onChangeText={res => setEmail(res)}
          value={email}
          keyboardType="email-address"
          error={error.email}
          containerStyle={styles.inputContainerEmail}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          label={'Continue'}
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

export default SignUp;
