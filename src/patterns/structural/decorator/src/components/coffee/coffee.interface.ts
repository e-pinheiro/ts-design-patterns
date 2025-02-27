export interface Coffee {
  getCost(): number;
  getDescription(): string;
}

export abstract class BaseCoffee implements Coffee {
  abstract getCost(): number;
  abstract getDescription(): string;
} 