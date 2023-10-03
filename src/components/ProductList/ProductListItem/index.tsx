import { Text, View, Image, TouchableOpacity } from 'react-native';
import React, { memo } from 'react';

import { Product } from '@models/Product';
import getStyles from './style';

interface ProductListItemProps {
  product: Product;
  itemsPerRow: number;
  onProductPress: (product: Product) => void;
}

function ProductListItem({ product, itemsPerRow, onProductPress }: ProductListItemProps) {
  const styles = getStyles(itemsPerRow);
  return (
    <TouchableOpacity onPress={() => onProductPress(product)}>
      <View style={styles.container}>
        <Image style={styles.imageThumbnail} source={{ uri: product.thumbnail }} />
        <Text>{product.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default memo(ProductListItem);
