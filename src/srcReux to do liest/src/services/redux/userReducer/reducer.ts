import {UserReducerState} from './interface';
import types from './types';
const initialState = {
  userData: undefined,
};
const UserReducer = (state: UserReducerState = initialState, action: any) => {
  switch (action.type) {
    case types.get:
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
};

export default UserReducer;
