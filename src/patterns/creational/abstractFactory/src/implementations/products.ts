import { IProduct } from '../interfaces/factory';

export class ConcreteProductA implements IProduct {
  operation(): string {
    return 'Product A operation';
  }
}

export class ConcreteProductB implements IProduct {
  operation(): string {
    return 'Product B operation';
  }
} 