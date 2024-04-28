import { Button, Container, CustomDatePicker, InputContainer } from '@components';
import svgIndex from '@svgIndex';
import React, { FC } from 'react';
import { KeyboardAvoidingView, Platform, Text, View } from 'react-native';
import styles from './otherDetails.style';
import useOtherDetails from './useOtherDetails';

export interface OtherDetailsProps {
  tellUsInfo: TellUsInfoProps;
  error: TellUsErrorProps;
  isDisabled: () => void;
  handleChangeValue: (value: string, state: string) => void;
  onValidate: () => void;
}

export interface TellUsInfoProps {
  education: string;
  experience: string;
  experienceFormat: string;
  instagram: string | undefined;
  tiktok: string | undefined;
  youtube: string | undefined;
  about: string;
  selectLocation: string;
  selectModal: boolean;
  loading: boolean;
}

export interface TellUsErrorProps {
  education?: string | undefined;
  experience?: string | undefined;
  location?: string | undefined;
  instagram?: string | undefined;
  tiktok?: string | undefined;
  youtube?: string | undefined;
  about?: string | undefined;
}

const OtherDetails: FC = () => {
  const {
    tellUsInfo,
    error,
    isDisabled,
    handleChangeValue,
    onValidate,
    onPressLocation,
    StepFirstWithSecondStep,
    experienceHandler,
  } = useOtherDetails();


  return (
    <KeyboardAvoidingView
      style={styles.keyView}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container
        wrapperType="scroll"
        headerShown
        backIconsShown
        headingText="Tell Us More"
        headingDesText={`This will be part of your profile and will be presented to \nother people.`}
        descriptionStyle={styles.description}
        headingDesTextStyle={styles.headingDesTextStyle}
        containerStyle={styles.headerContainerStyle}>
        <View style={styles.inputContainer}>
          <InputContainer
            labelSecond="Education & Qualification"
            placeholder="Enter education & qualifaication"
            onChangeText={res => handleChangeValue(res, 'education')}
            value={tellUsInfo?.education}
            error={error.education}
            validationLabelcolor={true}
          />
          {/* <CalenderPicker
            label="Experience"
            placeholder="Years of Experience"
            value={
              tellUsInfo?.experience == ''
                ? 'Experience'
                : tellUsInfo?.experience?.toString()
            }
            onSelectedDate={res => handleChangeValue(res, 'experience')}
            error={error.experience}
            experienceShow={true}
            experienceYear={diffYears}
          /> */}
          <CustomDatePicker
            label="Experience"
            placeholder="Years of Experience"
            onDateChange={(res: any) => experienceHandler(res)}
            value={tellUsInfo?.experience}
          />
          <InputContainer
            value={StepFirstWithSecondStep?.selectLocation}
            labelSecond="Location"
            placeholder="Select Location"
            rightElementType="dropdown"
            onPressDropdown={onPressLocation}
            editable={false}
          />
        </View>
        {/* Social Media Details */}
        <View style={styles.socialView}>
          <Text style={styles.socialHeadingText}>Social</Text>
          <InputContainer
            labelSecond="Instagram"
            labelSecondIcon={svgIndex.instagram}
            placeholder="@  What is your Instagram Handle? (optional)"
            onChangeText={res => handleChangeValue(res, 'instagram')}
            value={tellUsInfo?.instagram}
            error={error.instagram}
            containerStyle={{ marginBottom: 49 }}
          />
          <InputContainer
            labelSecond="Tiktok"
            labelSecondIcon={svgIndex.tiktok}
            placeholder="@  What is your Tiktok Handle? (optional)"
            onChangeText={res => handleChangeValue(res, 'tiktok')}
            value={tellUsInfo?.tiktok}
            error={error.tiktok}
            containerStyle={styles.inputView}
          />
          <InputContainer
            labelSecond="Youtube"
            labelSecondIcon={svgIndex.ytLable}
            placeholder="@  What is your youtube Handle? (optional)"
            onChangeText={res => handleChangeValue(res, 'youtube')}
            value={tellUsInfo?.youtube}
            error={error.youtube}
            containerStyle={styles.youtubeContainer}
          />
          <InputContainer
            label="About"
            placeholder="Tell more about you"
            inputContainerStyle={styles.inputContainerStyle}
            onChangeText={res => handleChangeValue(res, 'about')}
            value={tellUsInfo?.about}
            multiline
            error={error.about}
            containerStyle={styles.aboutInput}
          />
        </View>
      </Container>
      <View style={styles.buttonContainer}>
        <Button
          label="Continue"
          onPress={onValidate}
          disabled={isDisabled}
          inActive={isDisabled}
          containerStyle={styles.btnContainerStyle}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default OtherDetails;
