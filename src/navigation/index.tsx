import RootStack from '@navigation/stacks/RootStack';
import { NavigationContainer } from '@react-navigation/native';
import { FC } from 'react';
import SplashScreen from 'react-native-splash-screen';

const Route: FC = () => {
  return (
    <NavigationContainer independent={true} onReady={() => SplashScreen.hide()}>
      <RootStack />
    </NavigationContainer>
  );
};

export default Route;
