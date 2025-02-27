import { Leaf } from '../Leaf';

describe('Leaf', () => {
  it('should execute with the specified delay', async () => {
    const leaf = new Leaf('TestLeaf', 100);
    const start = Date.now();
    
    await leaf.execute();
    const duration = Date.now() - start;
    
    expect(duration).toBeGreaterThanOrEqual(100);
  });

  it('should not have composite methods', () => {
    const leaf = new Leaf('TestLeaf');
    
    // @ts-expect-error - Leaf should not have composite methods
    leaf.add;
    // @ts-expect-error - Leaf should not have composite methods
    leaf.remove;
    // @ts-expect-error - Leaf should not have composite methods
    leaf.getChildren;
  });
}); 