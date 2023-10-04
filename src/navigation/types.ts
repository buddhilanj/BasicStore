import type { RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  SplashScreen: undefined;
  AppStack: undefined;
};

export type AppStackParamList = {
  HomeTabs: undefined;
  ProductScreen: { productId: number };
  ConfirmationScreen: { total: number };
};

export type HomeTabsParamList = {
  HomeScreen: undefined;
  CartScreen: undefined;
};

export type SplashScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'AppStack'>;

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  AppStackParamList,
  'ProductScreen'
>;

export type CartScreenNavigationProp = NativeStackNavigationProp<
  AppStackParamList,
  'ConfirmationScreen'
>;

export type ConfirmationScreenNavigationProp = NativeStackNavigationProp<
  AppStackParamList,
  'ConfirmationScreen'
>;

export type ProductScreenRouteProp = RouteProp<AppStackParamList, 'ProductScreen'>;
export type ConfirmationScreenRouteProp = RouteProp<AppStackParamList, 'ConfirmationScreen'>;
