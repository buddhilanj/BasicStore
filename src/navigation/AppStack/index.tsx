import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import SCREENS from '@constants/screens';
import HomeTabs from '@navigation/HomeTabs';
import ConfirmationScreen from '@screens/confirmation';
import ProductScreen from '@screens/product';

const App = createNativeStackNavigator();

export default function AppStack() {
  return (
    <App.Navigator>
      <App.Screen name={SCREENS.APP.HOME._} component={HomeTabs} options={{ headerShown: false }} />
      <App.Screen name={SCREENS.APP.CONFIRMATION} component={ConfirmationScreen} />
      <App.Screen name={SCREENS.APP.PRODUCT} component={ProductScreen} />
    </App.Navigator>
  );
}
