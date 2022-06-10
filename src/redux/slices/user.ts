import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { IUser } from '../../utils/interfaces';

const storeUserInStorage = async (user: IUser) => {
  try {
    await AsyncStorage.setItem('@user', JSON.stringify(user));
  } catch (err: any) {
    throw new Error(err);
  }
};

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    isLogged: false,
  },
  reducers: {
    changeUser: (state, { payload }) => {
      try {
        storeUserInStorage(payload);
        return { ...state, isLogged: true, name: payload };
      } catch (err: any) {
        throw new Error(err);
      }
    },
    logOut: state => {
      return { ...state, isLogged: false, name: '' };
    },
  },
});

export const { changeUser, logOut } = userSlice.actions;

export const selectUser = (state: IUser) => state.user;

export default userSlice.reducer;
