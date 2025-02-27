import { TemperatureSensor, TemperatureDisplay } from './temperature-monitor';

describe('Temperature Monitoring System', () => {
  let sensor: TemperatureSensor;
  let display1: TemperatureDisplay;
  let display2: TemperatureDisplay;

  beforeEach(() => {
    sensor = new TemperatureSensor();
    display1 = new TemperatureDisplay('display1');
    display2 = new TemperatureDisplay('display2');
  });

  test('should notify all observers when temperature changes', () => {
    // Arrange
    sensor.subscribe(display1);
    sensor.subscribe(display2);
    const newTemperature = 25;

    // Act
    sensor.setTemperature(newTemperature);

    // Assert
    expect(display1.getLastReading()?.celsius).toBe(newTemperature);
    expect(display2.getLastReading()?.celsius).toBe(newTemperature);
  });

  test('should not notify unsubscribed observers', () => {
    // Arrange
    const unsubscribe = sensor.subscribe(display1);
    sensor.subscribe(display2);
    unsubscribe();
    const newTemperature = 30;

    // Act
    sensor.setTemperature(newTemperature);

    // Assert
    expect(display1.getLastReading()).toBeUndefined();
    expect(display2.getLastReading()?.celsius).toBe(newTemperature);
  });

  test('should maintain current temperature state', () => {
    // Arrange
    const temperature = 22;

    // Act
    sensor.setTemperature(temperature);

    // Assert
    expect(sensor.getCurrentTemperature()).toBe(temperature);
  });

  test('should include timestamp in temperature updates', () => {
    // Arrange
    sensor.subscribe(display1);
    const before = new Date();

    // Act
    sensor.setTemperature(20);
    const after = new Date();

    // Assert
    const reading = display1.getLastReading();
    expect(reading?.timestamp).toBeDefined();
    expect(reading?.timestamp.getTime()).toBeGreaterThanOrEqual(before.getTime());
    expect(reading?.timestamp.getTime()).toBeLessThanOrEqual(after.getTime());
  });

  test('should maintain separate states for different displays', () => {
    // Arrange
    sensor.subscribe(display1);
    sensor.subscribe(display2);

    // Act
    sensor.setTemperature(15);

    // Assert
    expect(display1.getId()).toBe('display1');
    expect(display2.getId()).toBe('display2');
    expect(display1.getLastReading()).toEqual(display2.getLastReading());
  });
}); 