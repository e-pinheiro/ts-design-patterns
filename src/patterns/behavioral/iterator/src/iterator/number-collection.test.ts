import { NumberCollection } from './number-collection';

describe('NumberCollection', () => {
  let collection: NumberCollection;

  beforeEach(() => {
    collection = new NumberCollection();
  });

  describe('addItem', () => {
    it('should add items to the collection', () => {
      collection.addItem(1);
      collection.addItem(2);
      
      const iterator = collection.getIterator();
      expect(iterator.next()).toBe(1);
      expect(iterator.next()).toBe(2);
    });
  });

  describe('Iterator', () => {
    beforeEach(() => {
      collection.addItem(1);
      collection.addItem(2);
      collection.addItem(3);
    });

    it('should traverse all items in the collection', () => {
      const iterator = collection.getIterator();
      expect(iterator.hasNext()).toBe(true);
      expect(iterator.next()).toBe(1);
      expect(iterator.next()).toBe(2);
      expect(iterator.next()).toBe(3);
      expect(iterator.hasNext()).toBe(false);
    });

    it('should reset iterator to the beginning', () => {
      const iterator = collection.getIterator();
      
      // First traversal
      iterator.next();
      iterator.next();
      expect(iterator.next()).toBe(3);
      
      // Reset and verify we're back at the start
      iterator.reset();
      expect(iterator.next()).toBe(1);
    });

    it('should return undefined when trying to get next item at the end', () => {
      const iterator = collection.getIterator();
      
      // Traverse all items
      iterator.next();
      iterator.next();
      iterator.next();
      
      // Try to get next item when at the end
      expect(iterator.next()).toBeUndefined();
    });

    it('should correctly report hasNext status', () => {
      const iterator = collection.getIterator();
      
      expect(iterator.hasNext()).toBe(true);
      iterator.next(); // 1
      expect(iterator.hasNext()).toBe(true);
      iterator.next(); // 2
      expect(iterator.hasNext()).toBe(true);
      iterator.next(); // 3
      expect(iterator.hasNext()).toBe(false);
    });
  });
}); 