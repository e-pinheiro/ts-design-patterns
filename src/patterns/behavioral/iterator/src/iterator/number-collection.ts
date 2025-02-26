import { Iterator } from './iterator';

export class NumberIterator implements Iterator<number> {
  private position: number = 0;
  
  constructor(private collection: NumberCollection) {}

  current(): number {
    return this.collection.getItems()[this.position];
  }

  next(): number {
    const item = this.collection.getItems()[this.position];
    this.position++;
    return item;
  }

  hasNext(): boolean {
    return this.position < this.collection.getItems().length;
  }

  reset(): void {
    this.position = 0;
  }
}

export class NumberCollection {
  private items: number[] = [];

  public addItem(item: number): void {
    this.items.push(item);
  }

  public getItems(): number[] {
    return this.items;
  }

  public getIterator(): Iterator<number> {
    return new NumberIterator(this);
  }
} 