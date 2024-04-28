import { AnalyticsSnapshot, Container, Dropdown, Graph } from '@components';
import React, { FC } from 'react';
import { View } from 'react-native';
import { styles } from './financialManagement.style';
import useFinancialManagement from './useFinancialManagement';

const FinancialManagement: FC = () => {
  const { financialInfo, handleChangeValue, onToggleDropdown, onPressRightIcon } =
    useFinancialManagement();

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
      <View style={styles.listView}>
        <AnalyticsSnapshot data={financialInfo?.payoutList} showFullCard />
      </View>
      <Graph
        title="Payouts"
        chartData={financialInfo?.chartData}
        dropdownShown
        placeholder="Last Week"
        data={financialInfo?.graphFilterList}
        isOpen={financialInfo?.isOpen}
        setIsopen={() => handleChangeValue(!financialInfo?.isOpen, 'isOpen')}
        onPress={() => onToggleDropdown(!financialInfo?.isOpen, 'isOpen')}
        value={financialInfo?.value}
        setValue={res => handleChangeValue(res, 'value')}
        containerStyle={styles.graphContainerStyle}
      />
    </Container>
  );
};

export default FinancialManagement;
