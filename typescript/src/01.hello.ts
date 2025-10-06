
// Inferencia de tipos

let greeting = "Hello, TypeScript!";

console.log(greeting);

let user = { name: "Alice", age: 30 };

// user.job = "Engineer"; // Error: Property 'job' does not exist on type '{ name: string; age: number; }'.

console.log(`${user.name} is ${user.age} years old.`);

// Tipos literales

const pi = 3.14159; // Tipo inferido como 3.14159 (literal numérico)

// Tipo any

let isActive; // Mala práctica, evita usar 'any' implícito
isActive = true;
isActive = "yes";
isActive = 42;

let data: any; // Mejor usar 'any' explícito si es necesario, pero sigue siendo mala práctica
data = { id: 1 };
data = [1, 2, 3];
data = "Some string data";

// Parámetros y tipos: Anotación de tipos

// Error para tsc si no se especifican tipos
// function addBad(a, b) {
//   return a + b;
// }


function add(a: number, b: number): number {
  return a + b;
}

// Arrow functions

const multiply = (x: number, y: number): number => x * y;

// Arrays

// Tipo inferido como number[]
const numbers = [1, 2, 3, 4, 5];
numbers.push(6);
// numbers.push("seven"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.

// Si anotación de tipos Se inferiría como any[]
const strings: string[] = [];
strings.push("four");
// strings.push(5); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.


// Tuplas
let tuple: [string, number];
tuple = ["Alice", 30];
// tuple = [30, "Alice"]; // Error: Type 'number' is not assignable to type 'string'.
// tuple[2];
tuple.push(100); // Permitido, pero no recomendado

// Casting de tipos o aserciones de tipos

let someValue1: any = true;
let strLength2: number = someValue1.length; // No error, pero strLength2 será undefined


let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;

// Tipos propios

type User = {
  name: string;
  age: number;
  isAdmin?: boolean; // Propiedad opcional
};

interface Product {
  id: number;
  name: string;
  price: number;
  description?: string; // Propiedad opcional
}

const user1: User = { name: "Bob", age: 25 };
const product1: Product = { id: 1, name: "Laptop", price: 999.99, stock: 10 };

const users : User[] = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25, isAdmin: true }
];

// Solo con tipos propios

type ID = string | number;
const userId1: ID = "abc123";
const userId2: ID = 456;

type PopularTag = "js" | "ts" | "node" | "react";
type MaybePopularTag = PopularTag | "angular" | "vue";

interface ProductWithTags extends Product {
  tags: MaybePopularTag[];
}

// Ampliar interfaces no lo hacen los tipos
// Uso con interfaces externos

interface Product {
    stock: number;
}