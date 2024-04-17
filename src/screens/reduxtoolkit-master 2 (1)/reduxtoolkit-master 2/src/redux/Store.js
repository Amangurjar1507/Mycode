import { combineReducers, configureStore } from "@reduxjs/toolkit";
import addReducer from '../redux/Adduserslic';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore,persistReducer } from "redux-persist";
const persistConfig={
  key:'root',
  storage:AsyncStorage
};

// const persistedReducer =persistReducer(persistConfig,addReducer);
// export const store = configureStore({
//   reducer: {
//     UserAdd: addReducer,
//   },
// });
const rootReducer = combineReducers({ 
  UserAdd: addReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer
})
export const persistor= persistStore(store);
export default store;