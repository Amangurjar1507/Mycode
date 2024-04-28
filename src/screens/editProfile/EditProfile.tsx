import { Button, ClipCard, Container, InputContainer } from '@components';
import imageIndex from '@imageIndex';
import { default as SvgIndex, default as svgIndex } from '@svgIndex';
import React, { FC } from 'react';
import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './editProfile.style';
import { expertiseAddData } from './editProfileData.const';
import useEditProfile from './useEditProfile';
export interface EditProfileProps {
  fName: string;
  lName: string;
  education: string;
  selectLocation: string | undefined;
  experience: string;
  about: string;
  instagram: string | undefined;
  tikTok: string | undefined;
  youTube: string | undefined;
  profile: string | undefined;
  backgroundProfile: string | undefined;
  loading: boolean;
}

export interface EditProfileErrorProps {
  fName?: string | undefined;
  lName?: string | undefined;
  education?: string | undefined;
  selectLocation?: string | undefined;
  experience?: string | undefined;
  about?: string | undefined;
  instagram?: string | undefined;
  tikTok?: string | undefined;
  youTube?: string | undefined;
}
const EditProfile: FC = () => {
  const {
    onPressLocation,
    editProfile,
    onOpenImagePicker,
    handleChangeValue
  } = useEditProfile();
  return (
    <KeyboardAvoidingView
      style={styles.keyView}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container
        wrapperType="scroll"
        headerShown
        lable="Edit Profile"
        backIconsShown
        containerStyle={styles.headerContainerStyle}
        containerViewStyle={styles.containerViewStyle}
        lableStyle={styles.lableStyle}>
        <Image
          style={styles.backgroundImageStyle}
          source={
            editProfile?.backgroundProfile
              ? { uri: editProfile?.backgroundProfile }
              : imageIndex.profileImage
          }
          resizeMode="cover"
        />
        <View style={styles.userViewImage}>
          <TouchableOpacity onPress={() => onOpenImagePicker('profile')} style={styles.gallaryImage}>
            <SvgIndex.gallary />
          </TouchableOpacity>
          <Image style={styles.userImage}
            source={
              editProfile?.profile
                ? { uri: editProfile?.profile }
                : imageIndex.userProfile
            }
            resizeMode='contain'
          />
        </View>
        <TouchableOpacity onPress={() => onOpenImagePicker('backgroundProfile')} style={styles.selectGallerystyle}>
          <SvgIndex.gallary />
        </TouchableOpacity>
        <View style={styles.formView}>
          <InputContainer
            label="First Name"
            placeholder="First Name"
            value={editProfile?.fName}
            onChangeText={res => handleChangeValue(res, 'fName')}
            keyboardType="email-address"
            containerStyle={styles.containerStyles}
            inputContainerStyle={styles.inputContainerStyle}
          />
          <InputContainer
            label="Last Name"
            placeholder="Last Name"
            value={editProfile?.lName}
            onChangeText={res => handleChangeValue(res, 'lName')}
            keyboardType="email-address"
            containerStyle={styles.containerStyles}
            inputContainerStyle={styles.inputContainerStyle}
          />
          <InputContainer
            label="Education & Qualification"
            placeholder="Fitness Trainer"
            value={editProfile?.education}
            onChangeText={res => handleChangeValue(res, 'education')}
            keyboardType="email-address"
            containerStyle={styles.containerStyles}
            inputContainerStyle={styles.inputContainerStyle}
            editable={false}
          />
          <InputContainer
            label="Location"
            placeholder="Select Location"
            value={editProfile?.selectLocation}
            onChangeText={res => handleChangeValue(res, 'selectLocation')}
            rightElementType="dropdown"
            onPressDropdown={onPressLocation}
            containerStyle={styles.containerStyles}
            inputContainerStyle={styles.inputContainerStyle}
            editable={false}
          />
          <InputContainer
            label="Year of Experience"
            placeholder="5 years"
            value={editProfile?.experience}
            onChangeText={res => handleChangeValue(res, 'experience')}
            rightElementType="dropdown"
            onPressDropdown={onPressLocation}
            containerStyle={styles.containerStyles}
            inputContainerStyle={styles.inputContainerStyle}
          />
          <InputContainer
            label="About"
            placeholder="Tell more about you..."
            value={editProfile?.about}
            onChangeText={res => handleChangeValue(res, 'about')}
            keyboardType="email-address"
            containerStyle={styles.containerStyles}
            inputContainerStyle={styles.inputContainerStyle}
          />
          <Text style={styles.socialHeadingText}>Social</Text>
          <InputContainer
            label="Instagram"
            labelIcon={svgIndex.instagram}
            value={editProfile?.instagram}
            onChangeText={res => handleChangeValue(res, 'instagram')}
            placeholder="@  What is your Instagram Handle?"
            keyboardType="email-address"
            containerStyle={styles.containerStylesSocial}
            inputContainerStyle={styles.inputContainerStyle}
          />
          <InputContainer
            label="Tiktok"
            placeholder="@  What is your Tiktok Handle?"
            value={editProfile?.tikTok}
            onChangeText={res => handleChangeValue(res, 'tikTok')}
            keyboardType="email-address"
            labelIcon={svgIndex.tiktok}
            containerStyle={styles.containerStylesSocial}
            inputContainerStyle={styles.inputContainerStyle}
          />
          <InputContainer
            label="YouTube"
            placeholder="@  What is your youtube Handle?"
            value={editProfile?.youTube}
            onChangeText={res => handleChangeValue(res, 'youTube')}
            keyboardType="email-address"
            labelIcon={svgIndex.ytLable}
            containerStyle={styles.containerStylesSocial}
            inputContainerStyle={styles.inputContainerStyle}
          />
          <TouchableOpacity activeOpacity={0.8} style={styles.expertiseView}>
            <Text style={styles.textStyle}>Add Expertise +</Text>
          </TouchableOpacity>
          <FlatList
            data={expertiseAddData}
            contentContainerStyle={styles.contentContainerStyle}
            keyExtractor={(item, index) => `${index}`}
            numColumns={4}
            renderItem={({ item, index }) => (
              <ClipCard
                title={item.title}
                onPress={() => { }}
                nameStyle={
                  index === 1 || index === 3
                    ? styles.borderClipColorText
                    : styles.borderClipText
                }
                container={
                  index === 1 || index === 3
                    ? styles.borderClipColorStyle
                    : styles.borderClipStyle
                }
              />
            )}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </Container>
      <View style={styles.btnView}>
        <Button
          type="Solid"
          label="Save changes"
          containerStyle={styles.createPackagesBtnStyle}
          nameTextStyle={styles.createPackagesStyle}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default EditProfile;
