import {Container, InputContainer} from '@components';
import React, {FC} from 'react';
import {View} from 'react-native';
import {styles} from './changeEmailPassword.style';
import useChangeEmailPassword from './useChangeEmailPassword';

export interface ChangeEmailPasswordProps {
  email?: string;
  password?: string;
}

const ChangeEmailPassword: FC = () => {
  const {emailPassChange, error, navigateToChange, handleChangeValue} =
    useChangeEmailPassword();
  return (
    <Container
      wrapperType="scroll"
      headerShown
      backIconsShown
      lable="Change Email & Password">
      <View style={styles.inputContentContainers}>
        <InputContainer
          label="Email"
          placeholder="Orrdulev123@gmail.com"
          value={emailPassChange?.email}
          keyboardType="email-address"
          rightElementType="textButton"
          textButtonText="Change"
          onPressTextButton={() => navigateToChange('email')}
          inputContainerStyle={styles.inputContainerStyle}
          inputStyle={styles.inputStyle}
          editable={false}
        />
        <InputContainer
          label="Password"
          placeholder="********"
          value={emailPassChange?.password}
          keyboardType="email-address"
          error={error.password}
          secureTextEntry
          containerStyle={styles.containerStyle}
          rightElementType="textButton"
          textButtonText="Change"
          onPressTextButton={() => navigateToChange()}
          hidePassword
          inputContainerStyle={styles.inputContainerStyle}
          inputStyle={styles.inputStyle}
          editable={false}
        />
      </View>
    </Container>
  );
};

export default ChangeEmailPassword;
