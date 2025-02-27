import { CoffeeDecorator } from '../coffee-decorator';

export class SugarDecorator extends CoffeeDecorator {
  getCost(): number {
    return this.coffee.getCost() + 1;
  }

  getDescription(): string {
    return `${this.coffee.getDescription()}, with sugar`;
  }
} 