import { DocumentPrototype } from './lib/prototype/document.prototype';

class Main {

  constructor() {

  }

  public async start(): Promise<void> {
    // Create an original document
    const originalDoc = new DocumentPrototype(
      'Original Title',
      'Original Content',
      { author: 'John Doe', createdAt: new Date().toISOString() }
    );

    // Clone the document
    const clonedDoc = originalDoc.clone();

    // Modify the cloned document
    clonedDoc.setTitle('Cloned Title');
    clonedDoc.setContent('Modified Content');

    console.log('Original Document:', {
      title: originalDoc.getTitle(),
      content: originalDoc.getContent(),
      metadata: originalDoc.getMetadata()
    });

    console.log('Cloned Document:', {
      title: clonedDoc.getTitle(),
      content: clonedDoc.getContent(),
      metadata: clonedDoc.getMetadata()
    });
  }
}

const main = new Main();
main.start().catch(console.error); 