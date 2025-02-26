// Define the Observer interface
export interface Observer<T> {
  update(data: T): void;
}

// Define the Subject (Observable) base class
export abstract class Subject<T> {
  protected observers: Observer<T>[] = [];

  public subscribe(observer: Observer<T>): void {
    if (!this.observers.includes(observer)) {
      this.observers.push(observer);
    }
  }

  public unsubscribe(observer: Observer<T>): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  protected notify(data: T): void {
    this.observers.forEach(observer => observer.update(data));
  }
} 