import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Button, Image, Text, View } from 'react-native';
import PagerView from 'react-native-pager-view';

import getProduct from '@api/services/getProduct';
import ProductVariations from '@components/ProductVariations';
import { useAppDispatch } from '@hooks/reduxHooks';
import { CartItemVariation, CartItemWrapper } from '@models/CartItem';
import { isProduct } from '@models/Product';
import Color from '@models/ProductColor';
import { ProductDetail } from '@models/ProductDetail';
import { ProductSize } from '@models/ProductSize';
import { ProductScreenRouteProp } from '@navigation/types';
import { addItem } from '@slices/cart';
import styles from './style';

export default function ProductScreen() {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const route = useRoute<ProductScreenRouteProp>();
  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [selectedColor, setSelectedColor] = useState<Color | null>(null);
  const [selectedSize, setSelectedSize] = useState<ProductSize | null>(null);
  const { productId } = route.params;

  const handleAddToCart = () => {
    if (!isProduct(product)) {
      return;
    }
    const selectedVarient: CartItemVariation[] = [];
    if (selectedColor) selectedVarient.push({ type: 'color', color: selectedColor });
    if (selectedSize) selectedVarient.push({ type: 'size', size: selectedSize });
    const cartItem = new CartItemWrapper(product, 1, selectedVarient, {});
    dispatch(addItem(cartItem.getCartItem()));
    navigation.goBack();
  };

  const handleColorSelected = (color: Color) => {
    setSelectedColor(color);
  };

  const handleSizeSelected = (size: ProductSize) => {
    setSelectedSize(size);
  };

  useEffect(() => {
    const fetchProduct = async (id: number) => {
      const rProduct: ProductDetail = await getProduct(id);
      setProduct(rProduct);
    };
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
      <ProductVariations
        colors={product.variations?.color}
        sizes={product.variations?.size}
        onColorSelected={handleColorSelected}
        onSizeSelected={handleSizeSelected}
      />
      <Button title="Add to Cart" onPress={handleAddToCart} />
    </View>
  );
}
