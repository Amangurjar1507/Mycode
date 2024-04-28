import { useAuthNavigation } from '@hooks/useAppNavigation';
import { useCallback, useState } from 'react';
import { carouselData, chartList, dropdownList } from './programManagement.const';

const useProgramManagement = () => {
  const navigation = useAuthNavigation();
  const [programInfo, setProgramInfo] = useState({
    overviewList: carouselData,
    chartData: chartList,
    graphFilterList: dropdownList,
    isOpen: false,
    value: 'Last Week',
  });

  //** Handle state change values */
  const handleChangeValue = useCallback(
    (value: any, state: string) => {
      setProgramInfo(prevState => ({ ...prevState, [state]: value }));
    },
    [programInfo],
  );

  //** Dropdown handler */
  const onToggleDropdown = useCallback(
    (value: boolean, state: string) => {
      handleChangeValue(value, state);
    },
    [navigation, programInfo],
  );

  const onPressRightIcon = useCallback(() => {
    navigation.navigate('Filters', { filterType: 'Analytics' });
  }, []);

  return {
    programInfo,
    handleChangeValue,
    onToggleDropdown,
    onPressRightIcon
  };
};

export default useProgramManagement;
