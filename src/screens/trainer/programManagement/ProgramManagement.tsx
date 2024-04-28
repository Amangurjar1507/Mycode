import { AnalyticsCarousel } from '@card';
import { Container, Dropdown, Graph } from '@components';
import SvgIndex from '@svgIndex';
import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { carouselData } from './programManagement.const';
import { styles } from './programManagement.style';
import useProgramManagement from './useProgramManagement';

const ProgramManagement: FC = () => {
  const { programInfo, handleChangeValue, onToggleDropdown, onPressRightIcon } =
    useProgramManagement();
  return (
    <Container
      statusBarShown={false}
      wrapperType="scroll"
      containerViewStyle={styles.containerViewStyle}>
      <Dropdown
        containerStyle={styles.containerStyle}
        placeholder="All Programs"
        placeholderStyle={styles.placeholderStyle}
        rightIconShow
        onPressRightIcon={onPressRightIcon}
      />
      <View style={styles.priceRowViewStyle}>
        <View style={styles.rowDollorIconView}>
          <SvgIndex.dollorBorderIcon />
          <View style={styles.textManageTextView}>
            <Text style={styles.priceTextStyle}>Price</Text>
            <Text style={styles.priceUKTextStyle}>$12k</Text>
          </View>
        </View>
        <View style={styles.activeCardStyleView}>
          <View style={styles.activePoinStyle} />
          <Text style={styles.activeTextPoint}>Active</Text>
        </View>
      </View>
      <AnalyticsCarousel data={carouselData} />
      <Graph
        title="Total Subscribers"
        chartData={programInfo?.chartData}
        dropdownShown
        placeholder="Last Week"
        data={programInfo?.graphFilterList}
        isOpen={programInfo?.isOpen}
        setIsopen={() => handleChangeValue(!programInfo?.isOpen, 'isOpen')}
        onPress={() => onToggleDropdown(!programInfo?.isOpen, 'isOpen')}
        value={programInfo?.value}
        setValue={res => handleChangeValue(res, 'value')}
        containerStyle={styles.graphContainerStyle}
      />
    </Container>
  );
};

export default ProgramManagement;
