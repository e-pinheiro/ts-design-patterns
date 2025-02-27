import { IPrototype } from './prototype.interface';

export class DocumentPrototype implements IPrototype<DocumentPrototype> {
  constructor(
    private title: string,
    private content: string,
    private metadata: Record<string, unknown>
  ) {}

  public clone(): DocumentPrototype {
    // Create a deep copy of metadata
    const metadataCopy = JSON.parse(JSON.stringify(this.metadata));
    
    return new DocumentPrototype(
      this.title,
      this.content,
      metadataCopy
    );
  }

  // Getters and setters
  public getTitle(): string {
    return this.title;
  }

  public setTitle(title: string): void {
    this.title = title;
  }

  public getContent(): string {
    return this.content;
  }

  public setContent(content: string): void {
    this.content = content;
  }

  public getMetadata(): Record<string, unknown> {
    return { ...this.metadata };
  }

  public setMetadata(metadata: Record<string, unknown>): void {
    this.metadata = { ...metadata };
  }
} 