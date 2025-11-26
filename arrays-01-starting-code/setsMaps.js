///////////////////////////////////////////////////////////////////////////////======SETS======///////////////////////////////////////////////////////////////////////////////


/*
GOOD FOR UNIQUE VALUES LIKE IDS
 */


// for (const id of ids.values()) {
//
//     console.log(id);
//
// }

// ids.keys().forEach(key => {
//     key.value;
//     console.log(key.value);
// })

// ids.add({value: 200});
//
// ids.delete({value: 200});
// ids.values().forEach((val) => {
//     val.delete(20);
// })

// ids.values().forEach(val =>  {
//
//     console.log(val.value);
// });


// ids.add(99);
// console.log(ids.has(20));
// ids.delete(20);
// const test = ids.keys().forEach((val) => {
//     return val.value;
// })

//
// const ids = new Set([20, 50, 100, 200]);
// const ids2 = new Set([{nums: 20}, {nums: 20}, {nums: 20}]);
//
//
// ids.forEach(id => {
//     if (id >= 50)
//         console.log(id)
// });
//
//
// console.log(ids);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////======MAPS======///////////////////////////////////////////////////////////////////////////////

// const person1 = {name: `Raven`}
// const person2 = {name: `John`}
//
// const personData = new Map([[person1, [{age: 25, sex: `Female`, id: 1}]]])
//
// personData.set(person2, [{age: 30, sex: `Male`, id: 2}])
// personData.set({name: `Sona`}, [{age: 22, sex: `Female`, id: 3}])
//
// console.log(personData)
// console.log(personData.get(person1))
// console.log(personData.get(person2))
// console.log(person1)
//
// for (const entry of personData.entries()) {
//     console.log(entry)
// }
//
// for (const [key, value] of personData.entries()) {
//     console.log(key, value)
// }
//
// for (const keys of personData.keys()) {
//     console.log(keys)
// }




/////////////////////// WEAK SET /////////////////////////

// let person = {name: `Raven`};
//
// const personData = new WeakSet();
//
// personData.add(person);
//
// person = null; // Person object will be garbage collected from the JS engine.
//
// console.log(personData);

//////////////////////////////////////////////////////////


/////////////////////// WEAK MAP /////////////////////////

const personData = new WeakMap();

let person = {name: `Raven`};

personData.set(person, `Extra Info!`);

person = null; // Person object will be garbage collected from the JS engine.

console.log(personData);

//////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

