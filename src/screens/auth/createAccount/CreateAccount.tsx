import {Button, Container, CustomDatePicker, InputContainer} from '@components';
import SvgIndex from '@svgIndex';
import moment from 'moment';
import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './createAccount.style';
import useCreateAccount from './useCreateAccount';

export interface CreateAccountPorps {
  accountInfo: AccountInfoProps;
  handleChangeValue: () => void;
  toggleIAgreeCheckBox: () => void;
  onValidate: () => void;
}
export interface AccountInfoProps {
  email?: string | undefined;
  isAccept: boolean;
  dateOfBirth: string;
  fName: string | undefined;
  lName: string | undefined;
  password: string | undefined;
}

export interface CreateAccountErrorProps {
  fName: string | undefined;
  lName: string | undefined;
  password: string | undefined;
  dateOfBirth: string | undefined;
}

const CreateAccount: FC = () => {
  const {
    accountInfo,
    error,
    isDisabled,
    handleChangeValue,
    toggleIAgreeCheckBox,
    onValidate,
  } = useCreateAccount();

  return (
    <Container
      wrapperType="form"
      headerShown
      backIconsShown
      headingText="Create Account"
      containerStyle={styles.headerContainerStyle}>
      <View style={styles.dataContainer}>
        <View style={styles.rowContainer}>
          <View style={styles.inputContainer}>
            <InputContainer
              labelSecond="First Name"
              containerStyle={styles.inputLeft}
              placeholder="First name"
              onChangeText={res => handleChangeValue(res, 'fName')}
              value={accountInfo?.fName}
              keyboardType="default"
              error={error.fName}
            />
          </View>
          <View style={styles.inputContainer}>
            <InputContainer
              labelSecond="Last Name"
              placeholder="Last name"
              containerStyle={styles.inputRight}
              onChangeText={res => handleChangeValue(res, 'lName')}
              value={accountInfo?.lName}
              keyboardType="default"
              error={error.lName}
            />
          </View>
        </View>
        <InputContainer
          labelSecond="Password"
          placeholder="*********"
          onChangeText={res => handleChangeValue(res, 'password')}
          value={accountInfo?.password}
          rightElementType="password"
          keyboardType="visible-password"
          error={error.password}
        />
        <CustomDatePicker
          label="Date of Birth"
          placeholder="Date of Birth"
          onDateChange={(res: any) => handleChangeValue(res, 'dateOfBirth')}
          value={
            accountInfo?.dateOfBirth
              ? moment(accountInfo?.dateOfBirth).format('DD MMMM YYYY')
              : '12 August 2023'
          }
          error={error.dateOfBirth}
        />
        {/* <CalenderPicker
          label="Date of Birth"
          placeholder="Date of Birth"
          value={
            accountInfo?.dateOfBirth ??
            moment(accountInfo?.dateOfBirth.toString()).format('D MMMM YYYY')
          }
          onSelectedDate={res => handleChangeValue(res, 'dateOfBirth')}
          error={error.dateOfBirth}
        /> */}
        <View style={styles.privacyPolicyContainer}>
          <TouchableOpacity activeOpacity={0.5} onPress={toggleIAgreeCheckBox}>
            {!accountInfo?.isAccept ? (
              <SvgIndex.checkboxEmpty />
            ) : (
              <SvgIndex.checkboxFilled />
            )}
          </TouchableOpacity>
          <Text style={styles.description}>
            I agree to Bodify’s{' '}
            <Text style={styles.policyLabel}>Privacy Policy</Text> and{' '}
            <Text style={styles.policyLabel}>Terms of Service</Text>
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          containerStyle={styles.btnContainerStyle}
          label="Continue"
          onPress={onValidate}
          disabled={isDisabled}
          inActive={isDisabled}
        />
      </View>
    </Container>
  );
};

export default CreateAccount;
