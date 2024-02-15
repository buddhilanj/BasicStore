import { ColorValue } from 'react-native';

type Properties = 'red' | 'green' | 'blue';
type RGBColor = { [key in Properties]: number } & { name: string };
type StringColor = { name: string; color: ColorValue };
type Color = RGBColor | StringColor;

export function isRGBColor(color: Color): color is RGBColor {
  return (
    typeof color === 'object' &&
    color !== null &&
    'red' in color &&
    'green' in color &&
    'blue' in color &&
    'name' in color
  );
}

export function isStringColor(color: Color): color is StringColor {
  return typeof color === 'object' && color !== null && 'name' in color && 'color' in color;
}

export default Color;
