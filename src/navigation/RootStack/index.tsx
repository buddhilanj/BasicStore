import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import AppStack from '@navigation/AppStack';
import { RootStackParamList } from '@navigation/types';
import SplashScreen from '@screens/splash';

const Root = createNativeStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <Root.Navigator screenOptions={{ headerShown: false }}>
      <Root.Screen name="SplashScreen" component={SplashScreen} />
      <Root.Screen name="AppStack" component={AppStack} />
    </Root.Navigator>
  );
}
