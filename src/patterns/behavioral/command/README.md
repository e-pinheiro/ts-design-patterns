# Command Pattern Example in TypeScript

This project demonstrates the implementation of the Command design pattern using TypeScript. The Command pattern encapsulates a request as an object, thereby letting you parameterize clients with different requests, queue or log requests, and support undoable operations.

## What is the Command Pattern?

The Command pattern is a behavioral design pattern that:
- Turns a request into a stand-alone object containing all request information
- Decouples objects that produce the requests from objects that execute them
- Enables parameterization of objects with operations
- Supports undoable operations and request queueing

### When to Use?

Use the Command pattern when:
- You need to parameterize objects with operations
- You want to queue operations, schedule their execution, or execute them remotely
- You need to implement reversible operations
- You want to structure a system around high-level operations built from primitive operations

### Common Use Cases:
- GUI buttons and menu items
- Macro recording systems
- Multi-level undo/redo
- Progress tracking of operations
- Remote procedure execution
- Job queue systems

### Key Points:
1. Commands are objects that encapsulate all the information needed to perform an action
2. Commands have an `execute()` method (and optionally an `undo()` method)
3. Commands can be stored, passed around, and executed at a later time
4. Receivers perform the actual work when the command is executed

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
Executing command with message: Hello, Command Pattern!
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
- Decouples classes that invoke operations from classes that perform them
- Easy to add new commands without changing existing code
- Supports undo/redo operations
- Enables queueing and logging of operations
- Supports composite commands (macros)

### Disadvantages:
- Can lead to a large number of small command classes
- Each command is a separate class, which might be overkill for simple operations
- May add complexity when the application doesn't need command queuing or undo/redo

## Best Practices

1. Keep commands simple and focused on a single task
2. Implement undo operations when reversible actions are needed
3. Consider using the Composite pattern for macros (complex commands)
4. Use command objects to implement callback functions
5. Consider using the Memento pattern alongside Command for storing object states

## Running the Tests

Install dependencies
npm install
Run tests
npm test

## License

[MIT License](LICENSE)