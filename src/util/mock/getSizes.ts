import { ProductSize } from '@models/ProductSize';

export default function getMockSizes(): ProductSize[] {
  return Math.random() > 0.5 ? [] : ['S', 'M', 'L', 'XL', 'XXL'];
}
