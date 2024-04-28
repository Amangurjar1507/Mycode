import { useAuthNavigation, useAuthRoute } from '@hooks/useAppNavigation';
import { useCallback, useState } from 'react';
import { locations } from './location.const';

const useLocation = () => {
  const navigation = useAuthNavigation();
  const route = useAuthRoute('Location');
  const [locInfo, setLocInfo] = useState({
    locationList: locations,
    selectLocation: '',
    isSelected: false,
  });

  //** step second data signup */
  const stepSecondWithStepThird: any = {
    ...route?.params?.secondStep,
    selectLocation: locInfo?.selectLocation,
  };

  //** Handle state change values */
  const handleChangeValue = useCallback(
    (value: any, state: string) => {
      setLocInfo(prevState => ({ ...prevState, [state]: value }));
    },
    [locInfo],
  );

  //** Change the value on select language */
  const onSelectLocation = useCallback(
    (id: string) => {
      handleChangeValue(true, 'isSelected');
      let selectedLocationTitle = '';
      const updatedLocations = locInfo?.locationList.map(loc => {
        if (loc?.id === id) {
          const updatedLoc = { ...loc, selected: !loc?.selected };
          if (updatedLoc.selected) {
            selectedLocationTitle = updatedLoc?.title;
          }
          return updatedLoc;
        } else {
          return { ...loc, selected: false };
        }
      });
      handleChangeValue(updatedLocations, 'locationList');
      handleChangeValue(selectedLocationTitle, 'selectLocation');
    },
    [locInfo],
  );

  //** Select location after pass data and type check after navigation screen  */
  const onSaveChanges = useCallback(() => {
    if (route?.params?.typeScreen == 'OtherDetails') {
      navigation.navigate('OtherDetails', {
        secondStep: stepSecondWithStepThird,
      });
    } else {
      navigation.navigate(route?.params?.typeScreen, {
        selectLocation: locInfo?.selectLocation,
      });
    }
  }, [navigation, locInfo]);

  return { locInfo, onSelectLocation, onSaveChanges };
};

export default useLocation;
