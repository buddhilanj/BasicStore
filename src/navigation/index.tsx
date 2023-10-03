import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from '@navigation/RootStack';

function AppNavigation() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

export default AppNavigation;
