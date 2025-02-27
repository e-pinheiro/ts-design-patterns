import { ComputerBuilder } from '../builders/computer-builder';
import { ComputerDirector } from './computer-director';

describe('ComputerDirector', () => {
  let director: ComputerDirector;

  beforeEach(() => {
    director = new ComputerDirector(new ComputerBuilder());
  });

  it('should construct a gaming PC with correct specifications', () => {
    const gamingPC = director.constructGamingPC();

    expect(gamingPC.cpu).toBe('Intel i9-12900K');
    expect(gamingPC.ram).toBe(32);
    expect(gamingPC.storage).toBe(2000);
    expect(gamingPC.gpu).toBe('NVIDIA RTX 4080');
  });

  it('should construct an office PC with correct specifications', () => {
    const officePC = director.constructOfficePC();

    expect(officePC.cpu).toBe('Intel i5-12400');
    expect(officePC.ram).toBe(16);
    expect(officePC.storage).toBe(512);
    expect(officePC.gpu).toBeUndefined();
  });
}); 