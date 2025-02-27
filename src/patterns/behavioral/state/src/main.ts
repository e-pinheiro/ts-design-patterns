import { Document } from './Document';

class Main {

  public async start(): Promise<void> {
    // Create a new document in Draft state
    const document = new Document('Hello, State Pattern!');
    
    console.log(`Initial state: ${document.getState()}`);
    
    // Try to publish directly from draft (should fail)
    document.publish();
    
    // Proper flow: Draft -> Moderation -> Published
    document.moderate();
    console.log(`Current state: ${document.getState()}`);
    
    document.publish();
    console.log(`Current state: ${document.getState()}`);
    
    // Move back to draft
    document.draft();
    console.log(`Final state: ${document.getState()}`);
  }
}

const main = new Main();
main.start().catch(console.error); 