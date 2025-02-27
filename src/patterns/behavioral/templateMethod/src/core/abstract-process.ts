export abstract class AbstractProcess {
  // Template method that defines the algorithm's skeleton
  public async execute(): Promise<void> {
    await this.initialize();
    await this.processData();
    await this.cleanup();
  }

  // These are the steps that must be implemented by concrete classes
  protected abstract initialize(): Promise<void>;
  protected abstract processData(): Promise<void>;
  
  // Optional hook with default implementation
  protected async cleanup(): Promise<void> {
    // Default implementation
    console.log('Cleanup completed');
  }
} 