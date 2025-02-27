# Prototype Pattern Example in TypeScript

This project demonstrates the implementation of the Prototype design pattern using TypeScript. The Prototype pattern allows you to create new objects by cloning an existing object, known as the prototype, instead of creating new instances from scratch.

## What is the Prototype Pattern?

The Prototype pattern is a creational design pattern that:
- Enables object creation by cloning an existing object (prototype)
- Allows you to create new objects without coupling to their specific classes
- Reduces the need for creating subclasses
- Helps avoid repeated initialization code

### When to Use?

Use the Prototype pattern when:
- Creating new objects by cloning is more efficient than creating them from scratch
- You need to create objects that are similar to existing ones
- You want to reduce the number of subclasses that only differ in their initialization process
- You need to hide the complexity of creating new instances from the client

### Common Use Cases:
- Complex object creation that is resource-intensive
- Configuration presets or templates
- State preservation and restoration
- Game development (creating multiple similar objects)
- Document copying or duplication features

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
Original Document: {
  title: 'Original Title',
  content: 'Original Content',
  metadata: { author: 'John Doe', createdAt: '2025-02-27T18:45:54.599Z' }
}
Cloned Document: {
  title: 'Cloned Title',
  content: 'Modified Content',
  metadata: { author: 'John Doe', createdAt: '2025-02-27T18:45:54.599Z' }
}
```

## Coverage
```shell
npm run test:coverage
```

## Testing
Here's how to test the Prototype implementation:

```shell
npm test
```

## Advantages and Disadvantages

### Advantages:
- Reduces the need for complex object creation code
- Provides a way to create objects without knowing their specific types
- Reduces subclass proliferation
- Allows adding/removing objects at runtime
- Specifies new objects by varying values rather than structure

### Disadvantages:
- Cloning complex objects with circular references might be challenging
- Deep cloning can be complicated and performance-intensive
- Managing prototype registry/cache might add complexity
- Some classes might not support cloning

## Best Practices

1. Implement a common cloning interface across prototypes
2. Consider both shallow and deep cloning requirements
3. Provide a registry/cache for commonly used prototypes
4. Handle circular references carefully when implementing deep cloning
5. Document cloning behavior and limitations clearly

## Running the Tests

Install dependencies
npm install
Run tests
npm test

## License

[MIT License](LICENSE)