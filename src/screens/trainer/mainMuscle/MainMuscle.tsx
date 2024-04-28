import { Button, Container } from '@components';
import React, { FC } from 'react';
import { styles } from './mainMuscle.style';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import SvgIndex from '@svgIndex';
import useMainMuscle from './useMainMuscle';
import color from '@theme/color';

export interface MuscleListItemProps {
  id: number;
  title: string;
  checked: boolean;
}

const MainMuscle: FC = () => {
  const { onSelectMuscle, muscleList, routeData } = useMainMuscle()
  return (
    <>
      <Container
        wrapperType="form"
        headerShown
        backIconsShown
        lable={routeData}
        rightButtonText='Clear All'
        statusBarColor={color.secondaryBG}
        scrollContainerStyle={styles.screenBackgroundStyle}
        containerViewStyle={styles.screenBackgroundStyle}
        containerStyle={styles.headerContainerStyle}>
        <View style={styles.inputContentContainers}>
          <FlatList
            data={muscleList}
            contentContainerStyle={styles.contentContainerStyle}
            keyExtractor={(item, index) => {
              return `${index}`;
            }}
            renderItem={({ item, index }) => (
              <View style={styles.cardStyle}>
                <Text style={styles.cardTextStyle}>{item?.title}</Text>
                <TouchableOpacity onPress={() => onSelectMuscle(index)}>
                  {item?.checked ? (
                    <SvgIndex.checkboxFilled />
                  ) : (
                    <SvgIndex.checkboxEmpty />
                  )}
                </TouchableOpacity>
              </View>
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </Container>
      <Button
        onPress={() => { }}
        label="Save"
        containerStyle={styles.bottonView}
        marginHorizontal={68}
      />
    </>
  );
};

export default MainMuscle;
