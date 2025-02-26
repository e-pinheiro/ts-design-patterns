import { ExampleCommand } from './ExampleCommand';

describe('ExampleCommand', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    // Arrange: Setup console.log spy before each test
    consoleSpy = jest.spyOn(console, 'log');
  });

  afterEach(() => {
    // Cleanup: Restore console.log after each test
    consoleSpy.mockRestore();
  });

  it('should execute command and log the message', async () => {
    // Arrange
    const testMessage = 'Test Message';
    const command = new ExampleCommand(testMessage);

    // Act
    await command.execute();

    // Assert
    expect(consoleSpy).toHaveBeenCalledWith(
      `Executing command with message: ${testMessage}`
    );
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });
}); 