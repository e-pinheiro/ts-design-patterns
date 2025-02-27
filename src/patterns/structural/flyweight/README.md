# Flyweight Pattern Example in TypeScript

This project demonstrates the implementation of the Flyweight design pattern using TypeScript. The Flyweight pattern is used to minimize memory usage by sharing as much data as possible with similar objects.

## What is the Flyweight Pattern?

The Flyweight pattern is a structural design pattern that:
- Reduces memory usage by sharing common parts of state between multiple objects
- Separates intrinsic (shared) state from extrinsic (unique) state
- Allows efficient sharing of objects to support large numbers of fine-grained instances
- Provides a way to use objects in large quantities when storage cost is high

### When to Use?

Use the Flyweight pattern when:
- Your application needs to spawn a huge number of similar objects
- RAM usage is a critical aspect of your application
- The objects contain duplicate state that can be shared
- The object's state can be split into intrinsic and extrinsic parts
- Many groups of objects can be replaced by relatively few shared objects

### Common Use Cases:
- Text editors (sharing character formatting)
- Game development (sharing graphical assets)
- Document processing systems
- Browser DOM element rendering
- Caching and pool management systems

### Key Points:
1. Flyweights store intrinsic state that can be shared
2. Extrinsic state is passed by the client code
3. A factory manages flyweight objects
4. Flyweights are immutable
5. Context objects store extrinsic state

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
**Hello**
_World_
__Flyweight Pattern__
**Another bold text**
Total format objects created: 3
```

## Coverage
```shell
npm run test:coverage
```

## Testing
Here's how to test the Flyweight implementation:

```shell
npm test
```

## Advantages and Disadvantages

### Advantages:
- Saves RAM by sharing common data between objects
- Reduces the total number of objects in the system
- Centralizes state management for shared properties
- Improves application performance with large numbers of objects
- Makes the application more scalable

### Disadvantages:
- Can complicate code due to splitting state
- May introduce synchronization issues in multithreaded environments
- Might trade CPU cycles for RAM savings
- Can be overkill for applications with few objects
- Requires careful consideration of what state can be shared

## Best Practices

1. Clearly separate intrinsic and extrinsic state
2. Make flyweight objects immutable
3. Use a factory to manage flyweight instances
4. Consider thread safety in concurrent applications
5. Document which state is shared and which is unique

## Running the Tests

Install dependencies
npm install
Run tests
npm test

## License

[MIT License](LICENSE)