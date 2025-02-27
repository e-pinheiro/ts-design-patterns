import { ComputerBuilder } from './builders/computer-builder';
import { ComputerDirector } from './directors/computer-director';

class Main {
  private builder: ComputerBuilder;
  private director: ComputerDirector;

  constructor() {
    this.builder = new ComputerBuilder();
    this.director = new ComputerDirector(this.builder);
  }

  public async start(): Promise<void> {
    // Create a gaming PC using the director
    const gamingPC = this.director.constructGamingPC();
    console.log('Gaming PC:', gamingPC.toString());

    // Create a custom PC using the builder directly
    const customPC = new ComputerBuilder()
      .setCPU('AMD Ryzen 7 5800X')
      .setRAM(64)
      .setStorage(1000)
      .setGPU('AMD Radeon RX 6800 XT')
      .build();
    console.log('Custom PC:', customPC.toString());
  }
}

const main = new Main();
main.start().catch(console.error); 