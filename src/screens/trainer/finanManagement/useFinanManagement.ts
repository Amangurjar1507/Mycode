import {useAuthNavigation} from '@hooks/useAppNavigation';
import {useCallback, useState} from 'react';
import {
  chartList,
  dropdownList,
  transactionList,
} from './finanManagement.const';

const useFinanManagement = () => {
  const navigation = useAuthNavigation();
  const [financialInfo, setFinancialInfo] = useState({
    transactionList: transactionList,
    chartData: chartList,
    graphFilterList: dropdownList,
    isOpen: false,
    value: 'Last Week',
    isConnected: false,
  });

  //** Handle state change values */
  const handleChangeValue = useCallback(
    (value: any, state: string) => {
      setFinancialInfo(prevState => ({...prevState, [state]: value}));
    },
    [financialInfo],
  );

  //** Navigate to transactions details screen */
  const onPressTransaction = useCallback(() => {}, [
    navigation,
    transactionList,
  ]);

  //** Connect to paypal */
  const onConnectToPaypal = useCallback(() => {
    handleChangeValue(!financialInfo?.isConnected, 'isConnected');
  }, [financialInfo]);

  //** Dropdown handler */
  const onToggleDropdown = useCallback(
    (value: boolean, state: string) => {
      handleChangeValue(value, state);
    },
    [navigation, financialInfo],
  );

  return {
    financialInfo,
    handleChangeValue,
    onPressTransaction,
    onConnectToPaypal,
    onToggleDropdown,
  };
};

export default useFinanManagement;
