import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

interface IconButtonProps {
  icon: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
});

export default function IconButton({ icon, onPress }: IconButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Ionicons name={icon} size={24} color="black" />
    </TouchableOpacity>
  );
}
