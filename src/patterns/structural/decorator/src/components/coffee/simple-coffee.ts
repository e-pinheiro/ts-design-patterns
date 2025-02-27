import { BaseCoffee } from './coffee.interface';

export class SimpleCoffee extends BaseCoffee {
  getCost(): number {
    return 10;
  }

  getDescription(): string {
    return 'Simple Coffee';
  }
} 