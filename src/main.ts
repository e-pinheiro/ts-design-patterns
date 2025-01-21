import { Application } from './framework/Application';


class Main {
  private app: Application;

  constructor() {
    this.app = new Application();
  }

  public async start(): Promise<void> {
    await this.app.initialize();
    console.log('Hello World! Application started successfully.');
  }
}

const main = new Main();
main.start().catch(console.error); 