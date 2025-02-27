import { MediaPlayer, AdvancedMediaPlayer } from '../interfaces/media-player';
import { VlcPlayer } from '../concrete/vlc-player';
import { Mp4Player } from '../concrete/mp4-player';

export class MediaAdapter implements MediaPlayer {
  private advancedMusicPlayer: AdvancedMediaPlayer | undefined;

  constructor(audioType: string) {
    if (audioType.toLowerCase() === 'vlc') {
      this.advancedMusicPlayer = new VlcPlayer();
    } else if (audioType.toLowerCase() === 'mp4') {
      this.advancedMusicPlayer = new Mp4Player();
    }
  }

  play(audioType: string, fileName: string): void {
    if (audioType.toLowerCase() === 'vlc') {
      this.advancedMusicPlayer?.playVlc(fileName);
    } else if (audioType.toLowerCase() === 'mp4') {
      this.advancedMusicPlayer?.playMp4(fileName);
    }
  }
} 