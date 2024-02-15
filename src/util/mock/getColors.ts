/* eslint-disable import/prefer-default-export */
import mockColors from '@assets/json/mockColors.json';
import Color from '@models/ProductColor';

const staticColors = [
  { name: 'Black', color: 'black' },
  { name: 'White', color: 'white' },
];

export function getRandomColorIndexes(exclude: number[], count: number): number[] {
  const available = mockColors.colors.length;
  const result: number[] = [];
  let resultCount = 0; // using a seperate counter to avoid lint error
  while (resultCount < count) {
    const random = Math.floor(Math.random() * available);
    if (!exclude.includes(random) && !result.includes(random)) {
      result.push(random);
      resultCount += 1; // since lint is disabling unary operators, we can't use ++resultCount
    }
  }
  return result;
}

function jsonToColor(index: number): Color {
  return {
    name: mockColors.colors[index].name,
    red: mockColors.colors[index].rgb.red,
    green: mockColors.colors[index].rgb.green,
    blue: mockColors.colors[index].rgb.blue,
  };
}

function addColor(array: Color[], ...color: Color[]): Color[] {
  array.push(...color);
  return array;
}

export function getMockColors(toPush: number[]): Color[] {
  const colors: Color[] = [];
  addColor(colors, ...toPush.map(jsonToColor));
  addColor(colors, ...staticColors);
  return colors;
}
