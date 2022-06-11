import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import MovieDetails from '../pages/MovieDetails';
import { MovieDetailsProps, RootParamList } from '../utils/interfaces';

const Stack = createStackNavigator();

function MovieDetailsScreen({ route }: MovieDetailsProps) {
  return (
    <MovieDetails
      movieName={route.params.movieName}
      movieDate={route.params.movieDate}
      movieId={route.params.movieId}
      movieBanner={route.params.movieBanner}
    />
  );
}

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} />
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
