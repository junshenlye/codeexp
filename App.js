import 'react-native-gesture-handler';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import NavigationDrawer from './src/Navigation/Drawer';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <NavigationDrawer />
      </NavigationContainer>
    </>
  );
};

export default App;
