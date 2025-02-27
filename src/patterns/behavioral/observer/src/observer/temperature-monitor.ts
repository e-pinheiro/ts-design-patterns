import { Subject, Observer } from './observer';

// Temperature data interface
export interface TemperatureData {
  celsius: number;
  timestamp: Date;
}

// Concrete Subject
export class TemperatureSensor extends Subject<TemperatureData> {
  private currentTemperature: number = 0;

  public setTemperature(celsius: number): void {
    this.currentTemperature = celsius;
    this.notify({
      celsius,
      timestamp: new Date()
    });
  }

  public getCurrentTemperature(): number {
    return this.currentTemperature;
  }
}

// Concrete Observer
export class TemperatureDisplay implements Observer<TemperatureData> {
  private readonly id: string;
  private lastReading?: TemperatureData;

  constructor(id: string) {
    this.id = id;
  }

  public update(data: TemperatureData): void {
    this.lastReading = data;
  }

  public getLastReading(): TemperatureData | undefined {
    return this.lastReading;
  }

  public getId(): string {
    return this.id;
  }
} 