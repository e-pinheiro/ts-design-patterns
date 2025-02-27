import { TextFormatFactory } from './patterns/flyweight/text-formatter';

class Main {
  private formatFactory: TextFormatFactory;

  constructor() {
    this.formatFactory = new TextFormatFactory();
  }

  public async start(): Promise<void> {
    const boldFormat = this.formatFactory.getFormat('bold');
    const italicFormat = this.formatFactory.getFormat('italic');
    const underlineFormat = this.formatFactory.getFormat('underline');

    console.log(boldFormat.applyFormat('Hello'));
    console.log(italicFormat.applyFormat('World'));
    console.log(underlineFormat.applyFormat('Flyweight Pattern'));
    
    // Reusing the same format instances
    console.log(boldFormat.applyFormat('Another bold text'));
    console.log(`Total format objects created: ${this.formatFactory.getFormatCount()}`);
  }
}

const main = new Main();
main.start().catch(console.error); 