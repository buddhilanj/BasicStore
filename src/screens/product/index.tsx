import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Button, Image, Text, View } from 'react-native';
import PagerView from 'react-native-pager-view';

import getProduct from '@api/services/getProduct';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks';
import { ProductDetail } from '@models/ProductDetail';
import { CartItemWrapper } from '@models/CartItem';
import { ProductScreenRouteProp } from '@navigation/types';
import { addItem } from '@slices/cart';
import { isProduct } from '@models/Product';
import styles from './style';

export default function ProductScreen() {
  const dispatch = useAppDispatch();
  const length = useAppSelector(state => state.cart.items.length);
  const navigation = useNavigation();
  const route = useRoute<ProductScreenRouteProp>();
  const [product, setProduct] = useState<ProductDetail | null>(null);

  const { productId } = route.params;

  const fetchProduct = async (id: number) => {
    const rProduct: ProductDetail = await getProduct(id);
    setProduct(rProduct);
  };

  const handleAddToCart = () => {
    if (!isProduct(product)) {
      return;
    }
    const vals = { recordID: length + 1, product, quantity: 1 };
    const cartItem = new CartItemWrapper({ new: vals });
    dispatch(addItem(cartItem.getCartItem()));
    navigation.goBack();
  };

  useEffect(() => {
    fetchProduct(productId);
  }, [productId]);

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
      <Text style={[styles.normalText, styles.titleText]}>{product.title}</Text>
      <Text style={[styles.normalText]}>Price: {product.price}</Text>
      <Text style={[styles.normalText]}>Available Quantity: {product.stock}</Text>
      <Text style={[styles.normalText]}>Description: {product.description}</Text>
      <Button title="Add to Cart" onPress={handleAddToCart} />
    </View>
  );
}
