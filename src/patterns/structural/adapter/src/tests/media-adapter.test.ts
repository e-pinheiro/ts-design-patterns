import { MediaAdapter } from '../adapters/media-adapter';

describe('MediaAdapter', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log');
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('should play vlc files', () => {
    const mediaAdapter = new MediaAdapter('vlc');
    mediaAdapter.play('vlc', 'video.vlc');
    expect(consoleSpy).toHaveBeenCalledWith('Playing vlc file: video.vlc');
  });

  it('should play mp4 files', () => {
    const mediaAdapter = new MediaAdapter('mp4');
    mediaAdapter.play('mp4', 'movie.mp4');
    expect(consoleSpy).toHaveBeenCalledWith('Playing mp4 file: movie.mp4');
  });
}); 