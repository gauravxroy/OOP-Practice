# OOP- Encapsulation
### Why this app
This is a basic web application built using JavaScript to demonstrate the practical implementation of Object-Oriented Programming (OOP) concepts. In this application, one of the core principles of OOP, Encapsulation, is implemented to handle account-related operations such as deposit, withdrawal, and other banking queries.

The app ensures that sensitive data, like the account balance, is securely encapsulated and can only be accessed or modified through well-defined public methods. This reflects how OOP concepts can be applied in real-life use cases for creating robust and secure applications.


### Introduction to Object-Oriented Programming (OOP)

**Object-Oriented Programming (OOP)** is a programming paradigm that organizes code around **objects** rather than functions and logic. Objects represent real-world entities with attributes (data) and behavior (methods). This approach enhances code modularity, reusability, and maintainability.

---

### **Core Principles of OOP**

1. **Encapsulation**:
   - Encapsulation is the concept of bundling data (attributes) and methods (functions) into a single unit (class) and **restricting direct access** to some of the object's components.
   - Access to data is controlled through **getters** and **setters** or public methods.
   - **Benefits**:
     - Protects the integrity of the data by preventing unintended access or modification.
     - Provides a clear interface for interacting with the object.

   **Example**:
   ```javascript
   class BankAccount {
       #balance; // Private property
       constructor(initialBalance) {
           this.#balance = initialBalance;
       }

       deposit(amount) {
           this.#balance += amount;
       }

       getBalance() {
           return this.#balance;
       }
   }
   ```

---

2. **Abstraction**:
   - Abstraction involves **hiding complex implementation details** and exposing only the necessary functionalities.
   - It simplifies the usage of an object by focusing on what it does rather than how it does it.
   - **Benefits**:
     - Reduces complexity for users.
     - Makes code more flexible to changes.

   **Example**:
   ```javascript
   class Car {
       start() {
           console.log("Engine started");
       }

       drive() {
           console.log("Car is moving");
       }
   }

   const myCar = new Car();
   myCar.start();  // Users don’t need to know how the engine works internally
   myCar.drive();
   ```

---

3. **Inheritance**:
   - Inheritance allows a class (child) to **reuse and extend** the properties and methods of another class (parent).
   - It promotes **code reuse** and establishes a hierarchical relationship between classes.
   - **Benefits**:
     - Avoids code duplication.
     - Facilitates extending functionality.

   **Example**:
   ```javascript
   class Animal {
       speak() {
           console.log("This animal makes a sound.");
       }
   }

   class Dog extends Animal {
       speak() {
           console.log("The dog barks.");
       }
   }

   const myDog = new Dog();
   myDog.speak(); // Output: The dog barks.
   ```

---

4. **Polymorphism**:
   - Polymorphism allows objects to be treated as instances of their parent class while maintaining their specific behavior.
   - A subclass can **override** methods from its parent class to provide a specific implementation.
   - **Benefits**:
     - Improves code flexibility and scalability.
     - Supports the “one interface, multiple behaviors” principle.

   **Example**:
   ```javascript
   class Shape {
       area() {
           console.log("Calculating area");
       }
   }

   class Circle extends Shape {
       area() {
           console.log("Area of Circle: πr²");
       }
   }

   class Square extends Shape {
       area() {
           console.log("Area of Square: side²");
       }
   }

   const shapes = [new Circle(), new Square()];
   shapes.forEach(shape => shape.area()); // Calls the respective `area` method for each shape
   ```

---

### **Advantages of OOP**
1. **Code Reusability**: Inheritance allows the reuse of code across classes.
2. **Scalability**: Polymorphism and modular code make it easier to extend and modify the application.
3. **Improved Maintainability**: Encapsulation hides implementation details, making it easier to maintain the codebase.
4. **Real-World Modeling**: OOP models real-world entities, making it intuitive for problem-solving.

---

### **Conclusion**
Object-Oriented Programming organizes code into reusable, modular components using principles like **Encapsulation**, **Abstraction**, **Inheritance**, and **Polymorphism**. These principles collectively improve code structure, flexibility, and maintainability, making OOP a fundamental approach in modern software development.
