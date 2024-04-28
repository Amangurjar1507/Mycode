import {
  Button,
  Container,
  Dropdown,
  InputContainer,
  ModalComponent,
} from '@components';
import imageIndex from '@imageIndex';
import SvgIndex from '@svgIndex';
import color from '@theme/color';
import React, {FC} from 'react';
import {Image, Text, View} from 'react-native';
import styles from './createNewProgram.style';
import useCreateNewProgram from './useCreateNewProgram';

const CreateNewProgram: FC = () => {
  const {onCreateProgram, modalHandler, submitModal} = useCreateNewProgram();
  return (
    <View style={styles.inputContentContainers}>
      <Container
        wrapperType="form"
        headerShown
        backIconsShown
        lable="Create New Program"
        statusBarColor={color.primaryBG}
        containerViewStyle={styles.ContentContainerStyleBgc}
        scrollContainerStyle={styles.ContentContainerStyleBgc}
        containerStyle={styles.headerContainerStyle}>
        <View style={styles.inputContent}>
          <InputContainer
            placeholder="Enter a program name"
            placeholderTextColor={color.primaryText}
            label="Program Name"
            labelStyle={styles.inputLabelStyle}
            keyboardType="email-address"
            inputContainerStyle={styles.ProgramNameInputStyle}
            inputStyle={styles.inputTextStyle}
            containerStyle={styles.inputMainStyle}
          />
          <InputContainer
            placeholder="Enter a program description"
            placeholderTextColor={color.primaryText}
            label="Program Description"
            labelStyle={styles.inputLabelStyle}
            labelSecondOptional="(optional)"
            keyboardType="email-address"
            inputContainerStyle={styles.programDescription}
            multiline
            inputStyle={styles.inputTextStyle}
            containerStyle={styles.inputMainStyle}
          />
          <View style={styles.rowHorizantal}>
            <View style={styles.dropDownRowView}>
              <Dropdown
                mainViewStyle={styles.dropDownContainerStyle}
                placeholder="Enter Training Type"
                label="Workout Type"
                lableStyle={styles.dropDownLabelTextStyle}
                containerStyle={styles.containerStyle}
                placeholderStyle={styles.dropDownPlaceholderStyle}
              />
              <View style={styles.dropDownSpaceManage} />
              <Dropdown
                mainViewStyle={styles.dropDownContainerStyle}
                placeholder="Enter difficulty"
                label="Level of difficulty"
                containerStyle={styles.containerStyle}
                lableStyle={styles.dropDownLabelTextStyle}
                placeholderStyle={styles.dropDownPlaceholderStyle}
              />
            </View>
            <View style={styles.dropDownRowView}>
              <Dropdown
                mainViewStyle={styles.dropDownContainerStyle}
                containerStyle={styles.containerStyle}
                placeholder="Duration (weeks)"
                label="Number of weeks*"
                lableStyle={styles.dropDownLabelTextStyle}
                placeholderStyle={styles.dropDownPlaceholderStyle}
              />
              <View style={styles.dropDownSpaceManage} />
              <Dropdown
                mainViewStyle={styles.dropDownContainerStyle}
                containerStyle={styles.containerStyle}
                placeholder="Select Language"
                label="Language"
                lableStyle={styles.dropDownLabelTextStyle}
                placeholderStyle={styles.dropDownPlaceholderStyle}
              />
            </View>
          </View>
          <View style={styles.imageRowViewMain}>
            <Text style={styles.imageText}>Thumbnail Images</Text>
            <View style={styles.imageUploadRowViewStyle}>
              <View style={styles.imageUploadContanier}>
                <SvgIndex.upload />
                <Text style={styles.uploadTextRegular}>
                  Upload a {'\n'}squared image
                </Text>
              </View>
              <View style={styles.imageUploadRation}>
                <SvgIndex.upload />
                <Text style={styles.uploadTextRegular}>
                  Upload 16:9 ratio image
                </Text>
              </View>
            </View>
          </View>
          {/* second video upload */}
          <View style={styles.trailerVideoRowViewMain}>
            <Text style={styles.imageText}>
              Trailer Video{' '}
              <Text style={[styles.imageText, styles.optionalTextStyle]}>
                (optional)
              </Text>
            </Text>
            <View style={styles.imageUploadRowViewStyle}>
              <View style={styles.videoUploadContanier}>
                <SvgIndex.upload />
                <Text style={styles.uploadTextRegular}>
                  Upload your trailer video
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Container>
      <ModalComponent
        visible={submitModal}
        animationType="fade"
        containerStyle={styles.modalContainer}>
        <View style={styles.modalInnerContainer}>
          <Image
            source={imageIndex.logout}
            resizeMode="contain"
            style={styles.imageStyle}
          />
          <Text style={[styles.modalTitleText]}>
            Are you sure you want to go back without saving?
          </Text>
          <View style={styles.btnView}>
            <Button
              label="Yes"
              type="Solid"
              containerStyle={styles.btnSolidContainer}
              nameTextStyle={styles.namesSolidButtonTextStyle}
              onPress={() => modalHandler()}
            />
            <Button
              label="Cancel"
              type="Solid"
              containerStyle={styles.btnContainer}
              nameTextStyle={styles.nameTextStyle}
              onPress={() => modalHandler()}
            />
          </View>
        </View>
      </ModalComponent>
      <Button
        onPress={onCreateProgram}
        label="Create Program"
        containerStyle={styles.bottonView}
        marginHorizontal={68}
      />
    </View>
  );
};

export default CreateNewProgram;
