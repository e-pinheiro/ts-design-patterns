import { NewsAgency, NewsSubscriber } from './observer/example';

class Main {
  private newsAgency: NewsAgency;
  private subscribers: NewsSubscriber[];

  constructor() {
    this.newsAgency = new NewsAgency();
    this.subscribers = [];
  }

  public async start(): Promise<void> {
    // Create subscribers
    const subscriber1 = new NewsSubscriber('John Doe');
    const subscriber2 = new NewsSubscriber('Jane Smith');

    // Attach subscribers to news agency
    this.newsAgency.attach(subscriber1);
    this.newsAgency.attach(subscriber2);

    // Publish some news
    this.newsAgency.publishNews(
      'New TypeScript Feature Released',
      'TypeScript 5.0 brings exciting new features for developers...'
    );

    // Detach one subscriber
    this.newsAgency.detach(subscriber1);

    // Publish more news
    this.newsAgency.publishNews(
      'Observer Pattern Implementation',
      'A new implementation of the Observer pattern has been released...'
    );
  }
}

const main = new Main();
main.start().catch(console.error); 