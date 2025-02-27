import { ComputerFacade } from './computer-facade';
import { CPU } from '../subsystems/cpu';
import { Memory } from '../subsystems/memory';
import { HardDrive } from '../subsystems/hard-drive';

// Mock the subsystems
jest.mock('../subsystems/cpu');
jest.mock('../subsystems/memory');
jest.mock('../subsystems/hard-drive');

describe('ComputerFacade', () => {
  let computerFacade: ComputerFacade;
  
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
    computerFacade = new ComputerFacade();
  });

  describe('start', () => {
    it('should execute startup sequence in correct order', () => {
      computerFacade.start();

      expect(CPU.prototype.freeze).toHaveBeenCalledTimes(1);
      expect(Memory.prototype.load).toHaveBeenCalledTimes(1);
      expect(HardDrive.prototype.read).toHaveBeenCalledTimes(1);
      expect(CPU.prototype.execute).toHaveBeenCalledTimes(1);
    });
  });

  describe('shutdown', () => {
    it('should execute shutdown sequence in correct order', () => {
      computerFacade.shutdown();

      expect(CPU.prototype.freeze).toHaveBeenCalledTimes(1);
      expect(Memory.prototype.clear).toHaveBeenCalledTimes(1);
      expect(HardDrive.prototype.clear).toHaveBeenCalledTimes(1);
      expect(CPU.prototype.shutdown).toHaveBeenCalledTimes(1);
    });
  });
}); 