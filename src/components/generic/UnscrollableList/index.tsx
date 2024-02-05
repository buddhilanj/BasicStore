import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type UnscrollableListProps = {
  list: string[];
  title: string;
  onSelected: (selected: string) => void;
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  text: {},
  selected: { backgroundColor: 'green' },
});

export default function UnscrollableList({ list, title, onSelected }: UnscrollableListProps) {
  const [selected, setSelected] = useState<string | null>(null);
  if (list.length === 0) return null;
  return (
    <View style={[styles.container]}>
      <Text>{title}</Text>
      {list.map(item => (
        <TouchableOpacity
          key={item}
          onPress={() => {
            setSelected(item);
            onSelected?.(item);
          }}>
          <Text style={[styles.text, selected === item ? styles.selected : {}]}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
