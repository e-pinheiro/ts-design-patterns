import { TemperatureSensor, TemperatureDisplay } from './observer/temperature-monitor';

class Main {
  private temperatureSensor: TemperatureSensor;
  private indoorDisplay: TemperatureDisplay;
  private outdoorDisplay: TemperatureDisplay;
  private mobileDisplay: TemperatureDisplay;
  private intervalId?: ReturnType<typeof setInterval>;

  constructor() {
    this.temperatureSensor = new TemperatureSensor();
    this.indoorDisplay = new TemperatureDisplay('Indoor');
    this.outdoorDisplay = new TemperatureDisplay('Outdoor');
    this.mobileDisplay = new TemperatureDisplay('Mobile App');
  }

  private simulateTemperatureChanges(): void {
    // Simulate random temperature between 15°C and 35°C
    const newTemperature = Math.round(15 + Math.random() * 20);
    this.temperatureSensor.setTemperature(newTemperature);

    // Log the current readings
    console.log(`New temperature reading: ${newTemperature}°C`);
    console.log('Display readings:');
    console.log(`- Indoor: ${this.indoorDisplay.getLastReading()?.celsius}°C`);
    console.log(`- Outdoor: ${this.outdoorDisplay.getLastReading()?.celsius}°C`);
    console.log(`- Mobile: ${this.mobileDisplay.getLastReading()?.celsius}°C\n`);
  }

  public async start(): Promise<void> {
    console.log('Starting temperature monitoring...\n');

    // Subscribe all displays to the temperature sensor
    this.temperatureSensor.subscribe(this.indoorDisplay);
    this.temperatureSensor.subscribe(this.outdoorDisplay);
    const mobileUnsubscribe = this.temperatureSensor.subscribe(this.mobileDisplay);

    // Simulate temperature changes every 2 seconds
    this.intervalId = setInterval(() => this.simulateTemperatureChanges(), 2000);

    // After 10 seconds, unsubscribe the mobile display
    setTimeout(() => {
      console.log('Unsubscribing mobile display...\n');
      mobileUnsubscribe();
    }, 10000);

    // Stop the simulation after 15 seconds
    setTimeout(() => {
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }
      console.log('Temperature monitoring stopped.');
    }, 15000);
    // Handle process termination
    process.on('SIGINT', () => {
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }
      console.log('\nTemperature monitoring stopped.');
      process.exit();
    });
  }
}

const main = new Main();
main.start().catch(console.error); 