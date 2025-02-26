import { Observer, Subject } from './observer';

// Example data type
export interface NewsUpdate {
  title: string;
  content: string;
}

// Concrete Subject
export class NewsAgency extends Subject<NewsUpdate> {
  public publishNews(title: string, content: string): void {
    const newsUpdate: NewsUpdate = { title, content };
    this.notify(newsUpdate);
  }

  public attach(observer: Observer<NewsUpdate>): void {
    this.subscribe(observer);
  }

  public detach(observer: Observer<NewsUpdate>): void {
    this.unsubscribe(observer);
  }

  public getSubscribers(): Observer<NewsUpdate>[] {
    return this.observers;
  }
}

// Concrete Observers
export class NewsSubscriber implements Observer<NewsUpdate> {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(data: NewsUpdate): void {
    console.log(`[${this.name}] Breaking News: ${data.title}`);
    console.log(`Content: ${data.content}`);
    console.log('---');
  }
} 