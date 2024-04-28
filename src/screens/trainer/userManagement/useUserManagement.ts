import { useAuthNavigation } from '@hooks/useAppNavigation';
import { useCallback, useState } from 'react';
import {
  allProgramsData,
  chartList,
  dropdownList,
  userManagementList,
} from './userManagement.const';

const useUserManagement = () => {
  const navigation = useAuthNavigation();
  const [userInfo, setUserInfo] = useState({
    overview: allProgramsData,
    chartData: chartList,
    graphFilterList: dropdownList,
    userList: userManagementList,
    isOpen: false,
    value: 'Last Week',
  });

  //** Handle state change values */
  const handleChangeValue = useCallback(
    (value: any, state: string) => {
      setUserInfo(prevState => ({ ...prevState, [state]: value }));
    },
    [userInfo],
  );

  //** Dropdown handler */
  const onToggleDropdown = useCallback(
    (value: boolean, state: string) => {
      handleChangeValue(value, state);
    },
    [navigation, userInfo],
  );

  const onPressRightIcon = useCallback(() => {
    navigation.navigate('Filters', { filterType: 'Analytics' });
  }, []);

  return {
    userInfo,
    handleChangeValue,
    onToggleDropdown,
    onPressRightIcon
  };
};
export default useUserManagement;
