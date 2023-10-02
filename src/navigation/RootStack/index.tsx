import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import SCREENS from '@constants/screens';
import AppStack from '@navigation/AppStack';
import SplashScreen from '@screens/splash';

const Root = createNativeStackNavigator();

export default function RootStack() {
  return (
    <Root.Navigator screenOptions={{ headerShown: false }}>
      <Root.Screen name={SCREENS.SPLASH} component={SplashScreen} />
      <Root.Screen name={SCREENS.APP._} component={AppStack} />
    </Root.Navigator>
  );
}
