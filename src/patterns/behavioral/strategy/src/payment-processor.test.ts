import { PaymentProcessor } from './payment-processor';
import { PaymentStrategy } from './strategies/payment-strategy';

describe('PaymentProcessor', () => {
  let paymentProcessor: PaymentProcessor;
  let mockStrategy: jest.Mocked<PaymentStrategy>;

  beforeEach(() => {
    // Create a mock strategy
    mockStrategy = {
      pay: jest.fn(),
    };

    paymentProcessor = new PaymentProcessor();
  });

  it('should throw error when no strategy is set', () => {
    expect(() => {
      paymentProcessor.processPayment(100);
    }).toThrow('Payment strategy not set');
  });

  it('should use the set strategy to process payment', () => {
    paymentProcessor.setStrategy(mockStrategy);
    paymentProcessor.processPayment(100);

    expect(mockStrategy.pay).toHaveBeenCalledWith(100);
  });

  it('should allow changing strategies', () => {
    const mockStrategy2: jest.Mocked<PaymentStrategy> = {
      pay: jest.fn(),
    };

    // Use first strategy
    paymentProcessor.setStrategy(mockStrategy);
    paymentProcessor.processPayment(100);
    expect(mockStrategy.pay).toHaveBeenCalledWith(100);

    // Change to second strategy
    paymentProcessor.setStrategy(mockStrategy2);
    paymentProcessor.processPayment(50);
    expect(mockStrategy2.pay).toHaveBeenCalledWith(50);
  });
}); 