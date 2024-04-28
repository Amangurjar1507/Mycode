import { WeekCard } from '@card';
import { Button, Container } from '@components';
import SvgIndex from '@svgIndex';
import React, { FC } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import styles from './programName.style';
import WeekData from './programsNameData.const';
import useProgramName from './useProgramName';
import color from '@theme/color';

const ProgramName: FC = () => {
  const { onReview, onSave, onCreateNewSession } = useProgramName();
  return (
    <View style={styles.container}>
      <Container
        wrapperType="scroll"
        headerShown
        backIconsShown
        lable='Program’s name'
        containerViewStyle={styles.ContentContainerStyleBgc}
        scrollContainerStyle={styles.ContentContainerStyleBgc}
        containerStyle={styles.headerContainerStyle}>
        <View style={styles.ContentContainers}>
          <View style={styles.weekCardStyleManageBorderStyle}>
            <View style={styles.weekMainView}>
              <Text style={styles.weekTextStyle}>Week 1</Text>
              <FlatList
                data={WeekData}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                  <WeekCard
                    item={item}
                    key={index}
                    index={index}
                    selectIndex={0}
                  />
                )}
              />
            </View>
          </View>
          <View style={styles.weekCardStyleManageBorderStyle}>
            <View style={styles.weekMainView}>
              <Text style={styles.weekTextStyle}>Week 2</Text>
              <FlatList
                data={WeekData}
                horizontal
                renderItem={({ item, index }) => (
                  <WeekCard item={item} key={index} index={index} />
                )}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
          <View style={styles.weekCardLastStyle}>
            <View style={styles.weekMainView}>
              <Text style={styles.weekTextStyle}>Week 3</Text>
              <FlatList
                data={WeekData}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                  <WeekCard item={item} key={index} index={index} />
                )}
              />
            </View>
          </View>
          <View style={styles.sessionMainView}>
            <SvgIndex.sessionSheet />
            <Text style={styles.sessionsTxtStyle}>
              You haven't set up any{'\n'} sessions for this day
            </Text>
            <TouchableOpacity
              onPress={onCreateNewSession}
              style={styles.clipStyleSecond}>
              <SvgIndex.plus />
              <Text style={styles.clipTextSecond}>Create New Session</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Container>
      <View style={styles.rowViewManageButton}>
        <Button
          label="Save"
          onPress={onSave}
          containerStyle={styles.saveButtonStyle}
          nameTextStyle={styles.saveButtonTextStyle}
        />
        <Button
          onPress={onReview}
          label="Review"
          containerStyle={styles.reviewButtonStyle}
          nameTextStyle={styles.reviewButtonTextStyle}
        />
      </View>
    </View>
  );
};

export default ProgramName;
