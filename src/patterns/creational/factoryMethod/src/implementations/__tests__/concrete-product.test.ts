import { ConcreteProduct } from '../concrete-product';

describe('ConcreteProduct', () => {
  let product: ConcreteProduct;

  beforeEach(() => {
    product = new ConcreteProduct();
  });

  it('should return correct operation string', () => {
    expect(product.operation()).toBe('ConcreteProduct');
  });
}); 