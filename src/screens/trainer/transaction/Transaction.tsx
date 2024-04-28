import {Container, Dropdown} from '@components';
import SvgIndex from '@svgIndex';
import color from '@theme/color';
import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './transaction.style';
import useTransaction from './useTransaction';

export interface TransactionProps {
  currencyList: Array<object>;
  dropdownValue: string;
  isDropdownOpen: boolean;
  isConnected: boolean;
}

const Transaction: FC = () => {
  const {
    transactionInfo,
    handleChangeValue,
    onToggleDropdown,
    onConnectToPaypal,
  } = useTransaction();

  return (
    <Container
      wrapperType="simple"
      headerShown
      backIconsShown
      lable="Transaction">
      <View style={styles.mainContainer}>
        <Dropdown
          label="Default Units"
          mainViewStyle={styles.mainViewStyle}
          lableStyle={styles.lableStyle}
          containerStyle={styles.dropdownContainerStyle}
          placeholderStyle={styles.placeholderStyle}
          data={transactionInfo?.currencyList}
          placeholder="USD - US Doller"
          innerLabel="Currency"
          isOpen={transactionInfo?.isDropdownOpen}
          setIsopen={() =>
            handleChangeValue(
              !transactionInfo?.isDropdownOpen,
              'isDropdownOpen',
            )
          }
          onPress={onToggleDropdown}
          value={transactionInfo?.dropdownValue}
          setValue={() =>
            handleChangeValue(!transactionInfo?.dropdownValue, 'dropdownValue')
          }
        />
        <Text style={styles.paypalText}>Paypal Account integration</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.paypalBtn}
          onPress={onConnectToPaypal}>
          <SvgIndex.paypal />
          <Text style={styles.paypalBtnText}>Connect Paypal Account</Text>
          {transactionInfo?.isConnected && (
            <View style={styles.deleteIcon}>
              <SvgIndex.deleteIcon fill={color.secondaryBG} />
            </View>
          )}
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default Transaction;
