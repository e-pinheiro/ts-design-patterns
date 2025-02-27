# Chain of Responsibility Pattern Example in TypeScript

This project demonstrates the implementation of the Chain of Responsibility design pattern using TypeScript. The Chain of Responsibility pattern creates a chain of receiver objects for a request, allowing multiple objects to handle the request without explicitly specifying its receiver.

## What is the Chain of Responsibility Pattern?

The Chain of Responsibility pattern is a behavioral design pattern that:
- Passes requests along a chain of handlers
- Each handler decides either to process the request or pass it to the next handler
- Decouples senders and receivers of requests
- Provides flexibility in assigning responsibilities to objects

### When to Use?

Use the Chain of Responsibility pattern when:
- More than one object may handle a request, and the handler isn't known a priori
- You want to issue a request to one of several objects without explicitly specifying the receiver
- The set of objects that can handle a request should be specified dynamically
- You want to decouple senders and receivers

### Common Use Cases:
- Logging frameworks
- Exception handling
- Request processing pipelines
- Event handling systems
- Middleware in web frameworks
- Authentication and authorization systems

### Key Points:
1. Handlers are linked in a chain and each has a reference to the next handler
2. Each handler implements a common interface with a `handle()` method
3. Handlers can process the request or pass it to the next handler
4. The chain can be assembled dynamically at runtime

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
Authentication successful
Processing request for user: admin
Request processing completed
```

## Coverage
```shell
npm run test:coverage
```

## Testing
Here's how to test the Chain of Responsibility implementation:

```shell
npm test
```

## Advantages and Disadvantages

### Advantages:
- Reduces coupling between senders and receivers
- Provides flexibility in assigning responsibilities to objects
- Easy to add or remove responsibilities dynamically
- Follows Single Responsibility and Open/Closed principles
- Allows handlers to be reused across different chains

### Disadvantages:
- Request might go unhandled if chain isn't configured properly
- Can be hard to debug and track request flow
- May lead to poor performance with long chains
- No guarantee that a request will be handled

## Best Practices

1. Keep handler logic simple and focused
2. Implement proper error handling in the chain
3. Consider using a default handler at the end of the chain
4. Document the expected chain structure
5. Monitor chain performance in production environments

## Running the Tests

Install dependencies
npm install
Run tests
npm test

## License

[MIT License](LICENSE)