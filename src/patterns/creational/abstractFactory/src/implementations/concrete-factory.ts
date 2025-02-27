import { IAbstractFactory, IProduct } from '../interfaces/factory';
import { ConcreteProductA, ConcreteProductB } from './products';

export class ConcreteFactory implements IAbstractFactory {
  createProductA(): IProduct {
    return new ConcreteProductA();
  }

  createProductB(): IProduct {
    return new ConcreteProductB();
  }
} 