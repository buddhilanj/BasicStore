import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

type IconButtonProps = {
  icon: keyof typeof Ionicons.glyphMap;
  size?: number;
  onPress: () => void;
} & typeof defaultProps;

const defaultProps = {
  size: 24,
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
});

export default function IconButton({ icon, size, onPress }: IconButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container]}>
      <Ionicons name={icon} size={size} color="black" />
    </TouchableOpacity>
  );
}

IconButton.defaultProps = defaultProps;
