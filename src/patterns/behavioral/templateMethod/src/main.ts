import { DataProcess } from './implementations/data-process';

class Main {

  public async start(): Promise<void> {
    const process = new DataProcess();
    await process.execute();
  }
}

const main = new Main();
main.start().catch(console.error); 