import {MyWorkoutLibraryCard} from '@card';
import {ConfirmationModal, Container, SearchBar} from '@components';
import imageIndex from '@imageIndex';
import {default as SvgIndex, default as svgIndex} from '@svgIndex';
import color from '@theme/color';
import React, {FC} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './myWorkoutLibrary.style';
import {MyWorkoutLibraryData} from './myWorkoutLibraryData.const';
import useMyWorkoutLibrary from './useMyWorkoutLibrary';

export interface MyWorkoutLibraryStateProps {
  cardSelectShow: boolean;
  deleteModalShow: boolean;
  selectIndex: number | undefined;
}
const MyWorkoutLibrary: FC = () => {
  const {onClickCard, onDeleteModal, onAddNewExercise, myWorkoutLibrary} =
    useMyWorkoutLibrary();
  return (
    <>
      <Container
        wrapperType="form"
        headerShown
        backIconsShown
        lable="My Workout Library"
        containerStyle={styles.headerContainer}>
        <SearchBar
          label={`Search Exercises`}
          placeholderTextColor={color.secondaryBG}
          showAddIcon={true}
          showFilterIcon={true}
          containerStyle={styles.searchbarContainer}
          onPressAddIcon={onAddNewExercise}
          searchIcon={svgIndex.searchWhite}
        />
        {myWorkoutLibrary?.cardSelectShow ? (
          <View style={styles.selectShowView}>
            <View style={styles.rowView}>
              <Text style={styles.backTextStyle}>Back Squat</Text>
              <View style={styles.editIconStyle}>
                <SvgIndex.editLine />
              </View>
              <TouchableOpacity onPress={onDeleteModal}>
                <SvgIndex.deleteSmal />
              </TouchableOpacity>
            </View>
            <Image
              style={styles.videoImageStyle}
              source={imageIndex.videoShowCard}
              resizeMode="cover"
            />
            <Text style={styles.coachTextStyle}>Coach Instructions</Text>
            <Text style={styles.descriptionTextStyle}>
              Lie face down on a hyperextension bench, tucking your ankles
              securely under the footpads. Adjust the upper pad if possible so
              your upper thighs lie flat across the wide pad, leaving enough
              room for you to bend at the waist without any restriction. With
              your body straight, cross your arms in front of you (my
              preference) or behind your head.{' '}
            </Text>
          </View>
        ) : (
          <View style={styles.selectView}>
            <Text style={styles.selectTextStyle}>
              Select an exercise to view it, or{'\n'}
              click on the “+” button to{'\n'}
              another exercise to your library
            </Text>
          </View>
        )}
        <FlatList
          data={MyWorkoutLibraryData}
          keyExtractor={(item, index) => {
            return `${index}`;
          }}
          contentContainerStyle={styles.contentContainerStyle}
          numColumns={2}
          renderItem={({item, index}) => (
            <MyWorkoutLibraryCard
              key={index}
              item={item}
              index={index}
              onPress={() => onClickCard(index)}
              selectIndexMatch={myWorkoutLibrary?.selectIndex}
            />
          )}
        />
      </Container>
      <ConfirmationModal
        visible={myWorkoutLibrary?.deleteModalShow}
        animationType="slide"
        image={imageIndex.deleteAccount}
        titleText={`Delete Exercise`}
        desText={`Are you sure you want to delete Back\nSquats? You will lose it’s data`}
        cancelLabel="Cancel"
        confirmLabel="Yes"
        onConfirm={onDeleteModal}
        onCancel={onDeleteModal}
        confirmBtnStyle={styles.confirmBtnStyle}
        cancelLableStyle={styles.cancelLableStyle}
      />
    </>
  );
};

export default MyWorkoutLibrary;
