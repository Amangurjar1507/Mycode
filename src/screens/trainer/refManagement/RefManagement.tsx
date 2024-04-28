import {ReferralCard} from '@card';
import {Button, SearchBar} from '@components';
import SvgIndex from '@svgIndex';
import color from '@theme/color';
import React, {FC} from 'react';
import {FlatList, Text, View} from 'react-native';
import {styles} from './refManagement.style';
import useRefManagement from './useRefManagement';

const RefManagement: FC = () => {
  const {refInfo, onNavigateToCreateReferralCode} = useRefManagement();

  const EmptyContainer = () => (
    <View style={styles.emptyContainer}>
      <SvgIndex.referralUser />
      <Text style={styles.emptyText}>
        You don’t have any referral {'\n'} codes created
      </Text>
      <Button
        label="+ Create New Code"
        containerStyle={styles.btnContainer}
        nameTextStyle={styles.btnText}
        onPress={onNavigateToCreateReferralCode}
      />
    </View>
  );
  return (
    <View style={styles.container}>
      <SearchBar
        label={`Search`}
        placeholderTextColor={color.primaryText}
        containerStyle={styles.searchBarContainer}
        searchView={styles.searchView}
        showAddIcon
        showFilterIcon
        addIconContainerStyle={styles.addIconContainerStyle}
        inputStyle={styles.inputStyle}
        searchIcon={SvgIndex.search}
        onPressAddIcon={onNavigateToCreateReferralCode}
      />
      <FlatList
        data={refInfo?.referralList}
        contentContainerStyle={styles.contentContainerStyle}
        keyExtractor={(item, index) => {
          return `${index}`;
        }}
        renderItem={({item, index}) => (
          <ReferralCard
            key={index}
            item={item}
            index={index}
            onPress={() => {}}
          />
        )}
        ListEmptyComponent={EmptyContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default RefManagement;
