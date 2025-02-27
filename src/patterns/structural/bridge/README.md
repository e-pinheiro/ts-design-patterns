# Bridge Pattern Example in TypeScript

This project demonstrates the implementation of the Bridge design pattern using TypeScript. The Bridge pattern decouples an abstraction from its implementation, allowing both to vary independently.

## What is the Bridge Pattern?

The Bridge pattern is a structural design pattern that:
- Splits a large class or set of closely related classes into two separate hierarchies—abstraction and implementation
- Allows abstraction and implementation to vary independently
- Promotes loose coupling between abstractions and their implementations
- Enables platform independence

### When to Use?

Use the Bridge pattern when:
- You want to avoid a permanent binding between an abstraction and its implementation
- Both the abstractions and their implementations should be extensible through subclasses
- Changes in the implementation should not impact client code
- You want to share an implementation among multiple objects

### Common Use Cases:
- Cross-platform applications
- Different database drivers
- Multiple types of GUI frameworks
- Device drivers
- Graphics and windowing systems
- Remote service APIs

### Key Points:
1. Abstractions define high-level control logic
2. Implementations provide platform/implementation-specific code
3. Abstractions contain a reference to their implementation
4. Client code works with abstractions only

## Install dependencies
```shell
npm install
```

## Running the Application
```shell
npm run dev
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
- Provides platform independence
- Reduces coupling between abstraction and implementation
- Improves extensibility
- Hides implementation details from client code
- Follows Single Responsibility Principle

### Disadvantages:
- Increases complexity by introducing new abstract classes
- Might be overkill for simple applications
- Can be harder to understand for developers new to the pattern

## Best Practices

1. Design clear and coherent abstractions
2. Keep implementations focused and independent
3. Consider using the Factory pattern to create appropriate implementations
4. Use when you anticipate multiple variants of both abstractions and implementations
5. Document the relationship between abstractions and implementations clearly

## Running the Tests

Install dependencies
npm install
Run tests
npm test

## License

[MIT License](LICENSE)