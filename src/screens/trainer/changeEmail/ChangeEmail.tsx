import {
  Button,
  ConfirmationModal,
  Container,
  InputContainer,
} from '@components';
import imageIndex from '@imageIndex';
import React, {FC} from 'react';
import {View} from 'react-native';
import {styles} from './changeEmail.style';
import useChangeEmail from './useChangeEmail';

const ChangeEmail: FC = () => {
  const {
    emailChange,
    isDisabled,
    handleChangeValue,
    onPressNext,
    modalHandler,
  } = useChangeEmail();
  return (
    <>
      <Container
        wrapperType="form"
        headerShown
        backIconsShown
        lable="Change Email"
        description="We have sent you a verification code to your current email. Please add
          it here in order to continue."
        containerViewStyle={styles.containerViewStyle}
        containerStyle={styles.headerContainerStyle}>
        <View style={styles.inputContentContainers}>
          <InputContainer
            label="Current Email"
            lableRowStyle={styles.emailInputStyle}
            placeholder="Orrdulev123@gmail.com"
            onChangeText={res => handleChangeValue(res, 'currentEmail')}
            value={emailChange?.currentEmail}
            keyboardType="email-address"
            inputContainerStyle={styles.inputContainerStyle}
            inputStyle={styles.inputStyle}
          />
          <InputContainer
            label="Verification Code"
            placeholder="Orrdulev123@gmail.com"
            onChangeText={res => handleChangeValue(res, 'verificationCode')}
            value={emailChange?.verificationCode}
            containerStyle={styles.verificationInputContainer}
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.verificationTextInput}
          />
        </View>
        <View style={styles.btnView}>
          <Button
            type="Solid"
            label="Next"
            containerStyle={styles.createPackagesBtnStyle}
            nameTextStyle={styles.createPackagesStyle}
            onPress={modalHandler}
            inActive={isDisabled}
            disabled={isDisabled}
          />
        </View>
      </Container>
      <ConfirmationModal
        visible={emailChange?.emailChangeConfirmationModal}
        animationType="slide"
        image={imageIndex.emailConfirmation}
        titleText={`Your new email has been\nupdated!`}
        confirmLabel="Done"
        onConfirm={modalHandler}
        onClose={modalHandler}
        btnViewStyle={styles.btnViewStyle}
        confirmLableStyle={styles.confirmLableStyle}
        confirmBtnStyle={styles.confirmBtnStyle}
      />
    </>
  );
};

export default ChangeEmail;
