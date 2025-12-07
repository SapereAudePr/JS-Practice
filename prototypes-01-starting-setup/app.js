// // // function Person() {
// // //     this.name = 'Person';
// // //     this.age = 5;
// // //     this.greet = function () {
// // //         console.log(`Hello my name is ${this.name} and my age is ${this.age}`);
// // //     }
// // // }
// // //
// // // const p = new Person();
// // // console.log(p.greet);
// // //
// // // console.log(p.__prototype__)
// //
// // class AgedPerson {
// //     printAge() {
// //         console.log(this.age)
// //     }
// // }
// //
// // class Person extends AgedPerson {
// //     name = `Max`;
// //
// //     constructor() {
// //         super();
// //         this.age = 20
// //     }
// //
// //     greet() {
// //         console.log(`Hello my name is ${this.name} and my age is ${this.age}!`);
// //     }
// // }
// //
// // const person = new Person();
// // const agedPerson = new AgedPerson();
// // agedPerson.printAge();
// // person.describe = function () {
// //     console.log(`starting...`)
// // }
// // console.dir(person);
// // person.describe();
// // Person.prototype.logIt = function () {
// //     console.log(`logging...`)
// // }
// // Person.prototype.logIt();
// // person.logIt();
// // console.dir(person);
// // console.dir(Person.prototype.length !== 0);
// // console.dir(Object.prototype.__proto__)
// // console.log(person.__proto__)
//
// const obj = {
//     name: 'John',
//     age: 32,
// }
//
//
// Object.setPrototypeOf(obj, {
//     ...Object.getPrototypeOf(obj),
//     greeting: function() {
//         console.dir(`Hello, World! My name is ${this.name}!`);
//     }
// });
//
// obj.__proto__.greeting();
// obj.greeting();
// console.dir(obj);
// console.dir(obj.greeting.__proto__)