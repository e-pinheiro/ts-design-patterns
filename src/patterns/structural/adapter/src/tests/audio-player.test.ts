import { AudioPlayer } from '../audio-player';

describe('AudioPlayer', () => {
  let audioPlayer: AudioPlayer;
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    audioPlayer = new AudioPlayer();
    consoleSpy = jest.spyOn(console, 'log');
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('should play mp3 files directly', () => {
    audioPlayer.play('mp3', 'song.mp3');
    expect(consoleSpy).toHaveBeenCalledWith('Playing mp3 file: song.mp3');
  });

  it('should play mp4 files through adapter', () => {
    audioPlayer.play('mp4', 'movie.mp4');
    expect(consoleSpy).toHaveBeenCalledWith('Playing mp4 file: movie.mp4');
  });

  it('should play vlc files through adapter', () => {
    audioPlayer.play('vlc', 'video.vlc');
    expect(consoleSpy).toHaveBeenCalledWith('Playing vlc file: video.vlc');
  });

  it('should handle invalid media types', () => {
    audioPlayer.play('avi', 'video.avi');
    expect(consoleSpy).toHaveBeenCalledWith('Invalid media type: avi');
  });
}); 