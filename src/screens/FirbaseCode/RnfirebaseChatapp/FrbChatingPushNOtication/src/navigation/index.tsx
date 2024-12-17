 import {NavigationContainer} from '@react-navigation/native';
 import {FC} from 'react';
import RootStack from './stacks/RootStack';
import { navigationRef } from '../utility/navigationServices';
 
const Route: FC = () => {
  return (
    <NavigationContainer
      ref={navigationRef}
      // onReady={() => SplashScreen.hide()}
      >
      <RootStack />
    </NavigationContainer>
  );
};

export default Route;
