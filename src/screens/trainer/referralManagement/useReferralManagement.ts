import { useCallback, useRef, useState } from 'react';
import {
  bottomSheetList,
  referralManagementList,
} from './referralManagement.const';
import { useAuthNavigation } from '@hooks/useAppNavigation';

const useReferralManagement = () => {
  const navigation = useAuthNavigation();
  const refRBSheet = useRef([]);
  const [referralInfo, setReferralInfo] = useState({
    referralList: referralManagementList,
    bottomSheetList: bottomSheetList,
  });

  //** open Menu show function */
  const openMenuSheet = useCallback(
    (index: number) => {
      refRBSheet.current[index]?.open();
    },
    [refRBSheet],
  );

  const onPressRightIcon = useCallback(() => {
    navigation.navigate('Filters', { filterType: 'Analytics' });
  }, []);

  return { referralInfo, refRBSheet, openMenuSheet, onPressRightIcon };
};

export default useReferralManagement;
