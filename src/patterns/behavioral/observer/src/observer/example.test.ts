import { NewsAgency, NewsSubscriber } from './example';

describe('NewsAgency', () => {
  let newsAgency: NewsAgency;
  let subscriber1: NewsSubscriber;
  let subscriber2: NewsSubscriber;

  beforeEach(() => {
    newsAgency = new NewsAgency();
    subscriber1 = new NewsSubscriber('John');
    subscriber2 = new NewsSubscriber('Jane');
  });

  it('should allow subscribers to subscribe', () => {
    newsAgency.subscribe(subscriber1);
    
    expect(newsAgency.getSubscribers()).toHaveLength(1);
    expect(newsAgency.getSubscribers()).toContain(subscriber1);
  });

  it('should allow subscribers to unsubscribe', () => {
    newsAgency.subscribe(subscriber1);
    newsAgency.subscribe(subscriber2);
    newsAgency.unsubscribe(subscriber1);

    expect(newsAgency.getSubscribers()).toHaveLength(1);
    expect(newsAgency.getSubscribers()).toContain(subscriber2);
    expect(newsAgency.getSubscribers()).not.toContain(subscriber1);
  });

  it('should notify all subscribers when publishing news', () => {
    // Arrange
    const consoleSpy = jest.spyOn(console, 'log');
    newsAgency.subscribe(subscriber1);
    newsAgency.subscribe(subscriber2);

    // Act
    newsAgency.publishNews('Test Title', 'Test Content');

    // Assert
    expect(consoleSpy).toHaveBeenCalledTimes(6); // 3 console.log calls per subscriber
    expect(consoleSpy).toHaveBeenCalledWith('[John] Breaking News: Test Title');
    expect(consoleSpy).toHaveBeenCalledWith('Content: Test Content');
    expect(consoleSpy).toHaveBeenCalledWith('[Jane] Breaking News: Test Title');
    expect(consoleSpy).toHaveBeenCalledWith('Content: Test Content');

    consoleSpy.mockRestore();
  });
});

describe('NewsSubscriber', () => {
  it('should log news updates correctly', () => {
    // Arrange
    const consoleSpy = jest.spyOn(console, 'log');
    const subscriber = new NewsSubscriber('Test User');
    const newsUpdate = {
      title: 'Test Title',
      content: 'Test Content'
    };

    // Act
    subscriber.update(newsUpdate);

    // Assert
    expect(consoleSpy).toHaveBeenCalledTimes(3);
    expect(consoleSpy).toHaveBeenCalledWith('[Test User] Breaking News: Test Title');
    expect(consoleSpy).toHaveBeenCalledWith('Content: Test Content');
    expect(consoleSpy).toHaveBeenCalledWith('---');

    consoleSpy.mockRestore();
  });
});