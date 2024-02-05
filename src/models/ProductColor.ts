type Properties = 'red' | 'green' | 'blue';
type RGBColor = { [key in Properties]: number } & { name: string };
type Color = RGBColor | string;

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

export default Color;
