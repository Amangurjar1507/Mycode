import { useAuthNavigation } from '@hooks/useAppNavigation';
import { useCallback, useRef, useState } from 'react';
import Video from 'react-native-video';
import { ExerciseStateProps } from './Exercise';

const useExercise = () => {
  const navigation = useAuthNavigation();
  const videoRef = useRef<Video>(null);
  const [exercise, setExercise] = useState<ExerciseStateProps>({
    videoShow: false,
    selectedExerciseItems: [],
  });

  //** Add Exercise after navigate to BodyWeightOnly   */
  const onAdd = useCallback(() => {
    navigation.navigate('BodyWeightOnly', {
      selectExercise: exercise.selectedExerciseItems,
    });
  }, [navigation, exercise.selectedExerciseItems]);

  //** Exercise Show and modal open*/
  const onShowVideo = useCallback(() => {
    setExercise(prevState => ({
      ...prevState,
      videoShow: !prevState.videoShow,
    }));
  }, [exercise.videoShow]);

  //** Exercise select*/
  const onSelectExercise = useCallback((item: object) => {
    setExercise(prevState => {
      const isSelected = prevState.selectedExerciseItems.includes(item);
      const updatedSelectedItems = isSelected
        ? prevState.selectedExerciseItems.filter(
          selectedItem => selectedItem !== item,
        )
        : [...prevState.selectedExerciseItems, item];

      return {
        ...prevState,
        selectedExerciseItems: updatedSelectedItems,
      };
    });
  }, [exercise?.selectedExerciseItems]);

  //** Navigate to Filters   */
  const onFilters = useCallback(() => {
    navigation.navigate('Filters');
  }, [navigation,]);

  //** Navigate to Filters   */
  const onNewExercise = useCallback(() => {
    navigation.navigate('NewExercise');
  }, [navigation,]);

  return {
    onAdd,
    videoRef,
    onShowVideo,
    onSelectExercise,
    exercise,
    onFilters,
    onNewExercise,
  };
};

export default useExercise;
