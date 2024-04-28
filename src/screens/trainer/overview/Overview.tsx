import { AnalyticsCarousel } from '@card';
import { Container, Dropdown, Graph } from '@components';
import React, { FC } from 'react';
import { styles } from './overview.style';
import useOverview from './useOverview';

const Overview: FC = () => {
  const { overviewInfo, handleChangeValue, onToggleDropdown, onPressRightIcon } =
    useOverview();

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
      <AnalyticsCarousel data={overviewInfo?.overviewList} />
      <Graph
        title="Total Programs"
        chartData={overviewInfo?.chartData}
        dropdownShown
        placeholder="Last Week"
        data={overviewInfo?.graphFilterList}
        isOpen={overviewInfo?.isOpen}
        setIsopen={() => handleChangeValue(!overviewInfo?.isOpen, 'isOpen')}
        onPress={() => onToggleDropdown(!overviewInfo?.isOpen, 'isOpen')}
        value={overviewInfo?.value}
        setValue={res => handleChangeValue(res, 'value')}
        containerStyle={styles.graphContainerStyle}
      />
    </Container>
  );
};

export default Overview;
