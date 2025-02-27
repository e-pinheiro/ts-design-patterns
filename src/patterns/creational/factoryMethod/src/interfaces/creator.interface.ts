import { IProduct } from './product.interface';

export abstract class Creator {
  abstract createProduct(): IProduct;

  public someOperation(): string {
    const product = this.createProduct();
    return `Creator: Working with ${product.operation()}`;
  }
} 