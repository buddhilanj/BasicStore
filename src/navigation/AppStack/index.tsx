import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import HomeTabs from '@navigation/HomeTabs';
import { AppStackParamList } from '@navigation/types';
import ConfirmationScreen from '@screens/confirmation';
import ProductScreen from '@screens/product';

const App = createNativeStackNavigator<AppStackParamList>();

export default function AppStack() {
  return (
    <App.Navigator>
      <App.Screen name="HomeTabs" component={HomeTabs} options={{ headerShown: false }} />
      <App.Screen name="ConfirmationScreen" component={ConfirmationScreen} />
      <App.Screen name="ProductScreen" component={ProductScreen} />
    </App.Navigator>
  );
}
