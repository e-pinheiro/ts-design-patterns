import { SimpleCoffee } from '../simple-coffee';
import { MilkDecorator } from '../decorators/milk-coffee';
import { SugarDecorator } from '../decorators/sugar-coffee';

describe('Coffee Decorator Pattern', () => {
  it('should create simple coffee with correct cost and description', () => {
    const coffee = new SimpleCoffee();
    expect(coffee.getCost()).toBe(10);
    expect(coffee.getDescription()).toBe('Simple Coffee');
  });

  it('should add milk correctly', () => {
    const coffee = new SimpleCoffee();
    const milkCoffee = new MilkDecorator(coffee);
    expect(milkCoffee.getCost()).toBe(12); // 10 + 2
    expect(milkCoffee.getDescription()).toBe('Simple Coffee, with milk');
  });

  it('should add sugar correctly', () => {
    const coffee = new SimpleCoffee();
    const sugarCoffee = new SugarDecorator(coffee);
    expect(sugarCoffee.getCost()).toBe(11); // 10 + 1
    expect(sugarCoffee.getDescription()).toBe('Simple Coffee, with sugar');
  });

  it('should stack decorators correctly', () => {
    const coffee = new SimpleCoffee();
    const milkCoffee = new MilkDecorator(coffee);
    const sweetMilkCoffee = new SugarDecorator(milkCoffee);
    
    expect(sweetMilkCoffee.getCost()).toBe(13); // 10 + 2 + 1
    expect(sweetMilkCoffee.getDescription()).toBe('Simple Coffee, with milk, with sugar');
  });
}); 