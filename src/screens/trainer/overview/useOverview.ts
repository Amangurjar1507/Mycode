import { useAuthNavigation } from '@hooks/useAppNavigation';
import { useCallback, useState } from 'react';
import { carouselData, chartList, dropdownList } from './overview.const';

const useOverview = () => {
  const navigation = useAuthNavigation();
  const [overviewInfo, setOverviewInfo] = useState({
    overviewList: carouselData,
    chartData: chartList,
    graphFilterList: dropdownList,
    isOpen: false,
    value: 'Last Week',
  });

  //** Handle state change values */
  const handleChangeValue = useCallback(
    (value: any, state: string) => {
      setOverviewInfo(prevState => ({ ...prevState, [state]: value }));
    },
    [overviewInfo],
  );

  //** Dropdown handler */
  const onToggleDropdown = useCallback(
    (value: boolean, state: string) => {
      handleChangeValue(value, state);
    },
    [overviewInfo, navigation],
  );

  //** Handle filter onpress */
  const onPressRightIcon = useCallback(() => {
    navigation.navigate('Filters', { filterType: 'Analytics' });
  }, []);
  return {
    overviewInfo,
    handleChangeValue,
    onToggleDropdown,
    onPressRightIcon,
  };
};

export default useOverview;
