# Abstract Factory Pattern Example in TypeScript

This project demonstrates the implementation of the Abstract Factory design pattern using TypeScript. The Abstract Factory pattern provides an interface for creating families of related or dependent objects without specifying their concrete classes.

## What is the Abstract Factory Pattern?

The Abstract Factory pattern is a creational design pattern that:
- Provides an interface for creating families of related or dependent objects
- Ensures that created objects work together consistently
- Isolates concrete classes from client code
- Makes exchanging product families easy

### When to Use?

Use the Abstract Factory pattern when:
- A system needs to be independent of how its products are created, composed, and represented
- A system should be configured with multiple families of products
- A family of related product objects is designed to be used together
- You want to provide a class library of products, and you want to reveal just their interfaces, not their implementations

### Common Use Cases:
- Cross-platform UI toolkits
- Multiple database types with related components
- Different operating system components
- Theme variations in applications
- Multiple rendering engines in game development

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
Product A operation
Product B operation
```

## Coverage
```shell
npm run test:coverage
```

## Testing
Here's how to test the Factory Method implementation:

```shell
npm test
```

## Advantages and Disadvantages

### Advantages:
- Guarantees compatibility between related products
- Avoids tight coupling between concrete products and client code
- Single Responsibility Principle: extracts product creation code into one place
- Open/Closed Principle: new product families can be introduced without breaking code
- Makes switching between product families easy

### Disadvantages:
- Code may become complex as many interfaces and classes are introduced
- All new products must be added to every concrete factory
- Requires creating entire families of products even when only some are needed

## Best Practices

1. Use when you need to ensure compatibility between related products
2. Consider providing default implementations for abstract factories
3. Design interfaces for all product families carefully
4. Keep product families consistent across concrete factories
5. Consider using Factory Method pattern if you only need to create single products rather than families

## Running the Tests

Install dependencies
npm install
Run tests
npm test

## License

[MIT License](LICENSE)