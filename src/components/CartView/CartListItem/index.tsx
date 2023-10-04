import React from 'react';
import { View, Text, Image } from 'react-native';
import { CartItem } from '@models/CartItem';
import IconButton from '@components/generic/IconButton';
import styles from './style';

interface CartListItemProps {
  cartItem: CartItem;
  onRemove: (cartItem: CartItem) => void;
  onChangeAmount: (cartItem: CartItem, amount: number) => void;
}

export default function CartListItem({ cartItem, onRemove, onChangeAmount }: CartListItemProps) {
  return (
    <View style={[styles.row, styles.container, styles.wrapper]}>
      <Image style={styles.thumbnail} source={{ uri: cartItem.thumbnail }} />
      <View style={styles.container}>
        <Text style={(styles.text, styles.titleText)}>{cartItem.title}</Text>
        <View style={[styles.row]}>
          <Text style={styles.text}>Price : {cartItem.price}</Text>
          <View style={styles.row}>
            <Text style={styles.text}>Qty</Text>
            <IconButton
              icon="add-circle"
              onPress={() => {
                onChangeAmount(cartItem, 1);
              }}
            />
            <Text style={styles.text}>{cartItem.quantity}</Text>
            <IconButton
              icon="remove-circle"
              onPress={() => {
                onChangeAmount(cartItem, -1);
              }}
            />
          </View>
        </View>
      </View>
      <IconButton icon="trash" onPress={() => onRemove(cartItem)} />
    </View>
  );
}
