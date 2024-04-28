import { useAuthNavigation } from '@hooks/useAppNavigation';
import { useCallback, useState } from 'react';
import { deviceData, librariesList, mainMuscleList, typeList } from './mainMuscle.const';
import { MuscleListItemProps } from './MainMuscle';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParams } from '@navigation/stacks/rootStackParams';

const useMainMuscle = () => {
  const route = useRoute<RouteProp<RootStackParams, 'MainMuscle'>>();
  let routeData: string | undefined = route?.params?.filterType;
  const [muscleList, setMuscleList] = useState<MuscleListItemProps[]>(
    routeData == 'Libraries' ?
      mainMuscleList : routeData == 'Type' ?
        typeList : routeData == 'Device' ?
          deviceData : librariesList
  );
  //** Select Check and UnCheck*/
  const onSelectMuscle = useCallback((index: number) => {
    setMuscleList(prevList => {
      const newList = [...prevList];
      newList[index].checked = !newList[index].checked;
      return newList;
    });
  }, [muscleList]);
  return { onSelectMuscle, muscleList, routeData };
};
export default useMainMuscle;
