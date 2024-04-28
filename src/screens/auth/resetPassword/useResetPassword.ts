import {useAuthNavigation} from '@hooks/useAppNavigation';
import validationMessage from '@utility/validation/validationMessage';
import {useCallback, useMemo, useState} from 'react';
import {PasswordInfoErrorProps, PasswordInfoProps} from './ResetPassword';

const useResetPassword = () => {
  const navigation = useAuthNavigation();
  const [passwordInfo, setPasswordInfo] = useState<PasswordInfoProps>({
    newPassword: '',
    confirmPassword: '',
  });
  const [error, setError] = useState<PasswordInfoErrorProps>({
    newPassword: undefined,
    confirmPassword: undefined,
  });

  //** Handle state change values */
  const handleChangeValue = useCallback(
    (value: string, state: string) => {
      setPasswordInfo(prevState => ({...prevState, [state]: value}));
    },
    [passwordInfo],
  );

  //** Handle submit button isDisabled & isActive*/
  const isDisabled = useMemo(
    () => !passwordInfo?.newPassword || !passwordInfo?.confirmPassword,
    [passwordInfo],
  );

  //** Navigate to login screen */
  const onPressLogin = useCallback(() => {
    navigation.navigate('Login');
    setPasswordInfo({newPassword: '', confirmPassword: ''});
  }, [navigation]);

  //** Validate reset password */
  const onValidate = useCallback(() => {
    let isValid = true;
    if (passwordInfo?.newPassword !== passwordInfo?.confirmPassword) {
      isValid = false;
      error.confirmPassword = validationMessage.notMatch;
    } else {
      error.confirmPassword = undefined;
    }
    setError({...error});
    if (isValid) {
      onLogin();
    }
  }, [passwordInfo?.newPassword, passwordInfo?.confirmPassword, navigation]);

  //** Submit Login */
  const onLogin = useCallback(() => {
    navigation.navigate('Login');
    setPasswordInfo({newPassword: '', confirmPassword: ''});
  }, [navigation]);

  return {
    passwordInfo,
    error,
    isDisabled,
    handleChangeValue,
    onPressLogin,
    onValidate,
  };
};

export default useResetPassword;
