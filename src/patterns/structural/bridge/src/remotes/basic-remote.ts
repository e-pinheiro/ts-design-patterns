import { Remote } from '../interfaces/remote';
import { Device } from '../interfaces/device';

export class BasicRemote implements Remote {
  constructor(protected device: Device) {}

  power(): void {
    if (this.device.isEnabled()) {
      this.device.disable();
    } else {
      this.device.enable();
    }
  }

  volumeUp(): void {
    const currentVolume = this.device.getVolume();
    this.device.setVolume(currentVolume + 10);
  }

  volumeDown(): void {
    const currentVolume = this.device.getVolume();
    this.device.setVolume(currentVolume - 10);
  }

  channelUp(): void {
    const currentChannel = this.device.getChannel();
    this.device.setChannel(currentChannel + 1);
  }

  channelDown(): void {
    const currentChannel = this.device.getChannel();
    this.device.setChannel(currentChannel - 1);
  }
} 