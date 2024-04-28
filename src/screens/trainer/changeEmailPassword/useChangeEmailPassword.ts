import {useAuthNavigation} from '@hooks/useAppNavigation';
import {useCallback, useState} from 'react';
import {ChangeEmailPasswordProps} from './ChangeEmailPassword';

const useChangeEmailPassword = () => {
  const navigation = useAuthNavigation();
  const [emailPassChange, setEmailPassCHange] =
    useState<ChangeEmailPasswordProps>({
      email: 'Orrdulev123@gmail.com',
      password: '*******',
    });
  const [error, setError] = useState({
    email: undefined,
    password: undefined,
  });

  //** Handle state change values */
  const handleChangeValue = useCallback(
    (value: string, state: string) => {
      setEmailPassCHange(prevState => ({...prevState, [state]: value}));
    },
    [emailPassChange],
  );

  //** Navigate to change email screen */
  const navigateToChange = useCallback((nav?: string) => {
    if (nav == 'email') {
      navigation.navigate('ChangeEmail');
    } else {
      navigation.navigate('ChangePassword');
    }
  }, []);

  //** Navigate to change email screen */
  const onPressNext = useCallback(() => {}, []);

  return {
    emailPassChange,
    error,
    onPressNext,
    navigateToChange,
    handleChangeValue,
  };
};

export default useChangeEmailPassword;
