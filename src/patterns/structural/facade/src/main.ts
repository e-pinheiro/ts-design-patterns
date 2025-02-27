import { ComputerFacade } from './facades/computer-facade';

class Main {
  private computerFacade: ComputerFacade;

  constructor() {
    this.computerFacade = new ComputerFacade();
  }

  public async start(): Promise<void> {
    this.computerFacade.start();
    // Simulate some work
    await new Promise(resolve => setTimeout(resolve, 2000));
    this.computerFacade.shutdown();
  }
}

const main = new Main();
main.start().catch(console.error); 