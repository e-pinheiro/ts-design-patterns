# Adapter Pattern Example in TypeScript

This project demonstrates the implementation of the Adapter design pattern using TypeScript. The Adapter pattern allows incompatible interfaces to work together by wrapping an object in an adapter to make it compatible with another class.

## What is the Adapter Pattern?

The Adapter pattern is a structural design pattern that:
- Converts the interface of a class into another interface clients expect
- Allows classes to work together that couldn't otherwise due to incompatible interfaces
- Acts as a wrapper between two incompatible interfaces
- Enables integration of new components with existing systems

### When to Use?

Use the Adapter pattern when:
- You want to use an existing class, but its interface isn't compatible with your code
- You need to reuse existing classes that lack common interface with other classes
- You want to create a reusable class that cooperates with classes that don't have compatible interfaces
- You need to integrate a third-party library into your existing codebase

### Common Use Cases:
- Converting data formats between different systems
- Making third-party libraries work with your code
- Legacy system integration
- API wrapper implementations
- Cross-platform compatibility layers

### Key Points:
1. Adapters implement the interface that clients expect
2. Adapters translate calls to the target interface into calls the adaptee can understand
3. Adapters can provide additional functionality while performing the translation
4. Both object and class adapters are possible (composition vs inheritance)

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
Playing mp3 file: song.mp3
Playing mp4 file: movie.mp4
Playing vlc file: video.vlc
Invalid media type: avi
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
- Increases reusability of existing code
- Enhances flexibility by allowing incompatible classes to work together
- Improves maintainability by separating interface adaptation from core business logic
- Follows Single Responsibility Principle by separating interface conversion from primary business logic
- Makes integration of third-party code easier

### Disadvantages:
- Increases complexity by introducing new interfaces and classes
- Sometimes it's better to change the service class to match the rest of your code
- Can be confusing to maintain if there are multiple layers of adapters
- May impact performance due to additional method calls

## Best Practices

1. Keep adapters focused on interface translation only
2. Consider using composition over inheritance when possible
3. Document the expected behavior of the adapted interface
4. Use meaningful names that indicate the adaptation being performed
5. Consider creating interface hierarchies when dealing with multiple similar adaptations

## Running the Tests

Install dependencies
npm install
Run tests
npm test

## License

[MIT License](LICENSE)