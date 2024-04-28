import { useAuthNavigation } from '@hooks/useAppNavigation';
import { RootStackParams } from '@navigation/stacks/rootStackParams';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useCallback, useRef, useState } from 'react';
import { BodyWeightOnlyStateProps } from './BodyWeightOnly';

const useBodyWeightOnly = () => {
  const navigation = useAuthNavigation();
  const refRBSheet = useRef<any>(null);
  const route = useRoute<RouteProp<RootStackParams, 'BodyWeightOnly'>>();
  let routeData: object | any = route?.params?.selectExercise;
  const [bodyWeightOnly, setBodyWeightOnly] =
    useState<BodyWeightOnlyStateProps>({
      circuitAndSupersetShow: false,
      sessionShow: false,
      selectType: undefined,
    });

  //** Show Session Function */
  const onAddNewSession = useCallback(() => {
    setBodyWeightOnly(prevState => ({
      ...prevState,
      sessionShow: !prevState.sessionShow,
    }));
  }, [bodyWeightOnly?.sessionShow]);

  //** Add New Session Clip */
  const onAddNewSessionClip = useCallback(() => {
    setBodyWeightOnly(prevState => ({
      ...prevState,
      sessionShow: false,
      circuitAndSupersetShow: false,
    }));
  }, [bodyWeightOnly?.sessionShow, bodyWeightOnly?.circuitAndSupersetShow]);

  //** Open Superset and Session show Function */
  const onClipOption = useCallback(
    (item: any) => {
      setBodyWeightOnly(prevState => ({
        ...prevState,
        circuitAndSupersetShow: !prevState.circuitAndSupersetShow,
        selectType: item?.title,
      }));
    },
    [
      bodyWeightOnly?.selectType,
      bodyWeightOnly?.circuitAndSupersetShow,
    ],
  );
  //** Close Superset and Circuit   */
  const onClipCloseOption = useCallback(() => {
    setBodyWeightOnly(prevState => ({
      ...prevState,
      circuitAndSupersetShow: !prevState.circuitAndSupersetShow,
    }));
  }, [
    bodyWeightOnly?.selectType,
    bodyWeightOnly?.circuitAndSupersetShow,
  ]);

  //** Navigate to Exercise screen */
  const onNewExercise = useCallback(() => {
    navigation.navigate('Exercise');
  }, [navigation]);

  //** Open Menu Bottom Sheet  */
  const openMenuSheet = useCallback(() => {
    refRBSheet.current.open();
  }, [refRBSheet]);

  //** Navigate to workoutPlan screen */
  const onPublish = useCallback(() => {
    navigation.navigate('WorkoutPlan');
  }, [navigation]);

  //** Navigate to DuplicateSession screen */
  const onDuplicateSession = useCallback(() => {
    refRBSheet.current.close();
    navigation.navigate('DuplicateSession');
  }, [navigation, refRBSheet]);

  return {
    onAddNewSession,
    onNewExercise,
    routeData,
    onClipOption,
    openMenuSheet,
    refRBSheet,
    onClipCloseOption,
    bodyWeightOnly,
    onAddNewSessionClip,
    onPublish,
    onDuplicateSession
  };
};

export default useBodyWeightOnly;
