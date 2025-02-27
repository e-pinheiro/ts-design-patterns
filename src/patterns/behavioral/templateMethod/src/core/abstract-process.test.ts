import { AbstractProcess } from './abstract-process';

// Concrete class for testing
class TestProcess extends AbstractProcess {
  public initializeCalled = false;
  public processDataCalled = false;
  public cleanupCalled = false;

  protected async initialize(): Promise<void> {
    this.initializeCalled = true;
  }

  protected async processData(): Promise<void> {
    this.processDataCalled = true;
  }

  protected async cleanup(): Promise<void> {
    this.cleanupCalled = true;
  }
}

describe('AbstractProcess', () => {
  let process: TestProcess;

  beforeEach(() => {
    process = new TestProcess();
  });

  it('should execute all steps in correct order', async () => {
    await process.execute();

    expect(process.initializeCalled).toBe(true);
    expect(process.processDataCalled).toBe(true);
    expect(process.cleanupCalled).toBe(true);
  });
}); 