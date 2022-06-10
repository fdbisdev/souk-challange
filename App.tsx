import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider, useSelector } from 'react-redux';

import Home from './src/pages/Home';
import Login from './src/pages/Login';
import store from './src/redux/store/store';
import { IUser } from './src/utils/interfaces';

function Routes() {
  const { isLogged } = useSelector((state: IUser) => state.user);
  return (
    <NavigationContainer>{isLogged ? <Home /> : <Login />}</NavigationContainer>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
