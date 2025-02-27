import { ConcreteCreator } from '../concrete-creator';
import { ConcreteProduct } from '../concrete-product';

describe('ConcreteCreator', () => {
  let creator: ConcreteCreator;

  beforeEach(() => {
    creator = new ConcreteCreator();
  });

  it('should create a ConcreteProduct', () => {
    const product = creator.createProduct();
    expect(product).toBeInstanceOf(ConcreteProduct);
  });

  it('should execute someOperation correctly', () => {
    const result = creator.someOperation();
    expect(result).toBe('Creator: Working with ConcreteProduct');
  });
}); 