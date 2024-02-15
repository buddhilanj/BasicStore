import React from 'react';
import { SafeAreaView, FlatList, View, Text } from 'react-native';
import { CartItem } from '@models/CartItem';

import CartListItem from './CartListItem';
import styles from './style';

type CartViewProps = {
  cartItems: CartItem[];
  onRemove: (cartItem: CartItem) => void;
  onChangeAmount: (cartItem: CartItem, amount: number) => void;
};

function EmptyCartView(): JSX.Element {
  return (
    <View style={[styles.center, styles.container]}>
      <Text> No Items in Cart</Text>
    </View>
  );
}

export default function CartView({ cartItems, onRemove, onChangeAmount }: CartViewProps) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        data={cartItems}
        renderItem={({ item }) => (
          <CartListItem cartItem={item} onRemove={onRemove} onChangeAmount={onChangeAmount} />
        )}
        keyExtractor={item => `${item.key}`}
        ListEmptyComponent={EmptyCartView}
      />
    </SafeAreaView>
  );
}
