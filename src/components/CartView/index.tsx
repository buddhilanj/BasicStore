import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { CartItem } from '@models/CartItem';

import CartListItem from './CartListItem';
import styles from './style';

interface CartViewProps {
  cartItems: CartItem[];
  onRemove: (cartItem: CartItem) => void;
  onChangeAmount: (cartItem: CartItem, amount: number) => void;
}

export default function CartView({ cartItems, onRemove, onChangeAmount }: CartViewProps) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => (
          <CartListItem cartItem={item} onRemove={onRemove} onChangeAmount={onChangeAmount} />
        )}
        keyExtractor={item => `${item.recordId}`}
      />
    </SafeAreaView>
  );
}
