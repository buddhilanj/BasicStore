import { FlatList, Dimensions, SafeAreaView } from 'react-native';
import React from 'react';
import { Product } from '@models/Product';
import ProductListItem from './ProductListItem';

import styles from './style';
import { ITEM_WIDTH_MIN } from './ProductListItem/style';

const { width } = Dimensions.get('window');

type ProductListProps = {
  products: Product[];
  reloadNext: () => void;
  onProductPress: (product: Product) => void;
};

export default function ProductList({ products, reloadNext, onProductPress }: ProductListProps) {
  const numColumns = Math.floor(width / ITEM_WIDTH_MIN);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductListItem
            product={item}
            itemsPerRow={numColumns}
            onProductPress={onProductPress}
          />
        )}
        keyExtractor={item => `${item.id}`}
        numColumns={numColumns}
        onEndReached={reloadNext}
        onEndReachedThreshold={numColumns}
      />
    </SafeAreaView>
  );
}
