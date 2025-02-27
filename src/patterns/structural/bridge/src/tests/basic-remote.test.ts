import { BasicRemote } from '../remotes/basic-remote';
import { Device } from '../interfaces/device';

describe('BasicRemote', () => {
  let mockDevice: Device;
  let remote: BasicRemote;

  beforeEach(() => {
    mockDevice = {
      isEnabled: jest.fn().mockReturnValue(false),
      enable: jest.fn(),
      disable: jest.fn(),
      getVolume: jest.fn().mockReturnValue(50),
      setVolume: jest.fn(),
      getChannel: jest.fn().mockReturnValue(1),
      setChannel: jest.fn(),
    };
    remote = new BasicRemote(mockDevice);
  });

  test('should toggle power', () => {
    remote.power();
    expect(mockDevice.enable).toHaveBeenCalled();

    (mockDevice.isEnabled as jest.Mock).mockReturnValue(true);
    remote.power();
    expect(mockDevice.disable).toHaveBeenCalled();
  });

  test('should control volume', () => {
    remote.volumeUp();
    expect(mockDevice.setVolume).toHaveBeenCalledWith(60);

    remote.volumeDown();
    expect(mockDevice.setVolume).toHaveBeenCalledWith(40);
  });

  test('should control channels', () => {
    remote.channelUp();
    expect(mockDevice.setChannel).toHaveBeenCalledWith(2);

    remote.channelDown();
    expect(mockDevice.setChannel).toHaveBeenCalledWith(0);
  });
}); 