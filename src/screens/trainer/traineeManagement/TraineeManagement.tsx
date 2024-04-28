import {
  AnalyticsSnapshot,
  CollapsibleCard,
  Container,
  Dropdown,
  Graph,
} from '@components';
import React, { FC } from 'react';
import { FlatList, Text, View } from 'react-native';
import { styles } from './traineeManagement.style';
import useTraineeManagement from './useTraineeManagement';

const TraineeManagement: FC = () => {
  const {
    traineeInfo,
    handleChangeValue,
    onToggleDropdown,
    handleExpandAll,
    onPressRightIcon
  } = useTraineeManagement();
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
        <AnalyticsSnapshot data={traineeInfo?.traineeList} showFullCard />
      </View>
      <Graph
        title="Active Subscribers"
        chartData={traineeInfo?.chartData}
        dropdownShown
        placeholder="Last Week"
        data={traineeInfo?.graphFilterList}
        isOpen={traineeInfo?.isOpen}
        setIsopen={() => handleChangeValue(!traineeInfo?.isOpen, 'isOpen')}
        onPress={() => onToggleDropdown(!traineeInfo?.isOpen, 'isOpen')}
        value={traineeInfo?.value}
        setValue={res => handleChangeValue(res, 'value')}
        containerStyle={styles.graphContainerStyle}
      />
      <FlatList
        data={traineeInfo?.subscriptions}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <Text style={styles.expandText} onPress={handleExpandAll}>
            Expand All
          </Text>
        }
        renderItem={({ item, index }) => (
          <CollapsibleCard
            title={item?.title}
            description={item?.descriptions}
            isExpandedAll={traineeInfo?.isExpandedAll}
            content={
              <View style={styles.contentView}>
                <View style={styles.rowView}>
                  <Text style={styles.title}>Date of Subscription</Text>
                  <Text style={styles.value}>{item?.dateOfSub}</Text>
                </View>
                <View style={styles.rowView}>
                  <Text style={styles.title}>Duration Left</Text>
                  <Text style={styles.value}>{item?.leftDuration}</Text>
                </View>
                <View style={styles.rowView}>
                  <Text style={styles.title}>Valid Upto</Text>
                  <Text style={styles.value}>{item?.validUpto}</Text>
                </View>
                <View style={styles.rowView}>
                  <Text style={styles.title}>Country</Text>
                  <Text style={styles.value}>{item?.country}</Text>
                </View>
                <View style={styles.rowView}>
                  <Text style={styles.title}>Price paid</Text>
                  <Text style={styles.value}>{item?.pricePaid}</Text>
                </View>
                <View style={styles.rowView}>
                  <Text style={styles.title}>Device</Text>
                  <Text style={styles.value}>{item?.device}</Text>
                </View>
              </View>
            }
          />
        )}
      />
    </Container>
  );
};

export default TraineeManagement;
