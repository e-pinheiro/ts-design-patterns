import { ConcreteFactory } from '../concrete-factory';
import { ConcreteProductA, ConcreteProductB } from '../products';

describe('Abstract Factory Pattern', () => {
  let factory: ConcreteFactory;

  beforeEach(() => {
    factory = new ConcreteFactory();
  });

  describe('ConcreteFactory', () => {
    it('should create Product A', () => {
      const product = factory.createProductA();
      expect(product).toBeInstanceOf(ConcreteProductA);
      expect(product.operation()).toBe('Product A operation');
    });

    it('should create Product B', () => {
      const product = factory.createProductB();
      expect(product).toBeInstanceOf(ConcreteProductB);
      expect(product.operation()).toBe('Product B operation');
    });
  });

  describe('Concrete Products', () => {
    it('ConcreteProductA should return correct operation string', () => {
      const productA = new ConcreteProductA();
      expect(productA.operation()).toBe('Product A operation');
    });

    it('ConcreteProductB should return correct operation string', () => {
      const productB = new ConcreteProductB();
      expect(productB.operation()).toBe('Product B operation');
    });
  });
}); 