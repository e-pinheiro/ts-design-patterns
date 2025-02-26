import { NumberCollection } from './iterator/number-collection';

class Main {

  public async start(): Promise<void> {
    // Create a collection and add some numbers
    const numberCollection = new NumberCollection();
    numberCollection.addItem(1);
    numberCollection.addItem(2);
    numberCollection.addItem(3);
    numberCollection.addItem(4);
    numberCollection.addItem(5);

    // Get iterator
    const iterator = numberCollection.getIterator();

    // Use iterator to traverse the collection
    console.log('Traversing collection:');
    while (iterator.hasNext()) {
      console.log(iterator.next());
    }

    // Reset and traverse again
    console.log('\nResetting and traversing again:');
    iterator.reset();
    while (iterator.hasNext()) {
      console.log(iterator.next());
    }
  }
}

const main = new Main();
main.start().catch(console.error); 