import { Document } from './Document';

describe('Document', () => {
  let document: Document;

  beforeEach(() => {
    document = new Document('Test Document');
  });

  describe('initial state', () => {
    it('should start in Draft state', () => {
      expect(document.getState()).toBe('Draft');
    });
  });

  describe('state transitions', () => {
    it('should not allow publishing directly from Draft state', () => {
      document.publish();
      expect(document.getState()).toBe('Draft');
    });

    it('should transition from Draft to Moderation', () => {
      document.moderate();
      expect(document.getState()).toBe('Moderation');
    });

    it('should transition from Moderation to Published', () => {
      document.moderate();
      document.publish();
      expect(document.getState()).toBe('Published');
    });

    it('should allow transitioning back to Draft from any state', () => {
      // From Moderation to Draft
      document.moderate();
      document.draft();
      expect(document.getState()).toBe('Draft');

      // From Published to Draft
      document.moderate();
      document.publish();
      document.draft();
      expect(document.getState()).toBe('Draft');
    });
  });

  describe('document content', () => {
    it('should store and retrieve document content', () => {
      expect(document.getContent()).toBe('Test Document');
    });
  });

  describe('invalid transitions', () => {
    it('should not allow publishing from Draft state', () => {
      document.publish();
      expect(document.getState()).toBe('Draft');
    });

    it('should not allow moderating when already in Moderation state', () => {
      document.moderate();
      document.moderate();
      expect(document.getState()).toBe('Moderation');
    });

    it('should not allow publishing multiple times', () => {
      document.moderate();
      document.publish();
      document.publish();
      expect(document.getState()).toBe('Published');
    });
  });
}); 