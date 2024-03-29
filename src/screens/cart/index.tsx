import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import React from 'react';

import CartView from '@components/CartView';
import CartTotal from '@components/CartTotal';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks';
import { CartItem } from '@models/CartItem';
import { CartScreenNavigationProp } from '@navigation/types';
import { changeQuantity, removeItem } from '@slices/cart';
import styles from './style';

export default function CartScreen() {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<CartScreenNavigationProp>();
  const { items: cartItems, total } = useAppSelector(state => state.cart);

  const handleRemove = (cartItem: CartItem): void => {
    dispatch(removeItem(cartItem));
  };

  const handleChangeQty = (cartItem: CartItem, qty: number): void => {
    dispatch(changeQuantity({ key: cartItem.key, quantity: qty }));
  };

  const handleCheckout = (): void => {
    navigation.navigate('ConfirmationScreen', { total });
  };

  return (
    <SafeAreaView style={styles.container}>
      <CartView
        cartItems={Object.values(cartItems)}
        onRemove={handleRemove}
        onChangeAmount={handleChangeQty}
      />
      <CartTotal total={total} onCheckout={handleCheckout} />
    </SafeAreaView>
  );
}
