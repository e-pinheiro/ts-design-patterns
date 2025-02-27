# Facade Pattern Example in TypeScript

This project demonstrates the implementation of the Facade design pattern using TypeScript. The Facade pattern provides a simplified interface to a complex subsystem of classes, making it easier to use and understand.

## What is the Facade Pattern?

The Facade pattern is a structural design pattern that:
- Provides a unified interface to a set of interfaces in a subsystem
- Defines a higher-level interface that makes the subsystem easier to use
- Wraps a complicated subsystem with a simpler interface
- Reduces coupling between client code and subsystem components

### When to Use?

Use the Facade pattern when:
- You need to provide a simple interface to a complex subsystem
- You want to layer your subsystems and provide entry points to each layer
- You need to decouple your client code from subsystem components
- You want to reduce dependencies between client code and multiple subsystems

### Common Use Cases:
- Simplifying complex library interfaces
- Providing unified API for multiple services
- Creating service layers in applications
- Wrapping complex database operations
- Abstracting third-party integrations

### Key Points:
1. Facades provide convenient methods for common use cases
2. Original subsystem remains available for advanced users
3. Multiple facades can work with the same subsystem
4. Facades don't hide the subsystem completely

## Install dependencies
```shell
npm install
```

## Running the Application
```shell
npm run dev
```
expected output:
```shell
CPU: Freezing processor...
Memory: Loading RAM...
HardDrive: Reading data...
CPU: Executing instructions...
CPU: Freezing processor...
Memory: Clearing RAM...
HardDrive: Clearing temporary files...
CPU: Shutting down...
```

## Coverage
```shell
npm run test:coverage
```

## Testing
Here's how to test the Command implementation:

```shell
npm test
```

## Advantages and Disadvantages

### Advantages:
- Simplifies complex systems for clients
- Reduces coupling between client code and subsystems
- Promotes loose coupling and separation of concerns
- Makes subsystems easier to use and understand
- Helps in implementing layered architecture

### Disadvantages:
- Can become a "god object" if not designed carefully
- May introduce unnecessary abstraction for simple systems
- Can hide useful subsystem features that some clients might need
- Might decrease performance due to additional method calls

## Best Practices

1. Keep facades focused on specific use cases
2. Don't make facades too complex
3. Consider creating multiple facades for different aspects of the subsystem
4. Document the underlying subsystem interactions
5. Use meaningful method names that describe the operations being performed

## Running the Tests

Install dependencies
npm install
Run tests
npm test

## License

[MIT License](LICENSE)