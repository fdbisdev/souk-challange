import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';

const Stack = createStackNavigator();

type RootParamList = {
  Login: undefined;
  UnAuthRoutes: undefined;
};

function UnAuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login"
    >
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

const RootStack = createStackNavigator<RootParamList>();

function UnAuthRoutes() {
  return (
    <RootStack.Navigator initialRouteName="UnAuthRoutes">
      <RootStack.Screen
        name="UnAuthRoutes"
        component={UnAuthStack}
        options={{
          headerShown: false,
        }}
      />
    </RootStack.Navigator>
  );
}

export default UnAuthRoutes;
