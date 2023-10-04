import { Button, Text, View } from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ConfirmationScreenNavigationProp, ConfirmationScreenRouteProp } from '@navigation/types';
import { useAppDispatch } from '@hooks/reduxHooks';
import { clearCart } from '@slices/cart';
import styles from './style';

export default function ConfirmationScreen() {
  const route = useRoute<ConfirmationScreenRouteProp>();
  const dispatch = useAppDispatch();
  const navigation = useNavigation<ConfirmationScreenNavigationProp>();
  const { total } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Total : {total}</Text>
      <Button
        title="Pay"
        onPress={() => {
          dispatch(clearCart());
          navigation.goBack();
        }}
      />
    </View>
  );
}
