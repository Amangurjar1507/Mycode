import { useAuthNavigation } from '@hooks/useAppNavigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { MyProgramsStateProps } from './MyPrograms';
import { getUserDetails } from '@redux/userReducer/reducer';
import { useDispatch } from 'react-redux';
import { userDetailsData } from './myPrograms.const';

const useMyPrograms = () => {
  const navigation = useAuthNavigation();
  const dispatch = useDispatch()
  const refRBSheet = useRef<Array<any | null>>([]);
  const [myPrograms, setMyPrograms] = useState<MyProgramsStateProps>({
    modalVisible: false,
    modalType: '',
  });

  //** Get profile details data */
  useEffect(() => {
    dispatch(getUserDetails(userDetailsData));
  }, []);

  //** Navigate to create package screen */
  const onNavCreateNewPackage = useCallback(() => {
    navigation.navigate('CreateNewPackages');
  }, [navigation]);

  //** Navigate to create program screen */
  const onNavCreateNewProgram = useCallback(() => {
    navigation.navigate('CreateNewProgram');
  }, [navigation]);

  //** open Menu show bottom  */
  const openMenuSheet = useCallback(
    (index: number) => {
      refRBSheet.current[index]?.open();
    },
    [refRBSheet],
  );

  //** Delete and Logout modal handler */
  const modalHandler = useCallback((type: string) => {
    setMyPrograms((prevState) => ({
      ...prevState,
      modalVisible: !prevState.modalVisible,
      modalType: type,
    }));
  }, [myPrograms?.modalType, myPrograms?.modalType, refRBSheet]);

  return {
    onNavCreateNewPackage,
    onNavCreateNewProgram,
    openMenuSheet,
    refRBSheet,
    modalHandler,
    myPrograms,
  };
};

export default useMyPrograms;
