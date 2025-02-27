import { CPU } from '../subsystems/cpu';
import { Memory } from '../subsystems/memory';
import { HardDrive } from '../subsystems/hard-drive';

export interface IComputerFacade {
  start(): void;
  shutdown(): void;
}

export class ComputerFacade implements IComputerFacade {
  private cpu: CPU;
  private memory: Memory;
  private hardDrive: HardDrive;

  constructor() {
    this.cpu = new CPU();
    this.memory = new Memory();
    this.hardDrive = new HardDrive();
  }

  public start(): void {
    this.cpu.freeze();
    this.memory.load();
    this.hardDrive.read();
    this.cpu.execute();
  }

  public shutdown(): void {
    this.cpu.freeze();
    this.memory.clear();
    this.hardDrive.clear();
    this.cpu.shutdown();
  }
} 