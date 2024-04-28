import {Button, Container, Dropdown, InputContainer} from '@components';
import SvgIndex from '@svgIndex';
import React, {FC} from 'react';
import {KeyboardAvoidingView, Platform, Text, View} from 'react-native';
import styles from './newExercise.style';
import useNewExercise from './useNewExercise';

const NewExercise: FC = () => {
  const {exerciseInfo, isDisabled, handleChangeValue, onToggleDropdown} =
    useNewExercise();

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container
        wrapperType="scroll"
        headerShown
        lable="New Exercise"
        backIconsShown
        containerStyle={styles.headerContainer}>
        <View style={styles.mainContainers}>
          <InputContainer
            placeholder="Enter Exercise Name"
            label="Exercise Name"
            keyboardType="email-address"
            inputContainerStyle={styles.inputBoxStyle}
            containerStyle={styles.inputContainerStyle}
            value={exerciseInfo?.exerciseName}
            onChangeText={res => handleChangeValue(res, 'exerciseName')}
          />
          <View style={styles.dropDownView}>
            <View style={styles.leftFlex}>
              <Dropdown
                label="Default Parameters"
                placeholder="Sets"
                mainViewStyle={styles.mainViewStyle}
                containerStyle={styles.containerStyle}
                data={exerciseInfo?.setsList}
                isOpen={exerciseInfo?.isOpenSets}
                setIsopen={() =>
                  onToggleDropdown(exerciseInfo?.isOpenSets, 'isOpenSets')
                }
                onPress={() =>
                  onToggleDropdown(exerciseInfo?.isOpenSets, 'isOpenSets')
                }
                value={exerciseInfo?.setsValue}
                setValue={res => handleChangeValue(res, 'setsValue')}
              />
            </View>
            <View style={styles.rightFlex}>
              <Dropdown
                label=" "
                placeholder="Reps"
                mainViewStyle={styles.mainViewStyle}
                containerStyle={styles.containerStyle}
                data={exerciseInfo?.repsList}
                isOpen={exerciseInfo?.isOpenReps}
                setIsopen={() =>
                  onToggleDropdown(exerciseInfo?.isOpenReps, 'isOpenReps')
                }
                onPress={() =>
                  onToggleDropdown(exerciseInfo?.isOpenReps, 'isOpenReps')
                }
                value={exerciseInfo?.repsValue}
                setValue={res => handleChangeValue(res, 'repsValue')}
              />
            </View>
          </View>
          <View style={styles.dropDownView}>
            <View style={styles.leftFlex}>
              <Dropdown
                label="Type"
                placeholder="Select Exercise Type"
                mainViewStyle={styles.mainViewStyle}
                containerStyle={styles.containerStyle}
                data={exerciseInfo?.typeList}
                isOpen={exerciseInfo?.isOpenType}
                setIsopen={() =>
                  onToggleDropdown(exerciseInfo?.isOpenType, 'isOpenType')
                }
                onPress={() =>
                  onToggleDropdown(exerciseInfo?.isOpenType, 'isOpenType')
                }
                value={exerciseInfo?.typeValue}
                setValue={res => handleChangeValue(res, 'typeValue')}
              />
            </View>
            <View style={styles.rightFlex}>
              <Dropdown
                label="Tags"
                placeholder="Select Tags"
                mainViewStyle={styles.mainViewStyle}
                containerStyle={styles.containerStyle}
                data={exerciseInfo?.tagsList}
                isOpen={exerciseInfo?.isOpenTags}
                setIsopen={() =>
                  onToggleDropdown(exerciseInfo?.isOpenType, 'isOpenTags')
                }
                onPress={() =>
                  onToggleDropdown(exerciseInfo?.isOpenType, 'isOpenTags')
                }
                value={exerciseInfo?.tagsValue}
                setValue={res => handleChangeValue(res, 'tagsValue')}
              />
            </View>
          </View>
          <Dropdown
            label="Equipment"
            placeholder="Select equipments"
            mainViewStyle={styles.mainViewStyle}
            containerStyle={styles.containerStyle}
            data={exerciseInfo?.equipmentList}
            isOpen={exerciseInfo?.isOpenEquipment}
            setIsopen={() =>
              onToggleDropdown(exerciseInfo?.isOpenEquipment, 'isOpenEquipment')
            }
            onPress={() =>
              onToggleDropdown(exerciseInfo?.isOpenEquipment, 'isOpenEquipment')
            }
            value={exerciseInfo?.equipmentValue}
            setValue={res => handleChangeValue(res, 'equipmentValue')}
          />
          <View style={styles.dropDownView}>
            <View style={styles.leftFlex}>
              <Dropdown
                label="Main Muscle"
                placeholder="Select Muscle"
                mainViewStyle={styles.mainViewStyle}
                containerStyle={styles.containerStyle}
                data={exerciseInfo?.mainMuscleList}
                isOpen={exerciseInfo?.isOpenMainMuscle}
                setIsopen={() =>
                  onToggleDropdown(
                    exerciseInfo?.isOpenMainMuscle,
                    'isOpenMainMuscle',
                  )
                }
                onPress={() =>
                  onToggleDropdown(
                    exerciseInfo?.isOpenMainMuscle,
                    'isOpenMainMuscle',
                  )
                }
                value={exerciseInfo?.mainMuscleValue}
                setValue={res => handleChangeValue(res, 'mainMuscleValue')}
              />
            </View>
            <View style={styles.rightFlex}>
              <Dropdown
                label="Secondary Muscle"
                placeholder="Select Muscle"
                mainViewStyle={styles.mainViewStyle}
                containerStyle={styles.containerStyle}
                data={exerciseInfo?.secondaryMuscleList}
                isOpen={exerciseInfo?.isOpenSecondaryMuscle}
                setIsopen={() =>
                  onToggleDropdown(
                    exerciseInfo?.isOpenSecondaryMuscle,
                    'isOpenSecondaryMuscle',
                  )
                }
                onPress={() =>
                  onToggleDropdown(
                    exerciseInfo?.isOpenSecondaryMuscle,
                    'isOpenSecondaryMuscle',
                  )
                }
                value={exerciseInfo?.secondaryMuscleValue}
                setValue={res => handleChangeValue(res, 'secondaryMuscleValue')}
              />
            </View>
          </View>
          <View style={styles.imageRowViewMain}>
            <Text style={styles.imageText}>Upload video</Text>
            <View style={styles.videoUploadContanier}>
              <SvgIndex.upload width={43} height={29} />
              <Text style={styles.uploadTextRegular}>Upload Video</Text>
            </View>
          </View>
        </View>
      </Container>
      <View style={styles.btnContainer}>
        <Button
          disabled={isDisabled}
          inActive={isDisabled}
          label="Save"
          containerStyle={styles.bottonView}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default NewExercise;
