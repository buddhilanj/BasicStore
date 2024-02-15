import { View, ViewProps } from 'react-native';
import React from 'react';
import UnscrollableList from '@components/generic/UnscrollableList';
import Color from '@models/ProductColor';
import { ProductSize } from '@models/ProductSize';
import styles from './style';

interface ProductVariationsProps extends ViewProps {
  colors: Color[] | undefined;
  sizes: ProductSize[] | undefined;
  onColorSelected: (color: Color) => void;
  onSizeSelected: (size: ProductSize) => void;
}

export default function ProductVariations({
  colors,
  sizes,
  onColorSelected,
  onSizeSelected,
  style,
}: ProductVariationsProps) {
  return (
    <View style={[styles.container, style]}>
      {colors && (
        <UnscrollableList
          list={colors.map(color => color.name) ?? []}
          title="Color"
          onSelected={(color: string) => {
            const colorObj = colors.find(c => c.name === color);
            if (colorObj) onColorSelected(colorObj);
          }}
        />
      )}
      {sizes && (
        <UnscrollableList
          list={sizes.map(size => size) ?? []}
          title="Size"
          onSelected={(size: string) => {
            const sizeObj = sizes.find(s => s === size);
            if (sizeObj) onSizeSelected(sizeObj);
          }}
        />
      )}
    </View>
  );
}
