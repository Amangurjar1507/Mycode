// import {combineReducers} from 'redux';
// import UserReducer from './userReducer/reducer';

// const RootReducer = combineReducers({
//   UserReducer,
// });

// export default RootReducer;
import { View, Text } from 'react-native'
import React from 'react'

export default function rootReducer() {
  return (
    <View>
      <Text>rootReducer</Text>
    </View>
  )
}