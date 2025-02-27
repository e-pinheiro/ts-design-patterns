# Factory Method Pattern Example in TypeScript

This project demonstrates the implementation of the Factory Method design pattern using TypeScript. The Factory Method pattern provides an interface for creating objects but allows subclasses to alter the type of objects that will be created.

## What is the Factory Method Pattern?

The Factory Method pattern is a creational design pattern that:
- Defines an interface for creating objects but lets subclasses decide which class to instantiate
- Allows a class to defer instantiation to subclasses
- Creates objects without exposing the creation logic to the client
- Refers to the newly created object through a common interface

### When to Use?

Use the Factory Method pattern when:
- A class can't anticipate the class of objects it needs to create
- You want to delegate the responsibility of object creation to subclasses
- You want to provide users of your library or framework with a way to extend its internal components
- You want to save system resources by reusing existing objects

### Common Use Cases:
- Framework development where components need to be extended
- Database connections for different database types
- UI component creation in different styles
- File format handlers
- Cross-platform development

### Key Points:
1. Creator classes declare the factory method that returns product objects
2. Products share a common interface or base class
3. Concrete creators override the factory method to change the resulting product's type
4. The factory method doesn't have to create new instances all the time

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
Creator: Working with ConcreteProduct
```

## Coverage
```shell
npm run test:coverage
```

## Testing
Here's how to test the Factory Method implementation:

```shell
npm test
```

## Advantages and Disadvantages

### Advantages:
- Provides loose coupling between creator and products
- Single Responsibility Principle: moves product creation code into one place
- Open/Closed Principle: easily introduce new product types without breaking code
- Makes the code more flexible and reusable
- Simplifies product object creation and encapsulates instantiation logic

### Disadvantages:
- Can lead to many subclasses, making the code more complicated
- May be overkill for simple object creation scenarios
- Requires creating a new subclass just to change the type of product

## Best Practices

1. Use when you don't know exact types and dependencies of the objects your code will work with
2. Consider providing a default implementation of the factory method
3. Make sure all products follow the same interface
4. Keep the creator class focused on object creation
5. Consider using Abstract Factory pattern if you need to create families of related objects

## Running the Tests

Install dependencies
npm install
Run tests
npm test

## License

[MIT License](LICENSE)