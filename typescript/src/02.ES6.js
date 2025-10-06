// Ejemplo de ES6 (2015): Clases y Herencia

class Person {
  static numPersons = 0;

  static settNumPersons() {
    Person.numPersons++;
  }

  #name;
  age;
  constructor(name, age) {
    Person.settNumPersons();
    this.#name = name;
    this.age = age;
  }

  get name() {
    return this.#name;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.#name} and I am ${this.age} years old.`
    );
  }
}

const person1 = new Person("Alice", 30);
person1.greet(); // Hello, my name is Alice and I am 30 years old.

class Student extends Person {
  studentId;
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }

  study() {
    console.log(`${this.name} is studying.`);
  }

  greet() {
    super.greet();
    console.log(`I am also a student with ID: ${this.studentId}`);
  }
}

const student1 = new Student("Bob", 20, "S123");
student1.greet(); // Hello, my name is Bob and I am 20 years old.
student1.study(); // Bob is studying.


console.log(`Total persons created: ${Person.numPersons}`); // Total persons created: 2