import { Computer, IComputer } from '../models/computer';

export class ComputerBuilder {
  cpu: string = '';
  ram: number = 0;
  storage: number = 0;
  gpu?: string;

  setCPU(cpu: string): ComputerBuilder {
    this.cpu = cpu;
    return this;
  }

  setRAM(ram: number): ComputerBuilder {
    this.ram = ram;
    return this;
  }

  setStorage(storage: number): ComputerBuilder {
    this.storage = storage;
    return this;
  }

  setGPU(gpu: string): ComputerBuilder {
    this.gpu = gpu;
    return this;
  }

  build(): Computer {
    if (!this.cpu || !this.ram || !this.storage) {
      throw new Error('Cannot build computer: missing required specifications');
    }
    return new Computer(this);
  }
} 