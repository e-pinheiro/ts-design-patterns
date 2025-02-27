import { Composite } from './components/Composite';
import { Leaf } from './components/Leaf';

class Main {

  public async start(): Promise<void> {
    // Create root composite
    const root = new Composite('Root');

    // Create branches
    const branch1 = new Composite('Branch 1');
    const branch2 = new Composite('Branch 2');

    // Create leaves
    const leaf1 = new Leaf('Leaf 1', 500);
    const leaf2 = new Leaf('Leaf 2', 800);
    const leaf3 = new Leaf('Leaf 3', 300);
    const leaf4 = new Leaf('Leaf 4', 600);

    // Build the tree
    branch1.add(leaf1);
    branch1.add(leaf2);
    branch2.add(leaf3);
    branch2.add(leaf4);

    root.add(branch1);
    root.add(branch2);

    // Execute the composite structure
    await root.execute();
  }
}

const main = new Main();
main.start().catch(console.error); 