import { useAuthNavigation, useAuthRoute } from '@hooks/useAppNavigation';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { TellUsErrorProps, TellUsInfoProps } from './OtherDetails';
import params from '@config/params';
import { axiosInstance } from '@api/api';
import constant from '@config/constant';
import { Toast } from '@utility/functions/toast';
import { dateFormatter } from '@utility/functions/dateFormatter';
import { loginSuccess } from '@redux/userReducer/reducer';
import { useDispatch } from 'react-redux';

const useOtherDetails = () => {
  const dispatch = useDispatch();
  const navigation = useAuthNavigation();
  const route = useAuthRoute('OtherDetails');
  let StepFirstWithSecondStep: any = route?.params?.secondStep;
  const [tellUsInfo, setTellUsInfo] = useState<TellUsInfoProps>({
    education: '',
    experience: '',
    experienceFormat: '',
    instagram: '',
    tiktok: '',
    youtube: '',
    about: '',
    selectModal: false,
    selectLocation: StepFirstWithSecondStep?.selectLocation,
    loading: false,
  });
  const [error, setError] = useState<TellUsErrorProps>({
    education: undefined,
    experience: undefined,
    instagram: undefined,
    tiktok: undefined,
    youtube: undefined,
    about: undefined,
  });

  useEffect(() => {
    setTellUsInfo(prevState => ({
      ...prevState,
      selectLocation: StepFirstWithSecondStep?.selectLocation,
    }));
  }, [tellUsInfo.selectLocation, StepFirstWithSecondStep?.selectLocation]);
  //** Handle submit button isDisabled & isActive*/
  const isDisabled = useMemo(
    () =>
      !tellUsInfo?.education ||
      !tellUsInfo?.experience ||
      !StepFirstWithSecondStep?.selectLocation ||
      !tellUsInfo?.instagram ||
      !tellUsInfo?.tiktok ||
      !tellUsInfo?.youtube ||
      !tellUsInfo?.about,
    [tellUsInfo],
  );

  const experienceHandler = useCallback(
    (dateString: string) => {
      const referenceDate = new Date();
      const result = dateFormatter(dateString, referenceDate?.toDateString());
      handleChangeValue(result, 'experience');
      handleChangeValue(dateString, 'experienceFormat');
    },
    [tellUsInfo],
  );

  //** Handle state change values */
  const handleChangeValue = useCallback(
    (value: string, state: string) => {
      setTellUsInfo(prevState => ({ ...prevState, [state]: value }));
    },
    [tellUsInfo, route],
  );

  //** Validate tell us more */
  const onValidate = useCallback(() => {
    let isValid = true;
    if (!tellUsInfo?.education) {
      isValid = false;
      error.education = 'Required';
    } else {
      error.education = undefined;
    }
    setError({ ...error });
    if (isValid) {
      onPressContinue();
    }
  }, [navigation, tellUsInfo, StepFirstWithSecondStep]);
  //** Submit TellUs Details */
  const onPressContinue = useCallback(async () => {
    setTellUsInfo(prevState => ({
      ...prevState,
      loading: true,
    }));
    const socialMedia: any = {
      instagram: tellUsInfo?.instagram,
      tiktok: tellUsInfo?.tiktok,
      youtube: tellUsInfo?.youtube,
    }
    const formData = new URLSearchParams();
    formData.append(params?.email, StepFirstWithSecondStep?.email);
    formData.append(params?.password, StepFirstWithSecondStep?.password);
    formData.append(params?.firstName, StepFirstWithSecondStep?.fName);
    formData.append(params?.lastName, StepFirstWithSecondStep?.lName);
    formData.append(params?.dateOfBirth, StepFirstWithSecondStep?.dateOfBirth);
    formData.append(params?.privacyPolicy, StepFirstWithSecondStep?.isAccept);
    formData.append(params?.typeUser, StepFirstWithSecondStep?.accountType);
    formData.append(params?.educationAndQualification, tellUsInfo?.education);
    formData.append(params?.experience, tellUsInfo?.experienceFormat);
    formData.append(params?.country, StepFirstWithSecondStep?.selectLocation);
    formData.append(params?.about, tellUsInfo?.about);
    formData.append(
      params?.socialMedia,
      socialMedia
    );
    try {
      const { data } = await axiosInstance.post(
        constant?.signup,
        formData.toString(),
      );
      if (data) {
        dispatch(loginSuccess(data));
        setTellUsInfo(prevState => ({
          ...prevState,
          loading: false,
        }));
        Toast(data?.message);
        setTellUsInfo(prevState => ({
          ...prevState,
          education: '',
          experience: '',
          instagram: '',
          tiktok: '',
          youtube: '',
          about: '',
          selectLocation: '',
        }));
        navigation.navigate('HomeBottomTabs');
      }
    } catch (e: any) {
      setTellUsInfo(prevState => ({
        ...prevState,
        loading: false,
      }));
      Toast(e?.response?.data?.message);
    }
  }, [navigation, tellUsInfo]);

  //** Submit TellUs Details */
  const onPressLocation = useCallback(() => {
    navigation.navigate('Location', {
      secondStep: StepFirstWithSecondStep,
      typeScreen: 'OtherDetails',
    });
  }, [navigation, tellUsInfo?.selectLocation]);

  return {
    tellUsInfo,
    error,
    isDisabled,
    handleChangeValue,
    onValidate,
    onPressLocation,
    StepFirstWithSecondStep,
    experienceHandler,
  };
};

export default useOtherDetails;
