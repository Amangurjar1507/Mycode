import {useAuthNavigation} from '@hooks/useAppNavigation';
import {useCallback} from 'react';

const useProgramName = () => {
  const navigation = useAuthNavigation();

  //** OnClick Save button */
  const onSave = useCallback(() => {
    // navigation.navigate('ForgotPassword');
  }, [navigation]);

  //** OnClick Review button */
  const onReview = useCallback(() => {
    // navigation.navigate('ForgotPassword');
  }, [navigation]);

  //** Navigate to Body Weight Only screen */
  const onCreateNewSession = useCallback(() => {
    navigation.navigate('BodyWeightOnly');
  }, [navigation]);

  return {onReview, onSave, onCreateNewSession};
};

export default useProgramName;
