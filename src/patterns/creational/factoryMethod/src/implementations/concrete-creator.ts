import { Creator } from '../interfaces/creator.interface';
import { IProduct } from '../interfaces/product.interface';
import { ConcreteProduct } from './concrete-product';

export class ConcreteCreator extends Creator {
  public createProduct(): IProduct {
    return new ConcreteProduct();
  }
}