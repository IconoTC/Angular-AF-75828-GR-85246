function User(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

const user1 = new Person("Alice", 30);
user1.greet(); // Hello, my name is Alice and I am 30 years old.
