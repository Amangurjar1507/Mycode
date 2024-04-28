import { useAuthNavigation } from '@hooks/useAppNavigation';
import { useCallback, useState } from 'react';
import {
  allProgramsData,
  chartList,
  dropdownList,
  subscriptions,
} from './traineeManagement.const';

const useTraineeManagement = () => {
  const navigation = useAuthNavigation();
  const [traineeInfo, setTraineeInfo] = useState({
    traineeList: allProgramsData,
    chartData: chartList,
    graphFilterList: dropdownList,
    subscriptions: subscriptions,
    isOpen: false,
    value: 'Last Week',
    isExpandedAll: false,
  });

  //** Handle state change values */
  const handleChangeValue = useCallback(
    (value: any, state: string) => {
      setTraineeInfo(prevState => ({ ...prevState, [state]: value }));
    },
    [traineeInfo],
  );

  //** Dropdown handler */
  const onToggleDropdown = useCallback(
    (value: boolean, state: string) => {
      handleChangeValue(value, state);
    },
    [navigation, traineeInfo],
  );

  //** Handle expand all card */
  const handleExpandAll = useCallback(() => {
    handleChangeValue(!traineeInfo?.isExpandedAll, 'isExpandedAll');
  }, [traineeInfo]);

  const onPressRightIcon = useCallback(() => {
    navigation.navigate('Filters', { filterType: 'Analytics' });
  }, []);
  return {
    traineeInfo,
    handleChangeValue,
    onToggleDropdown,
    handleExpandAll,
    onPressRightIcon
  };
};
export default useTraineeManagement;
