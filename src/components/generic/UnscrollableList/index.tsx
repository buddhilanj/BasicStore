import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ViewProps } from 'react-native';

type UnscrollableListProps = {
  list: string[];
  title: string;
  onSelected: (selected: string) => void;
} & ViewProps;

const styles = StyleSheet.create({
  container: { flex: 1 },
  text: {},
  selected: { backgroundColor: 'green' },
});

export default function UnscrollableList({
  list,
  title,
  onSelected,
  style,
}: UnscrollableListProps) {
  const [selected, setSelected] = useState<string | null>(null);
  if (list.length === 0) return null;
  return (
    <View style={[styles.container, style]}>
      <Text>{title}</Text>
      {list.map(item => (
        <TouchableOpacity
          key={item}
          onPress={() => {
            setSelected(item);
            onSelected?.(item);
          }}>
          <Text style={[styles.text, selected === item && styles.selected]}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
