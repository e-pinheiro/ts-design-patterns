# Iterator Pattern Example in TypeScript

This project demonstrates the implementation of the Iterator design pattern using TypeScript. The Iterator pattern provides a way to access elements of a collection sequentially without exposing its underlying representation.

## What is the Iterator Pattern?

The Iterator pattern is a behavioral design pattern that:
- Provides a standard way to traverse through a collection of objects
- Encapsulates the traversal algorithm from the collection structure
- Enables multiple concurrent iterations over the same collection
- Allows different traversal algorithms for the same collection

### When to Use?

Use the Iterator pattern when:
- You need to access elements in a collection without exposing its internal structure
- You want to support multiple traversal methods for a collection
- You need to provide a uniform interface for traversing different types of collections
- You want to decouple algorithms from the collections they process

### Common Use Cases:
- Traversing tree structures
- Custom collection implementations
- Database result sets
- Pagination systems
- File system navigation
- Processing streams of data

### Key Points:
1. Iterators encapsulate the traversal algorithm
2. Collections provide one or more iterator methods
3. Iterators maintain their own traversal state
4. Multiple iterators can traverse the same collection simultaneously

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
Traversing collection:
1
2
3
4
5

Resetting and traversing again:
1
2
3
4
5
```

## Coverage
```shell
npm run test:coverage
```

## Testing
Here's how to test the Iterator implementation:

```shell
npm test
```

## Advantages and Disadvantages

### Advantages:
- Simplifies the interface of the collection
- Supports different traversal algorithms
- Allows concurrent iterations over the same collection
- Separates traversal logic from collection implementation
- Makes collection code more focused and maintainable

### Disadvantages:
- Can be overkill for simple collections
- May add unnecessary complexity for single traversal methods
- Additional memory overhead for storing iterator states
- Potential performance impact for large collections

## Best Practices

1. Implement both forward and backward iteration when needed
2. Consider implementing the Iterable interface for TypeScript/JavaScript collections
3. Keep iterator state private and encapsulated
4. Provide clear documentation for the traversal order
5. Consider implementing a "peek" operation when appropriate

## Running the Tests

Install dependencies
npm install
Run tests
npm test

## License

[MIT License](LICENSE)