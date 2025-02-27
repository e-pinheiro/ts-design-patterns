import { Creator } from './interfaces/creator.interface';
import { ConcreteCreator } from './implementations/concrete-creator';

class Main {
  private creator: Creator;

  constructor() {
    this.creator = new ConcreteCreator();
  }

  public async start(): Promise<void> {
    console.log(this.creator.someOperation());
  }
}

const main = new Main();
main.start().catch(console.error); 