// import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
// import {AppDispatch} from './store';
// import {RootState} from './types';

//  export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
import { View, Text } from 'react-native'
import React from 'react'

export default function useReduxHooks() {
  return (
    <View>
      <Text>useReduxHooks</Text>
    </View>
  )
}