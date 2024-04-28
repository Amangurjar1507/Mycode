import { useAuthNavigation } from '@hooks/useAppNavigation';
import { useCallback, useState } from 'react';

const useCreateNewProgram = () => {
  const navigation = useAuthNavigation();
  const [submitModal, setSubmitModal] = useState<boolean>(false);

  //** Delete and Logout modal handler */
  const modalHandler = useCallback(() => {
    setSubmitModal(!submitModal);
  }, [submitModal]);

  //** Navigate to Program Name screen */
  const onCreateProgram = useCallback(() => {
    navigation.navigate('ProgramName');
  }, [navigation]);

  return { onCreateProgram, modalHandler, submitModal, setSubmitModal };
};

export default useCreateNewProgram;
