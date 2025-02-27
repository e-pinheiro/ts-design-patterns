import { TextFormatFactory, TextFormatting } from '../text-formatter';

describe('TextFormatter Flyweight Pattern', () => {
  let formatFactory: TextFormatFactory;

  beforeEach(() => {
    formatFactory = new TextFormatFactory();
  });

  describe('TextFormatFactory', () => {
    it('should create only one instance for each format type', () => {
      const format1 = formatFactory.getFormat('bold');
      const format2 = formatFactory.getFormat('bold');
      
      expect(format1).toBe(format2);
      expect(formatFactory.getFormatCount()).toBe(1);
    });

    it('should create different instances for different format types', () => {
      formatFactory.getFormat('bold');
      formatFactory.getFormat('italic');
      formatFactory.getFormat('underline');
      
      expect(formatFactory.getFormatCount()).toBe(3);
    });
  });

  describe('TextFormatting', () => {
    it('should apply bold formatting correctly', () => {
      const boldFormat = new TextFormatting('bold');
      expect(boldFormat.applyFormat('test')).toBe('**test**');
    });

    it('should apply italic formatting correctly', () => {
      const italicFormat = new TextFormatting('italic');
      expect(italicFormat.applyFormat('test')).toBe('_test_');
    });

    it('should apply underline formatting correctly', () => {
      const underlineFormat = new TextFormatting('underline');
      expect(underlineFormat.applyFormat('test')).toBe('__test__');
    });

    it('should return original text for unknown format type', () => {
      const unknownFormat = new TextFormatting('unknown');
      expect(unknownFormat.applyFormat('test')).toBe('test');
    });
  });
}); 