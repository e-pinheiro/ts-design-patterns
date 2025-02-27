import { SimpleCoffee } from './components/coffee/simple-coffee';
import { MilkDecorator } from './components/coffee/decorators/milk-coffee';
import { SugarDecorator } from './components/coffee/decorators/sugar-coffee';

class Main {
  public async start(): Promise<void> {
    // Create a simple coffee
    let coffee = new SimpleCoffee();
    console.log(`${coffee.getDescription()} costs $${coffee.getCost()}`);

    // Add milk to the coffee
    coffee = new MilkDecorator(coffee);
    console.log(`${coffee.getDescription()} costs $${coffee.getCost()}`);

    // Add sugar to the coffee with milk
    coffee = new SugarDecorator(coffee);
    console.log(`${coffee.getDescription()} costs $${coffee.getCost()}`);
  }
}

const main = new Main();
main.start().catch(console.error); 