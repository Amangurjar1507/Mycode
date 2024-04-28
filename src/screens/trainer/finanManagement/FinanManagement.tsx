import {TransactionCard} from '@card';
import {Graph} from '@components';
import SvgIndex from '@svgIndex';
import React, {FC} from 'react';
import {FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './FinanManagement.style';
import useFinanManagement from './useFinanManagement';

const FinanManagement: FC = () => {
  const {
    financialInfo,
    handleChangeValue,
    onPressTransaction,
    onConnectToPaypal,
    onToggleDropdown,
  } = useFinanManagement();
  return (
    <View style={styles.container}>
      <ScrollView
        bounces={true}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        style={styles.mainContainer}>
        {/* Header View */}
        <View style={styles.payoutView}>
          <TouchableOpacity style={styles.nextPayoutView} activeOpacity={0.8}>
            <Text style={styles.nextTitleText}>Next Payout</Text>
            <Text style={styles.nextAmountText}>$1,200</Text>
            <Text style={styles.nextDateTitleText}>
              Next Payout Date{': '}
              <Text style={styles.nextDateText}>12/02/23</Text>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.lastPayoutView} activeOpacity={0.8}>
            <Text style={styles.lastTitleText}>Last Payout</Text>
            <Text style={styles.lastAmountText}>$365</Text>
            <View style={styles.progressView}>
              <SvgIndex.trendingUp width={13} height={13} />
              <Text style={styles.lastDateTitleText}>
                <Text style={styles.lastDateText}>5% </Text>
                Increase of active users
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* Chart View */}
        <Graph
          title="Earning"
          chartData={financialInfo?.chartData}
          dropdownShown
          placeholder="Last Work"
          data={financialInfo?.graphFilterList}
          isOpen={financialInfo?.isOpen}
          setIsopen={() => handleChangeValue(!financialInfo?.isOpen, 'isOpen')}
          onPress={() => onToggleDropdown(!financialInfo?.isOpen, 'isOpen')}
          value={financialInfo?.value}
          setValue={res => handleChangeValue(res, 'value')}
        />
        {/* Paypal connect button */}
        <View style={styles.connectBtnView}>
          <View style={styles.btnTitleView}>
            <SvgIndex.paypalLogo />
            <Text style={styles.btnTitleText}>Paypal</Text>
          </View>
          <Text style={styles.connectToPaypalText}>
            Connect to paypal gateway
          </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.paypalBtn}
            onPress={onConnectToPaypal}>
            <SvgIndex.paypal />
            <Text style={styles.paypalBtnText}>Connect Paypal Account</Text>
          </TouchableOpacity>
        </View>
        {/* Transactions list */}
        <View style={styles.transactionHeadingView}>
          <Text style={styles.transactionHeadingText}>Transactions</Text>
          <TouchableOpacity
            style={styles.filterBtn}
            activeOpacity={0.7}
            onPress={() => {}}>
            <SvgIndex.filter />
          </TouchableOpacity>
        </View>
        <FlatList
          data={financialInfo?.transactionList}
          contentContainerStyle={styles.contentContainerStyle}
          keyExtractor={(item, index) => {
            return `${index}`;
          }}
          renderItem={({item, index}) => (
            <TransactionCard
              key={index}
              item={item}
              index={index}
              onPress={onPressTransaction}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </ScrollView>
    </View>
  );
};

export default FinanManagement;
