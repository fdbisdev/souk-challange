import { createSlice } from '@reduxjs/toolkit';

import { IUser } from '../../utils/interfaces';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    isLogged: false,
  },
  reducers: {
    changeUser: (state, { payload }) => {
      return { ...state, isLogged: true, name: payload };
    },
    logOut: state => {
      return { ...state, isLogged: false, name: '' };
    },
  },
});

export const { changeUser, logOut } = userSlice.actions;

export const selectUser = (state: IUser) => state.user;

export default userSlice.reducer;
