import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  SplashScreen: undefined;
  AppStack: undefined;
};

export type SplashScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'AppStack'>;
