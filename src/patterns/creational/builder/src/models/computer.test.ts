import { Computer } from './computer';
import { ComputerBuilder } from '@/builders/computer-builder';

describe('Computer', () => {
  let builder: ComputerBuilder;

  beforeEach(() => {
    // Arrange: Create a mock builder with basic properties
    builder = {
      cpu: 'Intel i7',
      ram: 16,
      storage: 512,
      gpu: undefined
    } as ComputerBuilder;
  });

  it('should create a computer with basic specifications', () => {
    // Act
    const computer = new Computer(builder);

    // Assert
    expect(computer.cpu).toBe('Intel i7');
    expect(computer.ram).toBe(16);
    expect(computer.storage).toBe(512);
    expect(computer.gpu).toBeUndefined();
  });

  it('should create a computer with GPU', () => {
    // Arrange
    builder.gpu = 'NVIDIA RTX 3080';

    // Act
    const computer = new Computer(builder);

    // Assert
    expect(computer.gpu).toBe('NVIDIA RTX 3080');
  });

  describe('toString', () => {
    it('should return string representation without GPU', () => {
      // Act
      const computer = new Computer(builder);
      const result = computer.toString();

      // Assert
      expect(result).toBe('Computer [CPU: Intel i7, RAM: 16GB, Storage: 512GB]');
    });

    it('should return string representation with GPU', () => {
      // Arrange
      builder.gpu = 'NVIDIA RTX 3080';

      // Act
      const computer = new Computer(builder);
      const result = computer.toString();

      // Assert
      expect(result).toBe('Computer [CPU: Intel i7, RAM: 16GB, Storage: 512GB, GPU: NVIDIA RTX 3080]');
    });
  });
}); 