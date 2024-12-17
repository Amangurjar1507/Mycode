import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC } from 'react';
 import { MyDashBoardStackParams } from './myDashBoardStackParams';
import { MyDashBoardStackScreens } from './myDashBoardStack.const';
 
const Stack = createNativeStackNavigator<MyDashBoardStackParams>();
const MyDashBoardStack: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
      }}>
      {MyDashBoardStackScreens?.map(screen => (
        <Stack.Screen
          key={screen?.name}
          name={screen?.name as keyof MyDashBoardStackParams}
          component={screen?.component}
        />
      ))}
    </Stack.Navigator>
  );
};

export default MyDashBoardStack;
