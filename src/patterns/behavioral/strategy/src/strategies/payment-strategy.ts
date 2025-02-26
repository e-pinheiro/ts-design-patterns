export interface PaymentStrategy {
    pay(amount: number): void;
}

export class CreditCardStrategy implements PaymentStrategy {
    constructor(private cardNumber: string, private name: string) { }

    pay(amount: number): void {
        console.log(`Paid ${amount} using Credit Card (${this.cardNumber}) from ${this.name}`);
    }
}

export class PayPalStrategy implements PaymentStrategy {
    constructor(private email: string) { }

    pay(amount: number): void {
        console.log(`Paid ${amount} using PayPal (${this.email})`);
    }
} 