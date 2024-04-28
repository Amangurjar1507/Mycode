import {useAuthNavigation} from '@hooks/useAppNavigation';
import {useCallback, useMemo, useState} from 'react';
import {dropdownList} from './newExercise.const';

const useNewExercise = () => {
  const navigation = useAuthNavigation();
  const [exerciseInfo, setExerciseInfo] = useState({
    exerciseName: '',
    setsList: dropdownList,
    isOpenSets: false,
    setsValue: '',
    repsList: dropdownList,
    isOpenReps: false,
    repsValue: '',
    typeList: dropdownList,
    isOpenType: false,
    typeValue: '',
    tagsList: dropdownList,
    isOpenTags: false,
    tagsValue: '',
    equipmentList: dropdownList,
    isOpenEquipment: false,
    equipmentValue: '',
    mainMuscleList: dropdownList,
    isOpenMainMuscle: false,
    mainMuscleValue: '',
    secondaryMuscleList: dropdownList,
    isOpenSecondaryMuscle: false,
    secondaryMuscleValue: '',
  });

  //** Handle submit button isDisabled & isActive*/
  const isDisabled = useMemo(
    () =>
      !exerciseInfo?.exerciseName ||
      !exerciseInfo?.setsValue ||
      !exerciseInfo?.repsValue ||
      !exerciseInfo?.typeValue ||
      !exerciseInfo?.tagsValue ||
      !exerciseInfo?.equipmentValue ||
      !exerciseInfo?.mainMuscleValue ||
      !exerciseInfo?.secondaryMuscleValue,
    [exerciseInfo],
  );

  //** Handle state change values */
  const handleChangeValue = useCallback(
    (value: any, state: string) => {
      setExerciseInfo(prevState => ({...prevState, [state]: value}));
    },
    [exerciseInfo],
  );

  //** Dropdown handler */
  const onToggleDropdown = useCallback(
    (value: boolean, state: string) => {
      handleChangeValue(!value, state);
    },
    [navigation, exerciseInfo],
  );

  return {
    exerciseInfo,
    isDisabled,
    handleChangeValue,
    onToggleDropdown,
  };
};

export default useNewExercise;
