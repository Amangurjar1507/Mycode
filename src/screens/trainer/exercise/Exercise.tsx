import {ProgramsCard} from '@card';
import {Button, Container, ModalComponent, SearchBar} from '@components';
import imageIndex from '@imageIndex';
import {default as SvgIndex, default as svgIndex} from '@svgIndex';
import color from '@theme/color';
import React, {FC} from 'react';
import {FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Video from 'react-native-video';
import styles from './exercise.style';
import {exerciseData, instructionsData} from './exerciseData.const';
import useExercise from './useExercise';
export interface ExerciseStateProps {
  videoShow: boolean;
  selectedExerciseItems: Array<object>;
}
const Exercise: FC = () => {
  const {
    onAdd,
    videoRef,
    onShowVideo,
    onSelectExercise,
    exercise,
    onFilters,
    onNewExercise,
  } = useExercise();
  return (
    <>
      <Container
        wrapperType="form"
        headerShown
        backIconsShown
        lable="Exercise"
        statusBarColor={color.secondaryBG}
        scrollContainerStyle={styles.screenBackgroundContainerStyle}
        containerViewStyle={styles.screenBackgroundContainerStyle}
        containerStyle={styles.headerContainerStyle}>
        <SearchBar
          label={`Search Exercises`}
          placeholderTextColor={color.secondaryBG}
          showAddIcon={true}
          showFilterIcon={true}
          containerStyle={styles.searchbarContainer}
          searchIcon={svgIndex.searchWhite}
          onPressFilterIcon={onFilters}
          onPressAddIcon={onNewExercise}
        />
        <FlatList
          data={exerciseData}
          keyExtractor={(item, index) => {
            return `${index}`;
          }}
          renderItem={({item, index}) => {
            const isSelected = exercise?.selectedExerciseItems?.includes(item);
            return (
              <ProgramsCard
                key={index}
                item={item}
                index={index}
                onPress={() => onSelectExercise(item)}
                onPressIcon={onShowVideo}
                infoIconShown
                isSelected={isSelected}
              />
            );
          }}
          showsVerticalScrollIndicator={false}
        />
      </Container>
      <ModalComponent
        visible={exercise?.videoShow}
        animationType="slide"
        containerStyle={styles.modalContainer}
        statusBar>
        <ScrollView
          style={styles.modalMainView}
          bounces={false}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">
          <View style={styles.modalViewTitleStyle}>
            <Text style={styles.modalTitleStyle}>1 1/4 Front Squat</Text>
            <TouchableOpacity
              onPress={onShowVideo}
              style={styles.modalCloseIconStyle}>
              <SvgIndex.close />
            </TouchableOpacity>
          </View>
          <Video
            ref={videoRef}
            source={imageIndex.splashVideo}
            style={styles.videoModalStyle}
            resizeMode="cover"
            muted={true}
            controls={true}
          />
          <View style={styles.bodyViewStyle}>
            <SvgIndex.body />
            <Text style={styles.bodyTextStyle}>
              Full body, Abs & Core, Booty, Arms, Resistance
            </Text>
          </View>
          <Text style={styles.instructionsStyleText}>Instructions:</Text>
          <FlatList
            data={instructionsData}
            keyExtractor={(item, index) => {
              return `${index}`;
            }}
            renderItem={({item}) => (
              <Text style={styles.instructionsDescriptionStyleText}>
                {item?.id}
                {'. '}
                {item?.title}
              </Text>
            )}
            showsVerticalScrollIndicator={false}
          />
          <View style={styles.variationViewStyle}>
            <Text style={styles.variationTextStyle}>Variations</Text>
            <Text style={styles.variationTextDescriptionStyle}>
              This exercise can also be performed without a hyperextension
              bench, but in this case you will need a spotter. Also, a similar
              exercise to this one is the good morning and the stiff-legged
              deadlift.
            </Text>
          </View>
        </ScrollView>
      </ModalComponent>
      {exercise?.selectedExerciseItems?.length > 0 ? (
        <Button
          onPress={onAdd}
          label="Add"
          containerStyle={styles.bottonView}
          marginHorizontal={68}
        />
      ) : null}
    </>
  );
};

export default Exercise;
