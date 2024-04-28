import {useAuthNavigation} from '@hooks/useAppNavigation';
import {useCallback, useState} from 'react';
import {currencyLists} from './transaction.const';

const useTransaction = () => {
  const navigation = useAuthNavigation();
  const [transactionInfo, setTransactionInfo] = useState({
    currencyList: currencyLists,
    dropdownValue: '',
    isDropdownOpen: false,
    isConnected: false,
  });

  //** Handle state change values */
  const handleChangeValue = useCallback(
    (value: any, state: string) => {
      setTransactionInfo(prevState => ({...prevState, [state]: value}));
    },
    [transactionInfo],
  );

  //** Dropdown handler */
  const onToggleDropdown = useCallback(() => {
    handleChangeValue(!transactionInfo?.isDropdownOpen, 'isDropdownOpen');
  }, [navigation, transactionInfo]);

  //** Connect to paypal */
  const onConnectToPaypal = useCallback(() => {
    handleChangeValue(!transactionInfo?.isConnected, 'isConnected');
  }, [navigation]);

  return {
    transactionInfo,
    handleChangeValue,
    onToggleDropdown,
    onConnectToPaypal,
  };
};

export default useTransaction;
