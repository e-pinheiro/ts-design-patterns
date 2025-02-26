import { CreditCardStrategy, PayPalStrategy } from './payment-strategy';

describe('Payment Strategies', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    // Mock console.log to test output
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  describe('CreditCardStrategy', () => {
    it('should process credit card payment correctly', () => {
      const strategy = new CreditCardStrategy('1234-5678-9012-3456', 'John Doe');
      strategy.pay(100);

      expect(consoleSpy).toHaveBeenCalledWith(
        'Paid 100 using Credit Card (1234-5678-9012-3456)'
      );
    });
  });

  describe('PayPalStrategy', () => {
    it('should process PayPal payment correctly', () => {
      const strategy = new PayPalStrategy('john.doe@example.com');
      strategy.pay(50);

      expect(consoleSpy).toHaveBeenCalledWith(
        'Paid 50 using PayPal (john.doe@example.com)'
      );
    });
  });
}); 