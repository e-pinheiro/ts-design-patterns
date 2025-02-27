import { ComputerBuilder } from './computer-builder';

describe('ComputerBuilder', () => {
  let builder: ComputerBuilder;

  beforeEach(() => {
    builder = new ComputerBuilder();
  });

  it('should build a complete computer with all specifications', () => {
    const computer = builder
      .setCPU('Intel i7')
      .setRAM(16)
      .setStorage(512)
      .setGPU('NVIDIA RTX 3060')
      .build();

    expect(computer.cpu).toBe('Intel i7');
    expect(computer.ram).toBe(16);
    expect(computer.storage).toBe(512);
    expect(computer.gpu).toBe('NVIDIA RTX 3060');
  });

  it('should build a computer without GPU', () => {
    const computer = builder
      .setCPU('Intel i5')
      .setRAM(8)
      .setStorage(256)
      .build();

    expect(computer.cpu).toBe('Intel i5');
    expect(computer.ram).toBe(8);
    expect(computer.storage).toBe(256);
    expect(computer.gpu).toBeUndefined();
  });

  it('should throw error when building without required specifications', () => {
    expect(() => builder.build()).toThrow('Cannot build computer: missing required specifications');
  });
}); 