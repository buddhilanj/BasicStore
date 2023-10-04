import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

interface CartTotalProps {
  total: number;
}

export default function CartTotal({ total }: CartTotalProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cart Total:</Text>
      <View style={styles.fill} />
      <Text style={styles.text}>{total}</Text>
    </View>
  );
}
