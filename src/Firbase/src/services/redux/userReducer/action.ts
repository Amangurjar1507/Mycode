import {UserReducerState} from './interface';
import types from './types';

const Success = (payload: UserReducerState) => ({
  type: types.get,
  payload,
});

export {Success};
