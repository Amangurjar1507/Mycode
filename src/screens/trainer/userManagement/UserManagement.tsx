import { UserManagementCard } from '@card';
import { AnalyticsSnapshot, Container, Dropdown, Graph } from '@components';
import React, { FC } from 'react';
import { FlatList, View } from 'react-native';
import useUserManagement from './useUserManagement';
import { styles } from './userManagement.style';

const UserManagement: FC = () => {
  const {
    userInfo,
    handleChangeValue,
    onToggleDropdown,
    onPressRightIcon
  } = useUserManagement();
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
        <AnalyticsSnapshot data={userInfo?.overview} />
      </View>
      <Graph
        title="workout session (Average)"
        chartData={userInfo?.chartData}
        dropdownShown
        placeholder="Last Week"
        data={userInfo?.graphFilterList}
        isOpen={userInfo?.isOpen}
        setIsopen={() => handleChangeValue(!userInfo?.isOpen, 'isOpen')}
        onPress={() => onToggleDropdown(!userInfo?.isOpen, 'isOpen')}
        value={userInfo?.value}
        setValue={res => handleChangeValue(res, 'value')}
        containerStyle={styles.graphContainerStyle}
      />
      <FlatList
        data={userInfo?.userList}
        contentContainerStyle={styles.contentContainerStyle}
        keyExtractor={(item, index) => {
          return `${index}`;
        }}
        renderItem={({ item, index }) => (
          <UserManagementCard key={index} item={item} index={index} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default UserManagement;
