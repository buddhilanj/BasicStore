import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import React, { useEffect } from 'react';

import { useAppSelector } from '@hooks/reduxHooks';
import { SplashScreenNavigationProp } from '@navigation/types';

import styles from './style';

export default function SplashScreen() {
  const isProductsLoaded = useAppSelector(state => state.products.status === 'succeeded');
  const navigation = useNavigation<SplashScreenNavigationProp>();
  useEffect(() => {
    if (isProductsLoaded) {
      navigation.navigate('AppStack');
    }
  }, [isProductsLoaded]);

  return (
    <View style={styles.container}>
      <Text>Splash Screen</Text>
    </View>
  );
}
