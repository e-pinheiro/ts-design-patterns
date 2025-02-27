import { ComputerBuilder } from '../builders/computer-builder';
import { Computer } from '../models/computer';

export class ComputerDirector {
  private builder: ComputerBuilder;

  constructor(builder: ComputerBuilder) {
    this.builder = builder;
  }

  constructGamingPC(): Computer {
    return this.builder
      .setCPU('Intel i9-12900K')
      .setRAM(32)
      .setStorage(2000)
      .setGPU('NVIDIA RTX 4080')
      .build();
  }

  constructOfficePC(): Computer {
    return this.builder
      .setCPU('Intel i5-12400')
      .setRAM(16)
      .setStorage(512)
      .build();
  }
} 