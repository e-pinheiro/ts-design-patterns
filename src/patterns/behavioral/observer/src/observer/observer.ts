// Define the Observer interface
export interface Observer<T> {
  update(data: T): void;
}

// Define the Subject (Observable) base class
export abstract class Subject<T> {
  private readonly observers: Set<Observer<T>> = new Set();

  public subscribe(observer: Observer<T>): () => void {
    this.observers.add(observer);
    
    // Return unsubscribe function for convenience
    return () => this.unsubscribe(observer);
  }

  public unsubscribe(observer: Observer<T>): void {
    this.observers.delete(observer);
  }

  protected notify(data: T): void {
    this.observers.forEach(observer => observer.update(data));
  }
} 