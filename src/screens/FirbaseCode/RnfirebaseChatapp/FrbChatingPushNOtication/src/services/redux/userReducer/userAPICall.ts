  import { Log } from '../../../utility/log';
import axiosInstance from '../../api';
import constant from '../../config/constant';
import {getUserDetails} from './reducer';
import {createAsyncThunk} from '@reduxjs/toolkit';
 
const fetchUserProfile = createAsyncThunk(
  'users/fetchUserProfile',
  async (token: string | undefined, thunkAPI) => {
    try {
      const response = await axiosInstance.get(
        `${constant.getProfile}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      ); // Replace with your API endpoint
      if (response.status === 200) {
        thunkAPI.dispatch(getUserDetails(response?.data));
        return response.data;
      }
    } catch (error: any) {
      Log('error fetchUserProfile::::', error);
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message,
      );
    }
  },
);

export {fetchUserProfile};
