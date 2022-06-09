import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Login from './src/pages/Login/Login';

function App() {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <Login />
    </SafeAreaView>
  );
}

export default App;
