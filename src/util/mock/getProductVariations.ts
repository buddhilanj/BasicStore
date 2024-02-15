import { Product, ProductVariations } from '@models/Product';
import { getMockColors, getRandomColorIndexes } from './getColors';
import getMockSizes from './getSizes';

class MockProductVariations {
  private static instance: MockProductVariations | null = null;

  private variations: { [key: number]: { colorIndexes: number[]; mockSizes: boolean } } = {};

  // eslint-disable-next-line no-useless-constructor
  private constructor() {
    // Private constructor to prevent instantiation
  }

  static getInstance(): MockProductVariations {
    if (!this.instance) {
      this.instance = new MockProductVariations();
    }
    return this.instance;
  }

  addVariations(productId: number, colorIndexes: number[], mockSizes: boolean): void {
    this.variations[productId] = { colorIndexes, mockSizes };
  }

  getProductVariations(productId: number): { colorIndexes: number[]; mockSizes: boolean } {
    return this.variations[productId];
  }

  randomizeVariations(product: Product): ProductVariations {
    let variations = this.variations[product.id];
    const sizes = getMockSizes(variations?.mockSizes ?? undefined);
    if (!variations) {
      const colorIndexes = getRandomColorIndexes([], 3);
      variations = { colorIndexes, mockSizes: sizes.length === 0 };
      this.addVariations(product.id, variations.colorIndexes, variations.mockSizes);
    }
    return {
      color: getMockColors(variations.colorIndexes),
      size: sizes,
    } satisfies ProductVariations;
  }
}

export default MockProductVariations;
