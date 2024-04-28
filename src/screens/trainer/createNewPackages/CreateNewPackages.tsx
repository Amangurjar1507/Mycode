import {ProgramsCard, UploadCard} from '@card';
import {Button, Container, InputContainer} from '@components';
import SvgIndex from '@svgIndex';
import color from '@theme/color';
import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {programsList} from './createNewPackages.const';
import {styles} from './createNewPackages.style';
import useCreateNewPackages from './useCreateNewPackages';

const CreateNewPackages: React.FC = () => {
  const {onNavigateToProgramsScreen} = useCreateNewPackages();
  return (
    <>
      <Container
        wrapperType="form"
        headerShown
        backIconsShown
        lable="Create New Program"
        containerStyle={styles.headerContainerStyle}>
        <InputContainer
          containerStyle={styles.inputContainer}
          inputContainerStyle={styles.inputContainerStyle}
          placeholder="Enter a package name"
          placeholderTextColor={color.primaryText}
          label="Package name"
          labelStyle={styles.inputLabelStyle}
        />
        <InputContainer
          containerStyle={styles.inputContainer}
          inputContainerStyle={styles.desInputContainerStyle}
          placeholder="Enter a package Description"
          placeholderTextColor={color.primaryText}
          label="Package Description"
          labelSecondOptional="(optional)"
          labelStyle={styles.inputLabelStyle}
          multiline
          numberOfLines={5}
        />
        {/* Thumbnails images */}
        <Text style={styles.lable}>Thumbnail Images</Text>
        <View style={styles.thumbnailView}>
          <UploadCard
            icon={SvgIndex.upload}
            uploadText="Upload your Thumbnail Image"
            ratioText="1:1 ratio image"
            onPress={() => {}}
            containerStyle={styles.uploadCardContainer}
            uploadContainerStyle={styles.uploadImageStyle}
          />
          <UploadCard
            icon={SvgIndex.upload}
            uploadText="Upload your Thumbnail Image"
            ratioText="16:9 ratio image"
            onPress={() => {}}
            uploadContainerStyle={styles.uploadImageRatioStyle}
          />
        </View>

        {/* Trailer video */}
        <UploadCard
          icon={SvgIndex.upload}
          lable="Trailer Video"
          optionalLable="(optional)"
          uploadText="Upload your trailer video"
          onPress={() => {}}
          containerStyle={styles.uploadCardContainer}
        />

        {/* Added Porgrams */}
        <View style={styles.addedView}>
          <View style={styles.headingView}>
            <Text style={styles.AddProgramLable}>Added Programs</Text>
            <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
              <Text style={styles.addBtnText}>+ Add</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={programsList}
            contentContainerStyle={styles.contentContainerStyle}
            keyExtractor={(item, index) => {
              return `${index}`;
            }}
            renderItem={({item, index}) => (
              <ProgramsCard
                key={index}
                item={item}
                index={index}
                onPress={() => {}}
                deleteIconShown
              />
            )}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={<View style={styles.footerSpace} />}
          />
        </View>
      </Container>
      <View style={styles.btnView}>
        <Button
          type="Outline"
          label="Save"
          containerStyle={styles.cancelBtnStyle}
          nameTextStyle={styles.cancelBtnText}
        />
        <Button
          type="Solid"
          label="Review"
          containerStyle={styles.createPackagesBtnStyle}
          nameTextStyle={styles.createPackagesStyle}
          onPress={onNavigateToProgramsScreen}
        />
      </View>
    </>
  );
};

export default CreateNewPackages;
