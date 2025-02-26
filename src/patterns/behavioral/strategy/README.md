# Strategy Pattern Example in TypeScript

This project demonstrates the implementation of the Strategy design pattern using TypeScript. The Strategy pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable. It lets the algorithm vary independently from clients that use it.

## What is the Strategy Pattern?

The Strategy pattern is a behavioral design pattern that:
- Defines a family of algorithms
- Encapsulates each algorithm in its own class
- Makes algorithms interchangeable within that family
- Lets the algorithm vary independently from clients that use it

### When to Use?

Use the Strategy pattern when:
- You need different variants of an algorithm
- You have a lot of similar classes that only differ in how they execute some behavior
- You want to isolate the algorithm logic from the code that uses the algorithm
- You need to vary the algorithm at runtime

### Common Use Cases:
- Sorting algorithms (choosing different sorting methods)
- Payment processing (different payment methods)
- Data compression (different compression algorithms)
- Route planning (different navigation strategies)
- Authentication strategies (OAuth, JWT, Basic Auth)

### Key Points:
1. Strategies are interchangeable algorithms encapsulated in their own classes
2. All strategies implement the same interface
3. The context class maintains a reference to a strategy object
4. The context delegates the algorithm execution to the strategy object
5. Clients can switch strategies at runtime

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
Paid 100 using Credit Card (1234-5678-9012-3456)
Paid 50 using PayPal (john.doe@example.com) from John Doe
```

## Coverage
```shell
npm run test:coverage
```

## Testing
Here's how to test the Strategy implementation:

```shell
npm test
```

## Advantages and Disadvantages

### Advantages:
- Algorithms can be switched at runtime
- Isolates algorithm implementation from code that uses the algorithm
- Easy to add new strategies without changing existing code
- Eliminates complex conditional statements
- Promotes code reuse across different contexts

### Disadvantages:
- Increased number of classes in the application
- Clients must be aware of different strategies
- Can be overkill for applications with few algorithms
- Possible overhead if most algorithms are simple

## Best Practices

1. Use strategy when you have a family of similar algorithms
2. Make sure all strategies implement the same interface
3. Consider using factory methods to create strategies
4. Keep the strategy interface simple
5. Use composition over inheritance
6. Consider making strategies optional if there's a default behavior

## Running the Tests

Install dependencies
npm install
Run tests
npm test

## License

[MIT License](LICENSE)