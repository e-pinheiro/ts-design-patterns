import { CoffeeDecorator } from '../coffee-decorator';

export class MilkDecorator extends CoffeeDecorator {
  getCost(): number {
    return this.coffee.getCost() + 2;
  }

  getDescription(): string {
    return `${this.coffee.getDescription()}, with milk`;
  }
} 