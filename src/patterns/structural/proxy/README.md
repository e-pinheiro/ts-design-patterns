# Proxy Pattern Example in TypeScript

This project demonstrates the implementation of the Proxy design pattern using TypeScript. The Proxy pattern provides a surrogate or placeholder for another object to control access to it.

## What is the Proxy Pattern?

The Proxy pattern is a structural design pattern that:
- Provides a substitute or placeholder for another object
- Controls access to the original object
- Allows you to perform something either before or after the request gets through to the original object
- Acts as a wrapper or agent object that controls access to another object

### When to Use?

Use the Proxy pattern when:
- You need lazy initialization (virtual proxy)
- You want to control access to an object (protection proxy)
- You need to log access to an object (logging proxy)
- You want to cache results of expensive operations (caching proxy)
- You need to implement reference counting (smart reference)

### Common Use Cases:
- Lazy loading of heavy objects
- Access control and security
- Logging and monitoring
- Caching
- Virtual proxies for resource-intensive objects
- Remote proxies for accessing remote resources

### Key Points:
1. Proxies implement the same interface as their subjects
2. Proxies control access to the real subject
3. Proxies can add functionality without changing the subject
4. Different types of proxies serve different purposes (virtual, protection, remote, etc.)

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
- Controls access to the original object
- Manages lifecycle of the real subject
- Works even if the real subject isn't ready or available
- Adds security and logging without changing the real subject
- Improves performance through caching
- Provides lazy initialization

### Disadvantages:
- Adds another layer of abstraction
- May impact performance due to extra indirection
- Makes the code more complicated
- Response might be delayed by the proxy

## Best Practices

1. Keep the proxy interface identical to the subject
2. Consider using dependency injection for subject creation
3. Implement lazy loading when appropriate
4. Use meaningful proxy names that indicate their purpose
5. Don't overload proxies with too many responsibilities

## Running the Tests

Install dependencies
npm install
Run tests
npm test

## License

[MIT License](LICENSE)