import { DocumentPrototype } from './document.prototype';

describe('DocumentPrototype', () => {
  let originalDoc: DocumentPrototype;
  const initialData = {
    title: 'Test Title',
    content: 'Test Content',
    metadata: { author: 'Test Author', version: 1 }
  };

  beforeEach(() => {
    originalDoc = new DocumentPrototype(
      initialData.title,
      initialData.content,
      initialData.metadata
    );
  });

  it('should create a new instance with provided data', () => {
    expect(originalDoc.getTitle()).toBe(initialData.title);
    expect(originalDoc.getContent()).toBe(initialData.content);
    expect(originalDoc.getMetadata()).toEqual(initialData.metadata);
  });

  it('should create a deep clone of the document', () => {
    const clonedDoc = originalDoc.clone();

    // Verify initial values are the same
    expect(clonedDoc.getTitle()).toBe(originalDoc.getTitle());
    expect(clonedDoc.getContent()).toBe(originalDoc.getContent());
    expect(clonedDoc.getMetadata()).toEqual(originalDoc.getMetadata());

    // Modify cloned document
    clonedDoc.setTitle('New Title');
    clonedDoc.setContent('New Content');
    clonedDoc.setMetadata({ ...clonedDoc.getMetadata(), version: 2 });

    // Verify original document remains unchanged
    expect(originalDoc.getTitle()).toBe(initialData.title);
    expect(originalDoc.getContent()).toBe(initialData.content);
    expect(originalDoc.getMetadata()).toEqual(initialData.metadata);

    // Verify cloned document has new values
    expect(clonedDoc.getTitle()).toBe('New Title');
    expect(clonedDoc.getContent()).toBe('New Content');
    expect(clonedDoc.getMetadata()).toEqual({ ...initialData.metadata, version: 2 });
  });

  it('should properly handle metadata mutations', () => {
    const clonedDoc = originalDoc.clone();
    const originalMetadata = originalDoc.getMetadata();
    
    // Modify the returned metadata
    originalMetadata.version = 999;
    
    // Verify the internal metadata wasn't affected
    expect(originalDoc.getMetadata()).toEqual(initialData.metadata);
    expect(clonedDoc.getMetadata()).toEqual(initialData.metadata);
  });
}); 