import { Component } from './Component';

export class Composite implements Component {
  private children: Component[] = [];

  constructor(private name: string) {}

  public async execute(): Promise<void> {
    console.log(`Composite ${this.name} executing...`);
    const executions = this.children.map(child => child.execute());
    await Promise.all(executions);
  }

  public add(component: Component): void {
    this.children.push(component);
  }

  public remove(component: Component): void {
    const index = this.children.indexOf(component);
    if (index !== -1) {
      this.children.splice(index, 1);
    }
  }

  public getChildren(): Component[] {
    return [...this.children];
  }
} 