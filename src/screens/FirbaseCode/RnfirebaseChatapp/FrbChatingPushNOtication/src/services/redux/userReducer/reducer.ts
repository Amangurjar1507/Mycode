import {createSlice} from '@reduxjs/toolkit';
import {fetchUserProfile} from './userAPICall';
import {ReducerState} from './interface';
import {Log} from '../../../utility/log';

const initialState: ReducerState = {
  userData: {},
  isLogin: false,
  token: undefined,
  id: undefined,
  isActiveNotification: false,
};

const UserData = createSlice({
  name: 'users',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      return {
        ...state,
        token: action.payload?.accessToken,
        isLogin: true,
        id: action.payload?.id,
      };
    },

    logoutSucces: state => {
      return {
        ...state,
        userData: undefined,
        isLogin: false,
        token: undefined,
      };
    },

    getUserDetails: (state, action) => {
      return {
        ...state,
        userData: action.payload,
      };
    },
    toggleShowNotification: state => {
      return {
        ...state,
        isActiveNotification: true,
      };
    },
    toggleHideNotification: state => {
      return {
        ...state,
        isActiveNotification: false,
      };
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
      return {
        ...state,
        userData: action.payload,
      };
    });

    builder.addCase(fetchUserProfile.rejected, (state, action) => {
      Log('User details get failed', action.error);
      return {
        ...state,
      };
    });
  },
});

export const {
  loginSuccess,
  getUserDetails,
  logoutSucces,
  toggleShowNotification,
  toggleHideNotification,
} = UserData.actions;

export default UserData.reducer;
