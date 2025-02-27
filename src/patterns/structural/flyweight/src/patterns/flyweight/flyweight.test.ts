import { FlyweightFactory, ConcreteFlyweight } from './flyweight';

describe('Flyweight Pattern', () => {
  describe('FlyweightFactory', () => {
    let factory: FlyweightFactory;

    beforeEach(() => {
      factory = new FlyweightFactory();
    });

    test('should create new flyweight if it does not exist', () => {
      const flyweight = factory.getFlyweight('key1');
      
      expect(flyweight).toBeInstanceOf(ConcreteFlyweight);
      expect(factory.getFlyweightCount()).toBe(1);
    });

    test('should reuse existing flyweight if it exists', () => {
      const flyweight1 = factory.getFlyweight('key1');
      const flyweight2 = factory.getFlyweight('key1');
      
      expect(flyweight1).toBe(flyweight2);
      expect(factory.getFlyweightCount()).toBe(1);
    });

    test('should create different flyweights for different keys', () => {
      const flyweight1 = factory.getFlyweight('key1');
      const flyweight2 = factory.getFlyweight('key2');
      
      expect(flyweight1).not.toBe(flyweight2);
      expect(factory.getFlyweightCount()).toBe(2);
    });
  });

  describe('ConcreteFlyweight', () => {
    let consoleSpy: jest.SpyInstance;

    beforeEach(() => {
      consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });

    afterEach(() => {
      consoleSpy.mockRestore();
    });

    test('should handle operation with intrinsic and extrinsic state', () => {
      const flyweight = new ConcreteFlyweight('test');
      const extrinsicState = { data: 'external' };

      flyweight.operation(extrinsicState);

      expect(consoleSpy).toHaveBeenCalledWith(
        'Intrinsic State: test, Extrinsic State: {"data":"external"}'
      );
    });
  });
}); 