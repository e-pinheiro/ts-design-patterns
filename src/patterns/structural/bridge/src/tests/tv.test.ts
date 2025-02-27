import { TV } from '../devices/tv';

describe('TV', () => {
  let tv: TV;

  beforeEach(() => {
    tv = new TV();
  });

  test('should start disabled', () => {
    expect(tv.isEnabled()).toBeFalsy();
  });

  test('should enable and disable', () => {
    tv.enable();
    expect(tv.isEnabled()).toBeTruthy();
    tv.disable();
    expect(tv.isEnabled()).toBeFalsy();
  });

  test('should control volume within bounds', () => {
    tv.setVolume(150);
    expect(tv.getVolume()).toBe(100);
    tv.setVolume(-10);
    expect(tv.getVolume()).toBe(0);
  });

  test('should set channel with minimum of 1', () => {
    tv.setChannel(0);
    expect(tv.getChannel()).toBe(1);
    tv.setChannel(5);
    expect(tv.getChannel()).toBe(5);
  });
}); 