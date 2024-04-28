import {useAuthNavigation} from '@hooks/useAppNavigation';
import {useCallback, useState} from 'react';

const useLanguage = () => {
  const navigation = useAuthNavigation();
  const [languageList, setLanguageList] = useState<Array<object>>([
    {id: 1, title: 'English', country: 'USA', selected: false},
    {id: 2, title: 'Hindi', country: 'India', selected: false},
    {id: 3, title: 'Japanese', country: 'Japan', selected: false},
    {id: 4, title: 'Spanish', country: 'Spain', selected: false},
    {id: 5, title: 'India', country: 'Spain', selected: false},
    {id: 6, title: 'India', country: 'Spain', selected: false},
    {id: 7, title: 'India', country: 'Spain', selected: false},
    {id: 8, title: 'India', country: 'France', selected: false},
    {id: 9, title: 'India', country: 'Germany', selected: false},
    {id: 10, title: 'India', country: 'Germany', selected: false},
    {id: 11, title: 'India', country: 'Germany', selected: false},
    {id: 12, title: 'India', country: 'Germany', selected: false},
    {id: 13, title: 'India', country: 'Germany', selected: false},
    {id: 14, title: 'India', country: 'Germany', selected: false},
    {id: 15, title: 'India', country: 'Germany', selected: false},
    {id: 16, title: 'India', country: 'Germany', selected: false},
    {id: 17, title: 'India', country: 'Germany', selected: false},
  ]);

  //** Change the value on select language */
  const onSelectLanguage = useCallback(
    (id: string) => {
      const updatedLanguages = languageList?.map(language => {
        if (language.id === id) {
          return {...language, selected: !language?.selected};
        } else {
          return {...language, selected: false};
        }
      });
      setLanguageList(updatedLanguages);
    },
    [navigation],
  );

  return {
    languageList,
    onSelectLanguage,
  };
};

export default useLanguage;
