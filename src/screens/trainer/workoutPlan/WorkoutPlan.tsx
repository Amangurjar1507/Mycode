import React, {FC} from 'react';
import {
  Text,
  View,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from './workoutPlan.style';
import color from '@theme/color';
import {
  Button,
  ClipCard,
  CollapsibleCard,
  Container,
  InputContainer,
  ModalComponent,
} from '@components';
import SvgIndex from '@svgIndex';
import useWorkoutPlan from './useWorkoutPlan';
import imageIndex from '@imageIndex';
import {
  WeekData,
  expandAllDataSession,
  typeData,
} from './workoutPlanData.const';
import {WeekCard} from '@card';

export interface WorkoutPlanStateProps {
  selectedIndex?: number;
  publishModalShow: boolean;
}
const WorkoutPlan: FC = () => {
  const {onViewAsUser, onDoneModal, workoutPlan, onExpandClick} =
    useWorkoutPlan();
  return (
    <>
      <Container
        wrapperType="scroll"
        lable="Yash’s amazing workout plan"
        headerShown
        backIconsShown
        statusBarColor={color.priceTagBG}
        scrollContainerStyle={styles.container}
        containerViewStyle={styles.container}
        containerStyle={styles.headerContainerStyle}>
        <View style={styles.inputContentContainers}>
          <ImageBackground
            style={styles.bgImageStyle}
            source={imageIndex.programsBG}>
            <View style={styles.manageViewSpaceStyle}>
              <TouchableOpacity
                onPress={onViewAsUser}
                activeOpacity={0.8}
                style={styles.viewUserStyle}>
                <Text style={styles.viewUserText}>View as user</Text>
                <SvgIndex.eyeBorder />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.VideoUserStyle}>
                <Text style={styles.videoUserText}>Play trailer</Text>
                <SvgIndex.play />
              </TouchableOpacity>
            </View>
          </ImageBackground>
          <View>
            <FlatList
              data={typeData}
              contentContainerStyle={styles.contentContainerStyle}
              keyExtractor={(item, index) => `${index}`}
              horizontal
              renderItem={({item, index}) => (
                <ClipCard
                  title={item.title}
                  onPress={() => {}}
                  nameStyle={styles.clipText}
                  container={styles.clipContainer}
                />
              )}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View style={styles.titleRowViewStyle}>
            <SvgIndex.target />
            <Text style={styles.fullTitle}>
              Full body, Abs & Core, Booty, Arms, Resistance
            </Text>
          </View>
          <View style={styles.titleRowViewStyle}>
            <SvgIndex.dumbbel />
            <Text style={styles.fullTitle}>
              Full body, Abs & Core, Booty, Arms, Resistance
            </Text>
          </View>
          <View style={styles.horizontalStyle}>
            <Text style={styles.detailsTextStyle}>Details</Text>
            <Text style={styles.decriptionTextStyle}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse
            </Text>
          </View>
          <View style={styles.cardStyleLight}>
            <Text style={styles.priceStructureText}>Price Structure</Text>
            <View style={styles.styleRowInputManage}>
              <SvgIndex.radioEmpty />
              <Text style={styles.priceRadioEmptyText}>Fixed Price</Text>
              <InputContainer
                placeholder="Enter price in USD"
                keyboardType="number-pad"
                placeholderTextColor={color.primaryText}
                inputContainerStyle={styles.sessionNameInputStyle}
                inputStyle={styles.centnerInputStyle}
                containerStyle={styles.containerStyles}
              />
            </View>
            <View style={styles.styleRowInputManage}>
              <SvgIndex.radiofilled />
              <Text style={styles.subscriptionRadioText}>Subscription</Text>
            </View>
            <Text style={styles.priceDecriptionText}>
              The price you set for your program or package is the amount that
              will be displayed to the potential buyers. However, this price is
              not the final amount that you will receive. The payment processor,
              our platform, and the tax authorities will deduct their respective
              fees and taxes from this price. You can learn more by checking our
            </Text>
          </View>
          <Button
            onPress={onDoneModal}
            label="Publish"
            containerStyle={styles.buttonContainerStyles}
            marginHorizontal={68}
          />
          <View style={styles.weekMainShowSessionView}>
            <View style={styles.weekRowViewManage}>
              <Text style={styles.weekTextStyle}>Week 1</Text>
              <SvgIndex.downArrowLine />
            </View>
            <FlatList
              data={WeekData}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index}) => (
                <WeekCard
                  item={item}
                  key={index}
                  index={index}
                  onPress={() => {}}
                  selectIndex={0}
                />
              )}
            />
          </View>
          <View style={styles.weekMainShowSessionView}>
            <View style={styles.weekRowViewManage}>
              <Text style={styles.weekTextStyle}>Week 2</Text>
            </View>
            <FlatList
              data={WeekData}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index}) => (
                <WeekCard
                  item={item}
                  key={index}
                  index={index}
                  onPress={() => {}}
                />
              )}
            />
          </View>
          <View style={styles.weekMainShowSessionView}>
            <View style={styles.weekRowViewManage}>
              <Text style={styles.weekTextStyle}>Week 3</Text>
            </View>
            <FlatList
              data={WeekData}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index}) => (
                <WeekCard
                  item={item}
                  key={index}
                  index={index}
                  onPress={() => {}}
                />
              )}
            />
          </View>
          <FlatList
            data={expandAllDataSession}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.flatListSessionStyle}
            renderItem={({item, index}) => (
              <CollapsibleCard
                containerStyle={styles.CollapsibleCardContainerStyle}
                contentStyle={styles.CollapsibleContentStyle}
                title={item?.title}
                smallIconDrop
                content={
                  <View style={styles.contentView}>
                    <View style={styles.sessionRowViewStyle}>
                      <Text style={styles.decTextStyle}>
                        Overhead Kettlebell Swings
                      </Text>
                      <Text style={styles.repsTextStyle}>
                        Sets: {item?.descriptionsSets} Reps:{' '}
                        {item?.descriptionsReps}
                      </Text>
                    </View>
                    <View style={styles.sessionRowViewStyle}>
                      <Text style={styles.decTextStyle}>
                        Overhead Kettlebell Swings
                      </Text>
                      <Text style={styles.repsTextStyle}>
                        Sets: {item?.descriptionsSets} Reps:{' '}
                        {item?.descriptionsReps}
                      </Text>
                    </View>
                    <View style={styles.sessionRowViewStyleBorderZero}>
                      <Text style={styles.decTextStyle}>
                        Overhead Kettlebell Swings
                      </Text>
                      <Text style={styles.repsTextStyle}>
                        Sets: {item?.descriptionsSets} Reps:{' '}
                        {item?.descriptionsReps}
                      </Text>
                    </View>
                  </View>
                }
              />
            )}
          />
        </View>
      </Container>
      <ModalComponent
        visible={workoutPlan?.publishModalShow}
        animationType="fade"
        containerStyle={styles.modalContainer}>
        <View style={styles.modalStyle}>
          <SvgIndex.sheetIcon />
          <Text style={styles.congratulationsTitle}>Congratulations!</Text>
          <Text style={styles.congratulationsDescriptionText}>
            Your program is now published. You can see the program on the
            program screen.
          </Text>
          <Button
            onPress={onDoneModal}
            label="Done"
            type="Solid"
            containerStyle={styles.buttonStyleContent}
          />
        </View>
      </ModalComponent>
    </>
  );
};

export default WorkoutPlan;
