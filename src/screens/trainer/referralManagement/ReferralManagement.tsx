import {ReferralCard} from '@card';
import {BottomSheet, SearchBar} from '@components';
import svgIndex from '@svgIndex';
import color from '@theme/color';
import React, {FC} from 'react';
import {FlatList, View} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {styles} from './referralManagement.style';
import useReferralManagement from './useReferralManagement';

const ReferralManagement: FC = () => {
  const {referralInfo, refRBSheet, openMenuSheet, onPressRightIcon} =
    useReferralManagement();
  return (
    <View style={styles.container}>
      <SearchBar
        label={`Search`}
        placeholderTextColor={color.primaryText}
        containerStyle={styles.searchBarContainer}
        searchView={styles.searchView}
        showFilterIcon
        addIconContainerStyle={styles.addIconContainerStyle}
        inputStyle={styles.inputStyle}
        searchIcon={svgIndex.search}
        onPressFilterIcon={onPressRightIcon}
      />
      <FlatList
        data={referralInfo?.referralList}
        contentContainerStyle={styles.contentContainerStyle}
        keyExtractor={(item, index) => {
          return `${index}`;
        }}
        renderItem={({item, index}) => (
          <>
            <ReferralCard
              key={index}
              item={item}
              index={index}
              onPressThreeDot={() => openMenuSheet(index)}
            />
            <RBSheet
              ref={ref => (refRBSheet.current[index] = ref)}
              customStyles={{
                wrapper: styles.wrapper,
                container: styles.sheetContainer,
              }}
              customModalProps={{
                animationType: 'slide',
              }}>
              {referralInfo?.bottomSheetList?.map((item, index) => (
                <BottomSheet item={item} index={index} />
              ))}
            </RBSheet>
          </>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ReferralManagement;
