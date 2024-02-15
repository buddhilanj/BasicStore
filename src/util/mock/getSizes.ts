import { ProductSize } from '@models/ProductSize';

export default function getMockSizes(forceAdd?: boolean): ProductSize[] {
  const shouldAddSize = forceAdd ?? Math.random() > 0.5;
  return shouldAddSize ? [] : ['S', 'M', 'L', 'XL', 'XXL'];
}
