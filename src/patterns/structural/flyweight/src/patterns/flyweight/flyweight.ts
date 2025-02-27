export interface Flyweight {
  operation(extrinsicState: any): void;
}

export class FlyweightFactory {
  private flyweights: { [key: string]: Flyweight } = {};

  public getFlyweight(key: string): Flyweight {
    if (!this.flyweights[key]) {
      this.flyweights[key] = new ConcreteFlyweight(key);
    }
    return this.flyweights[key];
  }

  public getFlyweightCount(): number {
    return Object.keys(this.flyweights).length;
  }
}

export class ConcreteFlyweight implements Flyweight {
  private intrinsicState: string;

  constructor(intrinsicState: string) {
    this.intrinsicState = intrinsicState;
  }

  public operation(extrinsicState: any): void {
    console.log(`Intrinsic State: ${this.intrinsicState}, Extrinsic State: ${JSON.stringify(extrinsicState)}`);
  }
} 