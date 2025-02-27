export interface IProduct {
  operation(): string;
}

export interface IAbstractFactory {
  createProductA(): IProduct;
  createProductB(): IProduct;
} 