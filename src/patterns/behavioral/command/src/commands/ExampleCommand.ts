import { Command } from './Command';

export class ExampleCommand implements Command {
  constructor(private readonly message: string) {}

  public async execute(): Promise<void> {
    console.log(`Executing command with message: ${this.message}`);
    // Add your command logic here
  }
} 