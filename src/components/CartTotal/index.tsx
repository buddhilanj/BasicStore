import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';

type CartTotalProps = {
  total: number;
  onCheckout: () => void;
};

export default function CartTotal({ total, onCheckout }: CartTotalProps) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.text}>Cart Total:</Text>
        <View style={styles.fill} />
        <Text style={styles.text}>{total}</Text>
      </View>
      <Button title="Checkout" disabled={total <= 0} onPress={onCheckout} />
    </View>
  );
}
