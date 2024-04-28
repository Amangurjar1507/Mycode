import { useAuthNavigation, useAuthRoute } from '@hooks/useAppNavigation';
import { useCallback, useEffect, useState } from 'react';
import { filterAnalyticsData, filterData } from './filterType.const';

const useFilters = () => {
  const navigation = useAuthNavigation();
  const route = useAuthRoute('Filters');
  const [filter, setFilter] = useState<any>(filterData)
  useEffect(() => {
    if (route?.params?.filterType == 'Analytics') {
      setFilter(filterAnalyticsData)
    } else {
      setFilter(filterData)
    }
  }, []);

  const onSelectFilters = useCallback((type: string) => {
    if (type == 'Country') {
      navigation.navigate('Location', { typeScreen: 'Filters' });
    } else {
      navigation.navigate('MainMuscle', { filterType: type });
    }
  }, [navigation]);

  return { onSelectFilters, filter };
};

export default useFilters;
