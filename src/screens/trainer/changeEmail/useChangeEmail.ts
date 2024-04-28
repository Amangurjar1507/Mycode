import {useAuthNavigation} from '@hooks/useAppNavigation';
import {useCallback, useMemo, useState} from 'react';

const useChangeEmail = () => {
  const navigation = useAuthNavigation();
  const [emailChange, setEmailChange] = useState({
    currentEmail: 'Orrdulev123@gmail.com',
    verificationCode: '',
    emailChangeConfirmationModal: false,
  });
  const [error, setError] = useState({
    currentEmail: undefined,
    verificationCode: undefined,
  });

  //** Handle submit button isDisabled & isActive*/
  const isDisabled = useMemo(
    () => !emailChange?.verificationCode,
    [emailChange],
  );

  //** Handle state change values */
  const handleChangeValue = useCallback(
    (value: any, state: string) => {
      setEmailChange(prevState => ({...prevState, [state]: value}));
    },
    [emailChange],
  );

  //** Navigate to change email screen */
  const onPressNext = useCallback(() => {
    navigation.navigate('ChangeEmail');
  }, []);

  //** Email change confirmations modal handler */
  const modalHandler = useCallback(() => {
    handleChangeValue(
      !emailChange?.emailChangeConfirmationModal,
      'emailChangeConfirmationModal',
    );
  }, [emailChange]);

  return {
    emailChange,
    isDisabled,
    handleChangeValue,
    onPressNext,
    modalHandler,
  };
};

export default useChangeEmail;
