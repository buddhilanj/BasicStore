import React, { useEffect, useState } from 'react';
import { Button, Image, Text, View } from 'react-native';
import PagerView from 'react-native-pager-view';

import { ProductScreenRouteProp } from '@navigation/types';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ProductDetail } from '@models/ProductDetail';
import getProduct from '@api/services/getProduct';
import styles from './style';

export default function ProductScreen() {
  const route = useRoute<ProductScreenRouteProp>();
  const navigation = useNavigation();
  const { productId } = route.params;
  const [product, setProduct] = useState<ProductDetail | null>(null);

  const fetchProduct = async (id: number) => {
    const rProduct: ProductDetail = await getProduct(id);
    setProduct(rProduct);
  };

  const addToCart = () => {
    navigation.goBack();
  };

  useEffect(() => {
    fetchProduct(productId);
  }, []);

  if (product === null)
    return (
      <View style={styles.container}>
        <Text style={[styles.normalText, styles.titleText]}>Loading...</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <PagerView style={styles.carousel}>
        {product.images.map(image => (
          <Image key={image} style={styles.imageView} source={{ uri: image }} />
        ))}
      </PagerView>
      <Text style={[styles.normalText, styles.titleText]}>Title: {product.title}</Text>
      <Text style={[styles.normalText]}>Price: {product.price}</Text>
      <Text style={[styles.normalText]}>Available Quantity: {product.stock}</Text>
      <Text style={[styles.normalText]}>Description: {product.description}</Text>
      <Button title="Add to Cart" onPress={addToCart} />
    </View>
  );
}
