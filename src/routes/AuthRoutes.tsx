import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';

type RootParamList = {
  Home: undefined;
  AuthRoutes: undefined;
};

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

const RootStack = createStackNavigator<RootParamList>();

function AuthRoutes() {
  return (
    <RootStack.Navigator initialRouteName="AuthRoutes">
      <RootStack.Screen
        name="AuthRoutes"
        component={AuthStack}
        options={{
          headerShown: false,
        }}
      />
    </RootStack.Navigator>
  );
}

export default AuthRoutes;
