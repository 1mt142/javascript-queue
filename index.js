import Queue from "./Queue.js";

const cars = new Queue();

cars.enqueue("Honda");
cars.enqueue("Toyota");
cars.enqueue("Hunday");
cars.enqueue("Audi");
console.log(cars);
// console.log(cars.dequeue());
// console.log(cars.dequeue());
console.log(cars.peek());