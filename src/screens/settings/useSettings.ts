import { useCallback, useState } from 'react';
import { SettingsInfoProps } from './Settings';
import { useDispatch } from 'react-redux';
import { logoutSucces } from '@redux/userReducer/reducer';
import { useAuthNavigation } from '@hooks/useAppNavigation';

const useSettings = () => {
  const dispatch = useDispatch();
  const navigation = useAuthNavigation();
  const [settingsInfo, setSettingsInfo] = useState<SettingsInfoProps>({
    accountDeleteConfirmationModal: false,
    logoutConfirmationModal: false,
  });

  //** Handle state change values */
  const handleChangeValue = useCallback(
    (value: boolean, state: string) => {
      setSettingsInfo(prevState => ({ ...prevState, [state]: value }));
    },
    [settingsInfo],
  );

  //** Delete and Logout modal handler */
  const modalHandler = useCallback(
    (index: number) => {
      if (index === 1) {
        handleChangeValue(
          !settingsInfo?.accountDeleteConfirmationModal,
          'accountDeleteConfirmationModal',
        );
      } else {
        handleChangeValue(
          !settingsInfo?.logoutConfirmationModal,
          'logoutConfirmationModal',
        );
        dispatch(logoutSucces());
        navigation.navigate('Splash');
      }
    },
    [settingsInfo],
  );

  //** Navigate to settings details screen */
  const navigationHandler = useCallback(
    (id: string) => {
      if (id === '6' || id === '7') {
        if (id === '6') {
          handleChangeValue(
            !settingsInfo?.logoutConfirmationModal,
            'logoutConfirmationModal',
          );
        } else {
          handleChangeValue(
            !settingsInfo?.accountDeleteConfirmationModal,
            'accountDeleteConfirmationModal',
          );
        }
      }
    },
    [settingsInfo],
  );

  return {
    settingsInfo,
    modalHandler,
    navigationHandler,
  };
};

export default useSettings;
