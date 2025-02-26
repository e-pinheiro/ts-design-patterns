export interface Iterator<T> {
  current(): T;
  next(): T;
  hasNext(): boolean;
  reset(): void;
} 