import { Device } from '../interfaces/device';

export class Radio implements Device {
  private enabled: boolean = false;
  private volume: number = 20;
  private channel: number = 87.5;

  isEnabled(): boolean {
    return this.enabled;
  }

  enable(): void {
    this.enabled = true;
  }

  disable(): void {
    this.enabled = false;
  }

  getVolume(): number {
    return this.volume;
  }

  setVolume(percent: number): void {
    this.volume = Math.max(0, Math.min(100, percent));
  }

  getChannel(): number {
    return this.channel;
  }

  setChannel(channel: number): void {
    this.channel = Math.max(87.5, Math.min(108.0, channel));
  }
} 