import React, {FC} from 'react';
import {FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Button, ClipCard, Container, InputContainer} from '@components';
import SvgIndex from '@svgIndex';
import color from '@theme/color';
import {WeekCard} from '@card';
import styles from './bodyWeightOnly.style';
import {
  WeekData,
  exploreCircuitData,
  sessionData,
  tableData,
  tableDataSuperset,
} from './bodyWeightOnlyData.const';
import useBodyWeightOnly from './useBodyWeightOnly';
import RBSheet from 'react-native-raw-bottom-sheet';
export interface BodyWeightOnlyStateProps {
  circuitAndSupersetShow: boolean;
  sessionShow: boolean;
  selectType?: string;
}
const BodyWeightOnly: FC = () => {
  const {
    onAddNewSession,
    onNewExercise,
    routeData,
    onClipOption,
    openMenuSheet,
    refRBSheet,
    // onNavAddNewSession,
    onClipCloseOption,
    bodyWeightOnly,
    onAddNewSessionClip,
    onPublish,
    onDuplicateSession,
  } = useBodyWeightOnly();
  return (
    <View style={styles.container}>
      <Container
        wrapperType="form"
        headerShown
        backIconsShown
        lable="Bodyweight only"
        statusBarColor={color.primaryBG}
        scrollContainerStyle={styles.screenBackgroundContainerStyle}
        containerViewStyle={styles.screenBackgroundContainerStyle}
        containerStyle={styles.headerContainerStyle}>
        {!bodyWeightOnly?.sessionShow ? (
          <View style={styles.ContentContainers}>
            <View style={[styles.weekMainView]}>
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
            <Text style={styles.weekConditionTextStyle}>Week 1 Day 1</Text>
            <InputContainer
              placeholder="Enter Session Name"
              placeholderTextColor={color.primaryText}
              label="Session Name"
              keyboardType="email-address"
              inputContainerStyle={styles.sessionNameInputStyle}
              containerStyle={styles.sessionInputStyle}
            />
            <View>
              <Text style={styles.imageText}>
                Add workout intro{' '}
                <Text style={[styles.imageText, styles.optionalTextStyle]}>
                  (optional)
                </Text>
              </Text>
              <View style={styles.imageUploadRowViewStyle}>
                <View style={styles.videoUploadContanier}>
                  <SvgIndex.upload />
                  <Text style={styles.uploadTextRegular}>
                    Upload your trailer video {'\n'}
                    Add a 16:9 ratio video
                  </Text>
                </View>
              </View>
            </View>
            {bodyWeightOnly?.circuitAndSupersetShow ? (
              <View style={styles.marginStyleTop}>
                <ClipCard
                  title={
                    bodyWeightOnly?.selectType == 'Superset  +'
                      ? 'Remove Superset  -'
                      : 'Remove Circuit  -'
                  }
                  onPress={onClipCloseOption}
                  nameStyle={styles.clipOpenTextStyle}
                  container={styles.clipOpenStyle}
                />
                <View style={styles.mainBorderStyle}>
                  <View style={styles.borderStylePosition}>
                    <Text style={styles.borderTitleStyle}>
                      {bodyWeightOnly?.selectType == 'Superset  +'
                        ? 'Superset'
                        : 'Circuit'}
                    </Text>
                    <View style={styles.iconPositionChangeHandler}>
                      <View style={styles.iconManageColor}>
                        <SvgIndex.hamburgPurpal />
                      </View>
                    </View>
                  </View>
                  <View style={styles.blackViewMain}>
                    <SvgIndex.checkboxFilled height={15} width={15} />
                    <Text style={styles.blackTextStyle}>Back Squat</Text>
                    <TouchableOpacity activeOpacity={0.8}>
                      <SvgIndex.deleteSolid />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.hamburgIconStyle}
                      activeOpacity={0.8}>
                      <SvgIndex.hamburg />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.uploadVideoStyle}>
                    <SvgIndex.upload />
                    <Text style={styles.uploadVideoText}>Upload Video</Text>
                  </View>
                  <View style={styles.coachInstructionsViewStyle}>
                    <View style={styles.rowView}>
                      <Text style={styles.coachTitleStyle}>
                        Coach Instructions
                      </Text>
                      <Text style={styles.wordTitleStyle}>0/10000</Text>
                    </View>
                    <TextInput
                      placeholder="Use this area to help the athlete understand goals for today’s session."
                      placeholderTextColor={color.secondaryText}
                      style={styles.inputTitleStyle}
                    />
                  </View>
                  <FlatList
                    data={tableDataSuperset}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.tableViewStyle}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => (
                      <View style={styles.tableViewMStyle}>
                        <Text style={styles.textTable}>{item.label}</Text>
                        <View style={styles.cardSetsViewRowStyle}>
                          <TextInput
                            placeholder={item?.placeholderLabel}
                            placeholderTextColor={color.primaryText}
                            style={styles.tableTextStyle}
                            maxLength={3}
                          />
                          <View style={styles.lineStyleInput} />
                          <Text style={styles.textTypeTable}>{item.type}</Text>
                        </View>
                      </View>
                    )}
                  />

                  <TouchableOpacity style={styles.exerciseAddView}>
                    <Text style={styles.exerciseTextStyle}>+ New Exercise</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              <FlatList
                data={exploreCircuitData}
                contentContainerStyle={styles.contentContainerStyle}
                keyExtractor={(item, index) => `${index}`}
                horizontal
                renderItem={({item, index}) => (
                  <ClipCard
                    title={item.title}
                    onPress={() => onClipOption(item)}
                    nameStyle={styles.clipText}
                    container={styles.clipContainer}
                  />
                )}
                showsHorizontalScrollIndicator={false}
              />
            )}
            {routeData?.length > 0 && (
              <View>
                <View style={styles.blackViewMain}>
                  <SvgIndex.checkboxEmpty height={15} width={15} />
                  <Text style={styles.blackTextStyle}>Back Squat</Text>
                  <TouchableOpacity activeOpacity={0.8}>
                    <SvgIndex.deleteSolid />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.hamburgIconStyle}
                    activeOpacity={0.8}>
                    <SvgIndex.hamburg />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.uploadVideoStyle}>
                  <SvgIndex.upload />
                  <Text style={styles.uploadVideoText}>Upload Video</Text>
                </TouchableOpacity>
                <View style={styles.coachInstructionsViewStyle}>
                  <View style={styles.rowView}>
                    <Text style={styles.coachTitleStyle}>
                      Coach Instructions
                    </Text>
                    <Text style={styles.wordTitleStyle}>0/10000</Text>
                  </View>
                  <TextInput
                    placeholder="Use this area to help the athlete understand goals for today’s session."
                    placeholderTextColor={color.secondaryText}
                    style={styles.inputTitleStyle}
                    multiline={true}
                  />
                </View>
                <FlatList
                  data={tableData}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.tableViewStyle}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({item}) => (
                    <View style={styles.tableViewMStyle}>
                      <Text style={styles.textTable}>{item.label}</Text>
                      <View style={styles.cardSetsViewRowStyle}>
                        <TextInput
                          placeholder={item?.placeholderLabel}
                          placeholderTextColor={color.primaryText}
                          style={styles.tableTextStyle}
                          maxLength={3}
                        />
                        <View style={styles.lineStyleInput} />
                        <Text style={styles.textTypeTable}>{item.type}</Text>
                      </View>
                    </View>
                  )}
                />
              </View>
            )}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={onNewExercise}
              style={styles.exerciseView}>
              <Text style={styles.exerciseTextStyle}>+ New Exercise</Text>
            </TouchableOpacity>
            <View style={styles.summaryViewStyle}>
              <Text style={styles.imageText}>
                Add workout summary{' '}
                <Text style={[styles.imageText, styles.optionalTextStyle]}>
                  (optional)
                </Text>
              </Text>
              <View style={styles.imageUploadRowViewStyle}>
                <View style={styles.videoUploadContanier}>
                  <SvgIndex.upload />
                  <Text style={styles.uploadTextRegular}>
                    Upload your trailer video{'\n'}
                    Add a 16:9 ratio video
                  </Text>
                </View>
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.ContentManageContainers}>
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
            <View style={styles.weekRemoveBorderSessionView}>
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
            <View style={styles.newSessionViewStyle}>
              <Text style={styles.weekDayTextStyle}>Week 1 Day 1</Text>
              <ClipCard
                title={'Add New Session'}
                onPress={onAddNewSessionClip}
                nameStyle={styles.clipAddNewTextStyle}
                container={styles.clipSessionStyle}
              />
            </View>
            <FlatList
              data={sessionData}
              showsVerticalScrollIndicator={false}
              renderItem={({item, index}) => (
                <View style={styles.sessionShowCardStyle}>
                  <Text style={styles.sessionCardText}>{item?.title}</Text>
                  <TouchableOpacity onPress={openMenuSheet} activeOpacity={0.8}>
                    <SvgIndex.hamburg />
                  </TouchableOpacity>
                </View>
              )}
            />
            <RBSheet
              ref={refRBSheet}
              customStyles={{
                wrapper: {
                  backgroundColor: color.transparentColor,
                },
                container: {
                  height: 135,
                  paddingBottom: 30,
                },
              }}
              customModalProps={{
                animationType: 'slide',
              }}>
              <View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.showBottomCardStyle}>
                  <SvgIndex.editBorder />
                  <Text style={styles.showOptionBottom}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={onDuplicateSession}
                  activeOpacity={0.8}
                  style={styles.showBottomCardStyle}>
                  <SvgIndex.copy />
                  <Text style={styles.showOptionBottom}>Duplicate</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.showBottomCardStyle}>
                  <SvgIndex.deletePurpal />
                  <Text style={styles.showOptionBottom}>Delete</Text>
                </TouchableOpacity>
              </View>
            </RBSheet>
          </View>
        )}
      </Container>
      {!bodyWeightOnly?.sessionShow ? (
        <Button
          onPress={onAddNewSession}
          label="Add new Session"
          containerStyle={styles.bottonView}
          marginHorizontal={68}
        />
      ) : (
        <Button
          onPress={onPublish}
          label="Publish"
          containerStyle={styles.bottonView}
          marginHorizontal={68}
        />
      )}
    </View>
  );
};

export default BodyWeightOnly;
