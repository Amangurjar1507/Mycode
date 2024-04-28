import { useAuthNavigation } from '@hooks/useAppNavigation';
import { useCallback, useState } from 'react';
import { dropdownList } from '../overview/overview.const';
import { allProgramsData, chartList } from './financialManagement.const';

const useFinancialManagement = () => {
  const navigation = useAuthNavigation();
  const [financialInfo, setFinancialInfo] = useState({
    payoutList: allProgramsData,
    chartData: chartList,
    graphFilterList: dropdownList,
    isOpen: false,
    value: 'Last Week',
  });

  //** Handle state change values */
  const handleChangeValue = useCallback(
    (value: any, state: string) => {
      setFinancialInfo(prevState => ({ ...prevState, [state]: value }));
    },
    [financialInfo],
  );

  //** Dropdown handler */
  const onToggleDropdown = useCallback(
    (value: boolean, state: string) => {
      handleChangeValue(value, state);
    },
    [navigation, financialInfo],
  );
  const onPressRightIcon = useCallback(() => {
    navigation.navigate('Filters', { filterType: 'Analytics' });
  }, []);
  return {
    financialInfo,
    handleChangeValue,
    onToggleDropdown,
    onPressRightIcon
  };
};
export default useFinancialManagement;
