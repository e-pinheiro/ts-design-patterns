import { PaymentStrategy } from './strategies/payment-strategy';

export class PaymentProcessor {
  private strategy: PaymentStrategy | undefined;

  setStrategy(strategy: PaymentStrategy): void {
    this.strategy = strategy;
  }

  processPayment(amount: number): void {
    if (!this.strategy) {
      throw new Error('Payment strategy not set');
    }
    this.strategy.pay(amount);
  }
} 