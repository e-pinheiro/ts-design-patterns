import { Component } from './Component';

export class Leaf implements Component {
  constructor(private name: string, private delay: number = 1000) {}

  public async execute(): Promise<void> {
    console.log(`Leaf ${this.name} executing...`);
    await new Promise(resolve => setTimeout(resolve, this.delay));
    console.log(`Leaf ${this.name} completed!`);
  }
} 