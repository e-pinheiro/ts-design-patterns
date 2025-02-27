import { AudioPlayer } from './audio-player';

class Main {

  public async start(): Promise<void> {
    const audioPlayer = new AudioPlayer();
    
    audioPlayer.play('mp3', 'song.mp3');
    audioPlayer.play('mp4', 'movie.mp4');
    audioPlayer.play('vlc', 'video.vlc');
    audioPlayer.play('avi', 'video.avi');
  }
}

const main = new Main();
main.start().catch(console.error); 