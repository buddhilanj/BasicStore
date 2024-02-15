import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks';
import { SplashScreenNavigationProp } from '@navigation/types';
import { fetchProducts } from '@slices/products';
import styles from './style';

export default function SplashScreen() {
  const isProductsLoaded = useAppSelector(state => state.products.status === 'succeeded');
  const navigation = useNavigation<SplashScreenNavigationProp>();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (isProductsLoaded) {
      navigation.navigate('AppStack');
    }
  }, [navigation, isProductsLoaded]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Text>Splash Screen</Text>
    </View>
  );
}
