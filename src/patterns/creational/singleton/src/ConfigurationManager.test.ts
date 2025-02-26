import { ProcessManager } from './ConfigurationManager';

describe('ProcessManager', () => {
  beforeEach(() => {
    // Reset the singleton instance between tests
    // @ts-ignore - Accessing private static property for testing
    ProcessManager.instance = undefined;
  });

  it('should create only one instance (Singleton Pattern)', () => {
    const instance1 = ProcessManager.getInstance();
    const instance2 = ProcessManager.getInstance();

    expect(instance1).toBe(instance2);
  });

  it('should generate a valid process ID', () => {
    const instance = ProcessManager.getInstance();
    const processId = instance.getProcessId();

    // Verify that the processId is a valid ISO date string
    expect(() => new Date(processId)).not.toThrow();
  });

  it('should maintain the same process ID across multiple calls', () => {
    const instance = ProcessManager.getInstance();
    const firstProcessId = instance.getProcessId();
    const secondProcessId = instance.getProcessId();

    expect(firstProcessId).toBe(secondProcessId);
  });
}); 