import { IProduct } from '../interfaces/product.interface';

export class ConcreteProduct implements IProduct {
  public operation(): string {
    return 'ConcreteProduct';
  }
} 