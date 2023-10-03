import { Text, View, Image } from 'react-native';
import React, { memo } from 'react';

import { Product } from '@models/Product';
import getStyles from './style';

interface ProductListItemProps {
  product: Product;
  itemsPerRow: number;
}

function ProductListItem({ product, itemsPerRow }: ProductListItemProps) {
  const styles = getStyles(itemsPerRow);
  return (
    <View style={styles.container}>
      <Image style={styles.imageThumbnail} source={{ uri: product.images[0] }} />
      <Text>{product.title}</Text>
    </View>
  );
}

export default memo(ProductListItem);
