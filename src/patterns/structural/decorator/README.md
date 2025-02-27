# Decorator Pattern Example in TypeScript

This project demonstrates the implementation of the Decorator design pattern using TypeScript. The Decorator pattern allows you to add new behaviors to objects dynamically by placing these objects inside wrapper objects that contain the behaviors.

## What is the Decorator Pattern?

The Decorator pattern is a structural design pattern that:
- Lets you attach new behaviors to objects dynamically
- Provides a flexible alternative to subclassing for extending functionality
- Follows Single Responsibility Principle by allowing functionality to be divided into classes
- Supports the Open/Closed principle by allowing behavior modification without altering existing code

### When to Use?

Use the Decorator pattern when:
- You need to add responsibilities to objects dynamically and transparently
- You want to extend an object's behavior without affecting other objects of the same class
- Extension by subclassing is impractical or impossible
- You need to add or remove responsibilities at runtime

### Common Use Cases:
- Adding features to UI components
- Implementing middleware in web frameworks
- Building data stream handlers
- Adding logging, validation, or caching capabilities
- Implementing cross-cutting concerns

### Key Points:
1. Components define the interface for objects that can have responsibilities added
2. Concrete Components provide basic behavior implementations
3. Decorators maintain a reference to a Component object and define an interface that conforms to Component's interface
4. Concrete Decorators add responsibilities to the component
5. Client works with Components through the Component interface

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
Simple Coffee costs $10
Simple Coffee, with milk costs $12
Simple Coffee, with milk, with sugar costs $13
```

## Coverage
```shell
npm run test:coverage
```

## Testing
Here's how to test the Decorator implementation:

```shell
npm test
```

## Advantages and Disadvantages

### Advantages:
- Provides greater flexibility than static inheritance
- Avoids feature-laden classes high up in the hierarchy
- Supports Single Responsibility Principle
- Allows adding/removing responsibilities at runtime
- Enables combining multiple behaviors through multiple decorators

### Disadvantages:
- Can result in many small decorator classes
- Order of decorators can be significant and confusing
- Initial configuration of decorator layers can be tedious
- Can complicate the process of instantiating components
- May make code harder to understand due to multiple wrapper layers

## Best Practices

1. Keep the Component interface simple and focused
2. Ensure decorators are transparent to clients
3. Consider using Factory or Builder patterns for complex decorator configurations
4. Document the intended order of decorators when it matters
5. Be cautious with stateful decorators

## Running the Tests

Install dependencies
npm install
Run tests
npm test

## License

[MIT License](LICENSE)