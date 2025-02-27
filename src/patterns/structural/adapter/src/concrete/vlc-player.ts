import { AdvancedMediaPlayer } from '../interfaces/media-player';

export class VlcPlayer implements AdvancedMediaPlayer {
  playVlc(fileName: string): void {
    console.log(`Playing vlc file: ${fileName}`);
  }

  playMp4(fileName: string): void {
    // Do nothing
  }
} 