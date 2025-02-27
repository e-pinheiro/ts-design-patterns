import { Radio } from '../devices/radio';

describe('Radio', () => {
  let radio: Radio;

  beforeEach(() => {
    radio = new Radio();
  });

  test('should start disabled', () => {
    expect(radio.isEnabled()).toBeFalsy();
  });

  test('should enable and disable', () => {
    radio.enable();
    expect(radio.isEnabled()).toBeTruthy();
    radio.disable();
    expect(radio.isEnabled()).toBeFalsy();
  });

  test('should control volume within bounds', () => {
    radio.setVolume(150);
    expect(radio.getVolume()).toBe(100);
    radio.setVolume(-10);
    expect(radio.getVolume()).toBe(0);
  });

  test('should set channel within FM bounds', () => {
    radio.setChannel(80);
    expect(radio.getChannel()).toBe(87.5);
    radio.setChannel(110);
    expect(radio.getChannel()).toBe(108.0);
  });
}); 