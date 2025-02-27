import { DataProcess } from './data-process';

describe('DataProcess', () => {
  let process: DataProcess;
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    process = new DataProcess();
    consoleSpy = jest.spyOn(console, 'log');
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('should execute the complete process', async () => {
    await process.execute();

    expect(consoleSpy).toHaveBeenCalledWith('Initializing data process...');
    expect(consoleSpy).toHaveBeenCalledWith('Processing data...');
    expect(consoleSpy).toHaveBeenCalledWith('Performing custom cleanup...');
    expect(consoleSpy).toHaveBeenCalledWith('Cleanup completed');
  });
}); 