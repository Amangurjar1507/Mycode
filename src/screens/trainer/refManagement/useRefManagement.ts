import {useAuthNavigation} from '@hooks/useAppNavigation';
import {useCallback, useEffect, useState} from 'react';
import {referralManagementList} from './refManagement.const';

const useRefManagement = () => {
  const navigation = useAuthNavigation();
  const [refInfo, setRefInfo] = useState({
    referralList: [],
  });

  useEffect(() => {
    setTimeout(() => {
      handleChangeValue(referralManagementList, 'referralList');
    }, 5000);
  }, []);

  //** Handle state change values */
  const handleChangeValue = useCallback(
    (value: any, state: string) => {
      setRefInfo(prevState => ({...prevState, [state]: value}));
    },
    [refInfo],
  );

  //** Navigate to create new refeeral code screen */
  const onNavigateToCreateReferralCode = useCallback(() => {
    navigation?.navigate('CreateReferralCode');
  }, [navigation]);

  return {
    refInfo,
    onNavigateToCreateReferralCode,
  };
};

export default useRefManagement;
