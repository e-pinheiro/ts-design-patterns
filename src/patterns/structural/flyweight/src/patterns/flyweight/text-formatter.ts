export interface TextFormat {
  applyFormat(text: string): string;
}

export class TextFormatFactory {
  private formats: { [key: string]: TextFormat } = {};

  public getFormat(formatType: string): TextFormat {
    if (!this.formats[formatType]) {
      this.formats[formatType] = new TextFormatting(formatType);
    }
    return this.formats[formatType];
  }

  public getFormatCount(): number {
    return Object.keys(this.formats).length;
  }
}

export class TextFormatting implements TextFormat {
  private formatType: string;

  constructor(formatType: string) {
    this.formatType = formatType;
  }

  public applyFormat(text: string): string {
    switch (this.formatType) {
      case 'bold':
        return `**${text}**`;
      case 'italic':
        return `_${text}_`;
      case 'underline':
        return `__${text}__`;
      default:
        return text;
    }
  }
} 