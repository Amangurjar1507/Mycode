import {useAuthNavigation} from '@hooks/useAppNavigation';
import {useCallback, useState} from 'react';

const useCountryRegion = () => {
  const navigation = useAuthNavigation();
  const [regionsList, setRegionsList] = useState<Array<object>>([
    {id: 1, title: 'North', selected: false},
    {id: 2, title: 'South', selected: false},
    {id: 3, title: 'West', selected: false},
    {id: 4, title: 'East', selected: false},
    {id: 5, title: 'India', selected: false},
    {id: 6, title: 'India', selected: false},
    {id: 7, title: 'India', selected: false},
    {id: 8, title: 'India', selected: false},
    {id: 9, title: 'India', selected: false},
    {id: 10, title: 'India', selected: false},
    {id: 11, title: 'India', selected: false},
    {id: 12, title: 'India', selected: false},
    {id: 13, title: 'India', selected: false},
    {id: 14, title: 'India', selected: false},
    {id: 15, title: 'India', selected: false},
    {id: 16, title: 'India', selected: false},
  ]);

  //** Change the value on select language */
  const onSelectRegion = useCallback(
    (id: string) => {
      const updatedLanguages = regionsList?.map(language => {
        if (language.id === id) {
          return {...language, selected: !language?.selected};
        } else {
          return {...language, selected: false};
        }
      });
      setRegionsList(updatedLanguages);
    },
    [navigation],
  );

  return {
    regionsList,
    onSelectRegion,
  };
};

export default useCountryRegion;
