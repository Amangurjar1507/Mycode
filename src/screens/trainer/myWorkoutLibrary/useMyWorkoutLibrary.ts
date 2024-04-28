import { useAuthNavigation } from '@hooks/useAppNavigation';
import { useCallback, useState } from 'react';
import { MyWorkoutLibraryStateProps } from './MyWorkoutLibrary';

const useMyWorkoutLibrary = () => {
  const navigation = useAuthNavigation();
  const [myWorkoutLibrary, setMyWorkoutLibrary] = useState<MyWorkoutLibraryStateProps>({
    cardSelectShow: false,
    deleteModalShow: false,
    selectIndex: undefined,
  });

  //** card Select show and current index get */
  const onClickCard = useCallback(
    (index: number) => {
      setMyWorkoutLibrary((prevState) => ({
        ...prevState,
        cardSelectShow: true,
        selectIndex: index,
      }))
    },
    [myWorkoutLibrary?.selectIndex],
  );

  //** Delete Modal show */
  const onDeleteModal = useCallback(() => {
    setMyWorkoutLibrary((prevState) => ({
      ...prevState,
      deleteModalShow: !prevState?.deleteModalShow
    }))
  }, [myWorkoutLibrary?.deleteModalShow]);

  //** Navigate to Add New Exercise Screen */
  const onAddNewExercise = useCallback(() => {
    navigation.navigate('NewExercise');
  }, [navigation]);

  return {
    onClickCard,
    onDeleteModal,
    onAddNewExercise,
    myWorkoutLibrary
  };
};

export default useMyWorkoutLibrary;
