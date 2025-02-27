import { IAbstractFactory } from './interfaces/factory';
import { ConcreteFactory } from './implementations/concrete-factory';

class Main {
  private factory: IAbstractFactory;

  constructor(factory: IAbstractFactory) {
    this.factory = factory;
  }

  public async start(): Promise<void> {
    const productA = this.factory.createProductA();
    const productB = this.factory.createProductB();

    console.log(productA.operation());
    console.log(productB.operation());
  }
}

const main = new Main(new ConcreteFactory());
main.start().catch(console.error); 