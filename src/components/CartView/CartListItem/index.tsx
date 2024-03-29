import React, { memo } from 'react';
import { View, Text, Image } from 'react-native';
import { CartItem } from '@models/CartItem';
import IconButton from '@components/generic/IconButton';
import styles from './style';

type CartListItemProps = {
  cartItem: CartItem;
  onRemove: (cartItem: CartItem) => void;
  onChangeAmount: (cartItem: CartItem, amount: number) => void;
};

function CartListItem({ cartItem, onRemove, onChangeAmount }: CartListItemProps) {
  return (
    <View style={[styles.row, styles.container, styles.wrapper, styles.split]}>
      <Image style={styles.thumbnail} source={{ uri: cartItem.thumbnail }} />
      <View style={[styles.container]}>
        <Text style={(styles.text, styles.titleText)}>{cartItem.title}</Text>
        <View style={[styles.row, styles.split]}>
          {cartItem.selectedVarient.map(variation => (
            <Text>
              {variation.type === 'color'
                ? `Color: ${variation.color.name}`
                : `Size: ${variation.size}`}
            </Text>
          ))}
        </View>
        <View style={[styles.row]}>
          <Text style={styles.text}>Price : {cartItem.price}</Text>
          <View style={[styles.row, styles.container]}>
            <Text style={styles.text}>Qty</Text>
            <View style={[styles.row, styles.container]}>
              <IconButton
                icon="add-circle"
                size={20}
                onPress={() => {
                  onChangeAmount(cartItem, 1);
                }}
              />
              <Text style={styles.text}>{cartItem.quantity}</Text>
              <IconButton
                icon="remove-circle"
                size={20}
                onPress={() => {
                  onChangeAmount(cartItem, -1);
                }}
              />
            </View>
          </View>
        </View>
      </View>
      <IconButton icon="trash" onPress={() => onRemove(cartItem)} />
    </View>
  );
}

export default memo(CartListItem);
