interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
  lastLogin?: Date; // Optional property
}

// class UserModel implements User {
//   constructor(
//     public id: number,
//     public name: string,
//     public email: string,
//     public isActive: boolean,
//     public lastLogin: Date
//   ) {}
// }

// const user: UserModel = new UserModel(1, "John Doe", "john.doe@example.com", true, new Date());

const user2: User = {
  id: 2,
  name: "Jane Smith",
  email: "jane.smith@example.com",
  isActive: false,
  lastLogin: new Date()
}

class UserAccount {
  constructor(
    public user: User,
    public accountType: string,
    public createdAt: Date = new Date()
  ) {}
}

// Promesas y tipos genéricos

const promise = new Promise<User[]>((resolve, reject) => {
  setTimeout(() => {
    const n = Math.random();
    if (n > 0.5) {
        reject("Error: La promesa ha fallado");
        return;
    }
    resolve([user2]);
  }, 500); 
});

promise
  .then(users => {
    users.forEach(user => {
      console.log(`Usuario: ${user.name}, Email: ${user.email}`);
    });
  })
  .catch(error => {
    console.error(error);
  })
  .finally(() => {
    console.log("La promesa ha finalizado");
  });