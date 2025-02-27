import { Composite } from '../Composite';
import { Leaf } from '../Leaf';

describe('Composite', () => {
  let composite: Composite;

  beforeEach(() => {
    composite = new Composite('TestComposite');
  });

  it('should add and remove components correctly', () => {
    const leaf = new Leaf('TestLeaf');
    
    composite.add(leaf);
    expect(composite.getChildren()).toHaveLength(1);
    expect(composite.getChildren()[0]).toBe(leaf);

    composite.remove(leaf);
    expect(composite.getChildren()).toHaveLength(0);
  });

  it('should execute all children', async () => {
    const leaf1 = new Leaf('Leaf1', 100);
    const leaf2 = new Leaf('Leaf2', 100);
    
    composite.add(leaf1);
    composite.add(leaf2);

    const spy1 = jest.spyOn(leaf1, 'execute');
    const spy2 = jest.spyOn(leaf2, 'execute');

    await composite.execute();

    expect(spy1).toHaveBeenCalled();
    expect(spy2).toHaveBeenCalled();
  });
}); 