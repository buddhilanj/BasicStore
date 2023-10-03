import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import React, { useCallback } from 'react';

import ProductList from '@components/ProductList';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks';
import { Product } from '@models/Product';
import { HomeScreenNavigationProp } from '@navigation/types';
import { fetchProducts } from '@slices/products';
import styles from './style';

export default function HomeScreen() {
  const { products, length, total } = useAppSelector(state => state.products);
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const dispatch = useAppDispatch();
  const onReloadNext = (): void => {
    if (total > length) {
      dispatch(fetchProducts(length));
    }
  };
  const onProductPress = useCallback(
    (product: Product) => navigation.navigate('ProductScreen', { productId: product.id }),
    [navigation],
  );
  return (
    <SafeAreaView style={styles.container}>
      <ProductList products={products} reloadNext={onReloadNext} onProductPress={onProductPress} />
    </SafeAreaView>
  );
}
