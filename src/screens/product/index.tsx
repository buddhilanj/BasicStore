import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Button, Image, Text, View } from 'react-native';
import PagerView from 'react-native-pager-view';

import getProduct from '@api/services/getProduct';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks';
import { ProductDetail } from '@models/ProductDetail';
import { CartItemVariation, CartItemWrapper } from '@models/CartItem';
import { ProductScreenRouteProp } from '@navigation/types';
import { addItem } from '@slices/cart';
import { Product, isProduct } from '@models/Product';
import Color, { isRGBColor } from '@models/ProductColor';
import UnscrollableList from '@components/generic/UnscrollableList';
import { ProductSize } from '@models/ProductSize';
import styles from './style';

export default function ProductScreen() {
  const dispatch = useAppDispatch();
  const length = useAppSelector(state => state.cart.items.length);
  const navigation = useNavigation();
  const route = useRoute<ProductScreenRouteProp>();
  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [selectedColor, setSelectedColor] = useState<Color | null>(null);
  const [selectedSize, setSelectedSize] = useState<ProductSize | null>(null);
  const { productId } = route.params;

  const fetchProduct = async (id: number) => {
    const rProduct: ProductDetail = await getProduct(id);
    setProduct(rProduct);
  };

  const handleAddToCart = () => {
    if (!isProduct(product)) {
      return;
    }

    const vals: {
      recordID: number;
      product: Product;
      quantity: number;
      selectedVarient: CartItemVariation[];
    } = { recordID: length + 1, product, quantity: 1, selectedVarient: [] };
    if (selectedColor) vals.selectedVarient.push({ type: 'color', color: selectedColor });
    if (selectedSize) vals.selectedVarient.push({ type: 'size', size: selectedSize });
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
      <View style={{ flexDirection: 'row' }}>
        <UnscrollableList
          list={
            product.variations?.color.map(color => (isRGBColor(color) ? color.name : color)) ?? []
          }
          title="Color"
          onSelected={selected => {
            setSelectedColor(
              product.variations?.color.find(color =>
                isRGBColor(color) ? color.name === selected : color === selected,
              ) ?? null,
            );
          }}
        />
        <UnscrollableList
          list={product.variations?.size.map(size => size) ?? []}
          title="Size"
          onSelected={selected => {
            setSelectedSize(product.variations?.size.find(size => size === selected) ?? null);
          }}
        />
      </View>
      <Button title="Add to Cart" onPress={handleAddToCart} />
    </View>
  );
}
