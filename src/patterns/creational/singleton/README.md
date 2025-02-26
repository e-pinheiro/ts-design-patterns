# Singleton Pattern Example in TypeScript

This project demonstrates the implementation of the Singleton design pattern using TypeScript. The Singleton pattern ensures that a class has only one instance and provides a global point of access to that instance.

## What is the Singleton Pattern?

The Singleton pattern is a creational design pattern that:
- Ensures a class has only one instance
- Provides a global point of access to that instance
- Lazy loads the instance when it's first needed

### When to Use?

Use the Singleton pattern when:
- Exactly one instance of a class is needed throughout the application
- You need stricter control over global variables
- You want to manage shared resources (e.g., database connections, configuration settings)

### Common Use Cases:
- Configuration managers
- Database connections
- Logging services
- Caching mechanisms
- State management stores

### Key Points:
1. The constructor is private, preventing direct instantiation
2. A static method `getInstance()` controls access to the instance
3. The instance is created only when first requested (lazy loading)
4. All subsequent calls to `getInstance()` return the same instance


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
ProcessManager 1: 2025-02-26T13:51:03.908Z
ProcessManager 2: 2025-02-26T13:51:03.908Z
Only one instance of ProcessManager is created.
```

## Testing
Here's how to test the Singleton implementation:

```shell
npm test
```


## Advantages and Disadvantages

### Advantages:
- Ensures single instance existence
- Lazy initialization
- Global access point to the instance
- Easy to implement

### Disadvantages:
- Can make code tightly coupled
- Can make unit testing more difficult
- Can be considered an anti-pattern if overused
- Violates Single Responsibility Principle (class manages its own lifecycle)

## Best Practices

1. Use Singleton sparingly and only when truly needed
2. Consider using Dependency Injection as an alternative
3. Make sure the Singleton is thread-safe in multi-threaded environments
4. Be careful with static state in testing environments

## Running the Tests

Install dependencies
npm install
Run tests
npm test


## License

[MIT License](LICENSE)