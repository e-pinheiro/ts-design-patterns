import { AbstractProcess } from '../core/abstract-process';

export class DataProcess extends AbstractProcess {
  protected async initialize(): Promise<void> {
    console.log('Initializing data process...');
    // Add initialization logic here
  }

  protected async processData(): Promise<void> {
    console.log('Processing data...');
    // Add main processing logic here
  }

  // Optional: override cleanup if needed
  protected async cleanup(): Promise<void> {
    console.log('Performing custom cleanup...');
    await super.cleanup();
  }
} 