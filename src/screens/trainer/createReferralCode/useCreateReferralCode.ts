import {useCallback, useMemo, useState} from 'react';
import {
  CreateReferralErrorProps,
  CreateReferralProps,
} from './CreateReferralCode';

const useCreateReferralCode = () => {
  const [referralCodeInfo, setReferralCodeInfo] = useState<CreateReferralProps>(
    {
      code: 'SUPERSAVER',
      referralBy: 'John walker',
      discount: '15%',
      comment: '',
      isCopyCode: false,
    },
  );
  const [error, setError] = useState<CreateReferralErrorProps>({
    code: undefined,
    referralBy: undefined,
    discount: undefined,
    comment: undefined,
  });

  //** Handle submit button isDisabled & isActive*/
  const isDisabled = useMemo(
    () =>
      !referralCodeInfo?.code ||
      !referralCodeInfo?.referralBy ||
      !referralCodeInfo?.discount ||
      !referralCodeInfo?.comment,
    [referralCodeInfo],
  );

  //** Handle state change values */
  const handleChangeValue = useCallback(
    (value: any, state: string) => {
      setReferralCodeInfo(prevState => ({...prevState, [state]: value}));
    },
    [referralCodeInfo],
  );

  // //** Handle copy code */
  const handleCopyCode = useCallback(() => {
    handleChangeValue(!referralCodeInfo?.isCopyCode, 'isCopyCode');
  }, [referralCodeInfo]);

  return {
    referralCodeInfo,
    error,
    isDisabled,
    handleChangeValue,
    handleCopyCode,
  };
};

export default useCreateReferralCode;
