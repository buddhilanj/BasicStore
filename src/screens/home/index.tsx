import { SafeAreaView } from 'react-native';
import React from 'react';
import ProductList from '@components/ProductList';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks';
import { fetchProducts } from '@slices/products';
import styles from './style';

export default function HomeScreen() {
  const { products, length, total } = useAppSelector(state => state.products);
  const dispatch = useAppDispatch();
  const onReloadNext = (): void => {
    if (total > length) {
      dispatch(fetchProducts(length));
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ProductList products={products} reloadNext={onReloadNext} />
    </SafeAreaView>
  );
}
