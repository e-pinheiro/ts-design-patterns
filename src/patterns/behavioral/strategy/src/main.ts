import { PaymentProcessor } from './payment-processor';
import { CreditCardStrategy, PayPalStrategy } from './strategies/payment-strategy';

class Main {

  public async start(): Promise<void> {
    // Create the payment processor
    const paymentProcessor = new PaymentProcessor();

    // Create different strategies
    const creditCardStrategy = new CreditCardStrategy('1234-5678-9012-3456', 'John Doe');
    const payPalStrategy = new PayPalStrategy('john.doe@example.com');

    // Process payment using credit card
    paymentProcessor.setStrategy(creditCardStrategy);
    paymentProcessor.processPayment(100);

    // Process payment using PayPal
    paymentProcessor.setStrategy(payPalStrategy);
    paymentProcessor.processPayment(50);
  }
}

const main = new Main();
main.start().catch(console.error); 