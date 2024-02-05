/* eslint-disable import/prefer-default-export */
import mockColors from '@assets/json/mockColors.json';
import Color from '@models/ProductColor';

const staticColors = ['black', 'white'];

export function getMockColors(): Color[] {
  const colors: Color[] = [];
  const pushed: number[] = [];
  for (let i = 0; i < 3; i++) {
    let random = Math.floor(Math.random() * mockColors.colors.length);
    while (pushed.includes(random)) {
      random = Math.floor(Math.random() * mockColors.colors.length);
    }
    colors.push({
      name: mockColors.colors[random].name,
      red: mockColors.colors[random].rgb.red,
      green: mockColors.colors[random].rgb.green,
      blue: mockColors.colors[random].rgb.blue,
    });
    pushed.push(random);
  }
  colors.push(...staticColors);
  return colors;
}
