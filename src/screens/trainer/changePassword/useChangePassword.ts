import {useAuthNavigation} from '@hooks/useAppNavigation';
import {useCallback, useState} from 'react';

const useChangePassword = () => {
  const navigation = useAuthNavigation();
  const [passChange, setPassChange] = useState({
    oldPassword: 'Orrdulev123@gmail.com',
    newPassword: '',
    confirmPassword: '*********',
    passChangeConfirmationModal: false,
  });

  const [error, setError] = useState({
    oldPassword: undefined,
    newPassword: undefined,
    confirmPassword: undefined,
  });

  //** Handle state change values */
  const handleChangeValue = useCallback(
    (value: any, state: string) => {
      setPassChange(prevState => ({...prevState, [state]: value}));
    },
    [passChange],
  );

  //** Navigate to change email screen */
  const onPressSaveChanges = useCallback(() => {
    navigation.navigate('ChangeEmail');
  }, []);

  //** Email change confirmations modal handler */
  const modalHandler = useCallback(() => {
    handleChangeValue(
      !passChange?.passChangeConfirmationModal,
      'passChangeConfirmationModal',
    );
  }, [passChange]);

  return {
    passChange,
    handleChangeValue,
    onPressSaveChanges,
    modalHandler,
  };
};

export default useChangePassword;
