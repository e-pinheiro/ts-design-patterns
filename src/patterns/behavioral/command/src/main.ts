import { Command } from './commands/Command';
import { ExampleCommand } from './commands/ExampleCommand';

class Main {

  public async start(): Promise<void> {
    // Create and execute an example command
    const exampleCommand: Command = new ExampleCommand('Hello, Command Pattern!');
    await exampleCommand.execute();
  }
}

const main = new Main();
main.start().catch(console.error); 