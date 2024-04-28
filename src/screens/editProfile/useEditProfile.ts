import { useAuthNavigation, useAuthRoute } from '@hooks/useAppNavigation';
import { useCallback, useEffect, useState } from 'react';
import { EditProfileErrorProps, EditProfileProps } from './EditProfile';
import ImagePicker from 'react-native-image-crop-picker';
import { useSelector } from 'react-redux';
import { ReducerState } from '@redux/userReducer/interface';

const useEditProfile = () => {
  const navigation = useAuthNavigation();
  const route = useAuthRoute('EditProfile');
  const userDetails = useSelector((state: any) => state.UserData?.userData);
  const [editProfile, setEditProfile] = useState<EditProfileProps>({
    fName: '',
    lName: '',
    education: '',
    selectLocation: userDetails?.location,
    experience: '',
    about: '',
    instagram: '',
    tikTok: '',
    youTube: '',
    loading: false,
    profile: '',
    backgroundProfile: '',
  });
  const [error, setError] = useState<EditProfileErrorProps>({
    fName: undefined,
    lName: undefined,
    education: undefined,
    selectLocation: undefined,
    experience: undefined,
    about: undefined,
    instagram: undefined,
    tikTok: undefined,
    youTube: undefined,
  });

  useEffect(() => {
    setEditProfile(prevState => ({
      ...prevState,
      fName: userDetails?.lName,
      lName: userDetails?.lName,
      education: userDetails?.education,
      selectLocation: route?.params?.selectLocation ?? userDetails?.location,
      experience: userDetails?.experience,
      about: userDetails?.about,
      instagram: userDetails?.instagram,
      tikTok: userDetails?.tikTok,
      youTube: userDetails?.instagram,
    }));
  }, [editProfile.selectLocation, route?.params?.selectLocation]);

  const onPressLocation = useCallback(() => {
    navigation.navigate('Location', {
      typeScreen: 'EditProfile'
    });
  }, [navigation]);

  //** user Profile and backgroundProfile change function */
  const onOpenImagePicker = (type: string) => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      mediaType: 'photo',
      cropping: true,
    }).then(image => {
      if (type == 'profile') {
        setEditProfile(prevState => ({
          ...prevState,
          profile: image?.path,
        }));
      } else {
        setEditProfile(prevState => ({
          ...prevState,
          backgroundProfile: image?.path,
        }));
      }

    });
  };

  //** Handle state change values */
  const handleChangeValue = useCallback(
    (value: string, state: string) => {
      setEditProfile(prevState => ({ ...prevState, [state]: value }));
    },
    [editProfile],
  );
  return {
    onPressLocation,
    editProfile,
    onOpenImagePicker,
    handleChangeValue
  };
};

export default useEditProfile;
