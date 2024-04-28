import {Button, Container, InputContainer} from '@components';
import SvgIndex from '@svgIndex';
import React, {FC} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './createReferralCode.style';
import useCreateReferralCode from './useCreateReferralCode';

export interface CreateReferralProps {
  code: string | undefined;
  referralBy: string | undefined;
  discount: string | undefined;
  comment: string | undefined;
  isCopyCode: boolean;
}
export interface CreateReferralErrorProps {
  code: string | undefined;
  referralBy: string | undefined;
  discount: string | undefined;
  comment: string | undefined;
}
const CreateReferralCode: FC = () => {
  const {
    referralCodeInfo,
    error,
    isDisabled,
    handleChangeValue,
    handleCopyCode,
  } = useCreateReferralCode();

  return (
    <KeyboardAvoidingView
      style={styles.keyboardView}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container
        wrapperType="scroll"
        headerShown
        backIconsShown
        lable="Referral management"
        containerStyle={styles.headerContainerStyle}>
        <InputContainer
          label="Create code"
          value={referralCodeInfo?.code}
          onChangeText={res => handleChangeValue(res, 'code')}
          containerStyle={styles.createCodeContainerStyle}
          inputContainerStyle={styles.createCodeInputContainerStyle}
          inputStyle={styles.createCodeInputStyle}
          error={error?.code}
        />
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.copyView}
          onPress={handleCopyCode}>
          {referralCodeInfo?.isCopyCode ? (
            <SvgIndex.copyAllPurple />
          ) : (
            <SvgIndex.copyAll />
          )}
          <Text
            style={[
              styles.copyText,
              referralCodeInfo?.isCopyCode && styles.isCopyCode,
            ]}>
            Copy code
          </Text>
        </TouchableOpacity>
        <InputContainer
          label="Referral by"
          value={referralCodeInfo?.referralBy}
          onChangeText={res => handleChangeValue(res, 'referralBy')}
          containerStyle={styles.containerStyleRef}
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.inputStyle}
          error={error?.referralBy}
        />
        <InputContainer
          label="Discount"
          value={referralCodeInfo?.discount}
          onChangeText={res => handleChangeValue(res, 'discount')}
          containerStyle={styles.containerView}
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.inputStyle}
          error={error?.discount}
        />
        <InputContainer
          label="Write a comment"
          labelSecondOptional=" (optional)"
          value={referralCodeInfo?.comment}
          onChangeText={res => handleChangeValue(res, 'comment')}
          containerStyle={styles.containerView}
          inputContainerStyle={styles.inputContainerStyle}
          inputStyle={styles.inputStyle}
          multiline
          error={error?.comment}
        />
      </Container>
      <View style={styles.btnView}>
        <Button
          label="Save"
          containerStyle={styles.btnStyle}
          disabled={isDisabled}
          inActive={isDisabled}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default CreateReferralCode;
