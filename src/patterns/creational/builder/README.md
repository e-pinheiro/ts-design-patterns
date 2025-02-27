# Builder Pattern Example in TypeScript

This project demonstrates the implementation of the Builder design pattern using TypeScript. The Builder pattern allows you to construct complex objects step by step, letting you produce different representations using the same construction process.

## What is the Builder Pattern?

The Builder pattern is a creational design pattern that:
- Lets you construct complex objects step by step
- Allows you to produce different types and representations of an object using the same construction code
- Separates the construction of a complex object from its representation
- Provides fine control over the construction process

### When to Use?

Use the Builder pattern when:
- You need to create complex objects with numerous parts that must be created in a specific order
- You want to create different representations of some product using the same construction process
- You need fine control over the construction process
- The algorithm for creating a complex object should be independent of the parts and how they're assembled

### Common Use Cases:
- Building complex objects like computers with many configurable parts
- Creating complex documents (PDF, HTML, etc.)
- Configuring network connections with multiple parameters
- Creating complex SQL queries
- Building complex UI forms with many optional fields

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
Gaming PC: Computer [CPU: Intel i9-12900K, RAM: 32GB, Storage: 2000GB, GPU: NVIDIA RTX 4080]
Custom PC: Computer [CPU: AMD Ryzen 7 5800X, RAM: 64GB, Storage: 1000GB, GPU: AMD Radeon RX 6800 XT]
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
- Allows you to construct objects step by step
- Reuse the same construction code for different representations
- Single Responsibility Principle: isolates complex construction code from business logic
- Provides control over the construction process
- Gives you fine control over the final product

### Disadvantages:
- Requires creating separate builder classes for each type of product
- May lead to more complex code when the product is simple
- Requires the director and builders to be mutable
- Code can become verbose for simple objects

## Best Practices

1. Use when object construction involves multiple steps
2. Consider implementing a fluent interface (method chaining)
3. Make builder classes immutable when possible
4. Provide clear methods for each configuration step
5. Consider using the Director class to encapsulate various ways to construct an object

## Running the Tests

Install dependencies
npm install
Run tests
npm test

## License

[MIT License](LICENSE)