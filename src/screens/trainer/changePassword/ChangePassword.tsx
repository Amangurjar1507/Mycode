import {
  Button,
  ConfirmationModal,
  Container,
  InputContainer,
} from '@components';
import imageIndex from '@imageIndex';
import React, {FC} from 'react';
import {KeyboardAvoidingView, View} from 'react-native';
import {styles} from './changePassword.style';
import useChangePassword from './useChangePassword';

export interface ChangePasswordProps {}
const ChangePassword: FC = () => {
  const {passChange, handleChangeValue, onPressSaveChanges, modalHandler} =
    useChangePassword();
  return (
    <KeyboardAvoidingView style={styles.keyBoardView}>
      <Container
        wrapperType="form"
        headerShown
        backIconsShown
        lable="Change Password"
        description="Make sure you remember the password to log in."
        containerViewStyle={styles.containerViewStyle}
        containerStyle={styles.headerContainerStyle}>
        <View style={styles.inputContentContainers}>
          <InputContainer
            label="Old Password"
            placeholder="Orrdulev123@gmail.com"
            onChangeText={res => handleChangeValue(res, 'oldPassword')}
            value={passChange?.oldPassword}
            containerStyle={styles.oldPasswordInputStyle}
            inputContainerStyle={styles.oldInputContainerStyle}
            inputStyle={styles.inputTextStyle}
            rightElementType="password"
          />
          <InputContainer
            label="New Password"
            placeholder="Orrdulev123@gmail.com"
            onChangeText={res => handleChangeValue(res, 'newPassword')}
            value={passChange?.newPassword}
            containerStyle={styles.oldPasswordInputStyle}
            inputContainerStyle={styles.oldInputContainerStyle}
            inputStyle={styles.inputTextStyle}
            rightElementType="password"
          />
          <InputContainer
            label="Confirm Password"
            placeholder="Orrdulev123@gmail.com"
            onChangeText={res => handleChangeValue(res, 'confirmPassword')}
            value={passChange?.confirmPassword}
            containerStyle={styles.oldPasswordInputStyle}
            inputContainerStyle={styles.oldInputContainerStyle}
            inputStyle={styles.inputTextStyle}
            rightElementType="password"
          />
        </View>
        <View style={styles.btnView}>
          <Button
            type="Solid"
            label="Save Changes"
            containerStyle={styles.createPackagesBtnStyle}
            nameTextStyle={styles.createPackagesStyle}
            onPress={modalHandler}
          />
        </View>
      </Container>
      <ConfirmationModal
        visible={passChange?.passChangeConfirmationModal}
        animationType="slide"
        image={imageIndex.emailConfirmation}
        titleText={`Your new password has been\nupdated!`}
        confirmLabel="Done"
        onConfirm={modalHandler}
        onClose={modalHandler}
        btnViewStyle={styles.btnViewStyle}
        confirmLableStyle={styles.confirmLableStyle}
        confirmBtnStyle={styles.confirmBtnStyle}
      />
    </KeyboardAvoidingView>
  );
};

export default ChangePassword;
