import {useAuthNavigation, useAuthRoute} from '@hooks/useAppNavigation';
import moment from 'moment';
import {useCallback, useMemo, useState} from 'react';
import validationMessage from '@utility/validation/validationMessage';
import {AccountInfoProps, CreateAccountErrorProps} from './CreateAccount';

const useCreateAccount = () => {
  const navigation = useAuthNavigation();
  const route = useAuthRoute('CreateAccount');
  const [accountInfo, setAccountInfo] = useState<AccountInfoProps>({
    isAccept: false,
    dateOfBirth: '',
    fName: '',
    lName: '',
    password: '',
  });
  const [error, setError] = useState<CreateAccountErrorProps>({
    fName: undefined,
    lName: undefined,
    password: undefined,
    dateOfBirth: undefined,
  });
  const currentDate = moment();
  const diffYears = currentDate.diff(accountInfo?.dateOfBirth, 'years');

  //** Handle submit button isDisabled & isActive*/
  const isDisabled = useMemo(
    () =>
      !accountInfo?.fName ||
      !accountInfo?.lName ||
      !accountInfo?.password ||
      !accountInfo?.isAccept ||
      !accountInfo?.dateOfBirth,
    [accountInfo],
  );

  //** Handle state change values */
  const handleChangeValue = useCallback(
    (value: string, state: string) => {
      setAccountInfo(prevState => ({...prevState, [state]: value}));
    },
    [accountInfo],
  );

  //** Handle i agree checkbox */
  const toggleIAgreeCheckBox = useCallback(() => {
    setAccountInfo(prevState => ({
      ...prevState,
      isAccept: !accountInfo?.isAccept,
    }));
  }, [accountInfo?.isAccept]);

  //** Validate create new account */
  const onValidate = useCallback(() => {
    let isValid = true;
    if (diffYears > 18) {
      isValid = false;
      error.dateOfBirth = validationMessage.invalidDOB;
    } else {
      error.dateOfBirth = undefined;
    }
    setError({...error});
    if (isValid) {
      onPressContinue();
    }
  }, [diffYears, error.dateOfBirth, validationMessage, accountInfo]);

  //** Submit account info */
  const onPressContinue = useCallback(() => {
    //** step first data pass this screen AccountType */
    let stepFirstData: AccountInfoProps = {
      email: route?.params?.email?.toLowerCase(),
      fName: accountInfo?.fName,
      lName: accountInfo?.lName,
      password: accountInfo?.password,
      dateOfBirth: accountInfo?.dateOfBirth,
      isAccept: accountInfo?.isAccept,
    };
    navigation.navigate('AccountType', {stepFirst: stepFirstData});
  }, [navigation, accountInfo]);

  return {
    accountInfo,
    setAccountInfo,
    error,
    isDisabled,
    handleChangeValue,
    toggleIAgreeCheckBox,
    onValidate,
    onPressContinue,
  };
};

export default useCreateAccount;
