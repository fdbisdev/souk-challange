import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider, useSelector } from 'react-redux';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthRoutes from './src/routes/AuthRoutes';
import UnAuthRoutes from './src/routes/UnAuthRoutes';

import store from './src/redux/store/store';

import { IUser } from './src/utils/interfaces';

function Routes() {
  const { isLogged } = useSelector((state: IUser) => state.user);

  return (
    <NavigationContainer>
      {isLogged ? <AuthRoutes /> : <UnAuthRoutes />}
    </NavigationContainer>
  );
}

function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Routes />
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
