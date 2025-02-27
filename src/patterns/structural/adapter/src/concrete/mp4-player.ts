import { AdvancedMediaPlayer } from '../interfaces/media-player';

export class Mp4Player implements AdvancedMediaPlayer {
  playVlc(fileName: string): void {
    // Do nothing
  }

  playMp4(fileName: string): void {
    console.log(`Playing mp4 file: ${fileName}`);
  }
} 