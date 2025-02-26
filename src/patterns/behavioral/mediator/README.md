# Mediator Pattern Example in TypeScript

This project demonstrates the implementation of the Mediator design pattern using TypeScript. The Mediator pattern reduces coupling between components by making them communicate indirectly through a mediator object, rather than directly with each other.

## What is the Mediator Pattern?

The Mediator pattern is a behavioral design pattern that:
- Promotes loose coupling by keeping objects from referring to each other explicitly
- Centralizes complex communications between different parts of a system
- Allows for easier maintenance and modification of object interactions
- Encapsulates object interaction in a mediator object

### When to Use?

Use the Mediator pattern when:
- A set of objects communicate in well-defined but complex ways
- Object reuse is difficult because it refers to and communicates with many other objects
- A behavior that's distributed between several classes should be customizable without a lot of subclassing
- Dependencies between objects become too complex to maintain

### Common Use Cases:
- Chat applications (users communicating through a chat room)
- Air traffic control systems (coordinating flights)
- GUI components communication
- Form validation and submission
- Event handling systems

### Key Points:
1. Components communicate through the mediator instead of directly with each other
2. The mediator encapsulates the relationships between components
3. Components are loosely coupled as they only know about the mediator
4. The mediator centralizes control and coordination
5. Components can be reused more easily

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
Client triggers operation login button click.
Login Button: Clicked
Mediator reacts on login.click and triggers following operations:
User Form: Displaying form

Client triggers operation form submit.
User Form: Submitted
Mediator reacts on form.submit and triggers following operations:
User Form: Hiding form
```

## Coverage
```shell
npm run test:coverage
```

## Testing
Here's how to test the Mediator implementation:

```shell
npm test
```

## Advantages and Disadvantages

### Advantages:
- Reduces coupling between components
- Centralizes control
- Simplifies object protocols
- Makes it easier to modify object interactions
- Promotes reusability of components

### Disadvantages:
- Mediator can become too complex
- Can become a single point of failure
- May centralize control too much
- Can be harder to test individual components

## Best Practices

1. Keep the mediator focused on coordination logic
2. Avoid putting business logic in the mediator
3. Consider using events/observables for communication
4. Keep components independent of each other
5. Document the communication protocols clearly
6. Consider breaking up large mediators into smaller ones

## Running the Tests

Install dependencies:
```shell
npm install
```

Run tests:
```shell
npm test
```

## License

[MIT License](LICENSE)