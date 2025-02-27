export interface MediaPlayer {
  play(audioType: string, fileName: string): void;
}

export interface AdvancedMediaPlayer {
  playVlc(fileName: string): void;
  playMp4(fileName: string): void;
} 