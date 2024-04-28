import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit';
import { ReducerState } from './interface';

import { fetchUserProfile } from './userAPICall';
const initialState: ReducerState = {
  userData: {
    fName: '',
    lName: '',
    education: '',
    location: '',
    experience: '',
    about: '',
    instagram: '',
    tikTok: '',
  },
  isLogin: false,
  token: undefined,
  DarkTheme: false,
};
export const clearAction = createAction('clear');
const UserData = createSlice({
  name: 'users',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      return {
        ...state,
        token: action.payload?.accessToken,
        userData: action.payload,
        isLogin: true,
      };
    },
    logoutSucces: (state) => {
      return {
        ...state,
        token: undefined,
        userData: undefined,
        isLogin: false,
      };
    },

    themeChange: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        DarkTheme: action.payload,
      };
    },

    getUserDetails: (state, action) => {
      return {
        ...state,
        userData: action.payload,
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
      return {
        ...state,
      };
    });

    builder.addCase(clearAction, () => initialState);
  },
});

export const { loginSuccess, themeChange, getUserDetails, logoutSucces } = UserData.actions;

export default UserData.reducer;
