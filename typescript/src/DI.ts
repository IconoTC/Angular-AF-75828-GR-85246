
interface Service {}

class Service1 implements Service {}
class Service2 implements Service {}

class Consumer {
    service = new Service1();
}

let consumer = new Consumer();
console.log(consumer.service);

// DI - Dependency Injection
class Consumer2 {
    constructor(public service: Service) {}
}

let consumer1 = new Consumer2(new Service1());
console.log(consumer1.service);
let consumer2 = new Consumer2(new Service2());
console.log(consumer2.service);

