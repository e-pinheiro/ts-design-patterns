# State Pattern Example in TypeScript

This project demonstrates the implementation of the State design pattern using TypeScript. The State pattern allows an object to alter its behavior when its internal state changes, appearing to change its class.

## What is the State Pattern?

The State pattern is a behavioral design pattern that:
- Allows an object to change its behavior when its internal state changes
- Encapsulates state-specific behavior in separate state classes
- Makes state transitions explicit
- Eliminates large conditional statements associated with different states

### When to Use?

Use the State pattern when:
- An object's behavior depends on its state and must change at runtime
- Complex conditional logic controls state-dependent behavior
- You want to avoid large switch/case or if/else statements
- State transitions are explicit and controlled

### Common Use Cases:
- Document processing (draft, review, published states)
- Order processing systems (new, paid, shipped, delivered states)
- Media players (playing, paused, stopped states)
- Game character behavior (normal, powered-up, injured states)
- Vending machines
- TCP Connection handling

### Key Points:
1. States are represented by separate classes
2. The context delegates state-specific behavior to state objects
3. State transitions can be controlled by the context or state classes
4. Each state class implements all behaviors specific to that state

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
Initial state: Draft
Cannot publish directly from draft. Need moderation first.
Moving document to moderation
Current state: Moderation
Document approved, publishing
Current state: Published
Moving published document back to draft
Final state: Draft
```

## Coverage
```shell
npm run test:coverage
```

## Testing
Here's how to test the State implementation:

```shell
npm test
```

## Advantages and Disadvantages

### Advantages:
- Single Responsibility Principle: state-specific behavior is isolated
- Open/Closed Principle: new states can be added without changing existing code
- Simplifies code by eliminating complex conditional statements
- Makes state transitions explicit and controlled
- Improves code organization and maintainability

### Disadvantages:
- Can be overkill for simple state management
- Increases number of classes in the application
- Can lead to duplicate code if states share common behavior
- State transitions need careful management to avoid inconsistencies

## Best Practices

1. Keep state classes focused on state-specific behavior
2. Consider using a state factory for creating state objects
3. Define clear state transition rules
4. Use abstract classes or interfaces for state contracts
5. Consider implementing a state caching mechanism for frequently used states

## Running the Tests

Install dependencies
npm install
Run tests
npm test

## License

[MIT License](LICENSE)