import { MediaPlayer } from './interfaces/media-player';
import { MediaAdapter } from './adapters/media-adapter';

export class AudioPlayer implements MediaPlayer {
  play(audioType: string, fileName: string): void {
    if (audioType.toLowerCase() === 'mp3') {
      console.log(`Playing mp3 file: ${fileName}`);
    } else if (audioType.toLowerCase() === 'vlc' || audioType.toLowerCase() === 'mp4') {
      const mediaAdapter = new MediaAdapter(audioType);
      mediaAdapter.play(audioType, fileName);
    } else {
      console.log(`Invalid media type: ${audioType}`);
    }
  }
} 