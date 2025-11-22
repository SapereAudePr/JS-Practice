// const selectList = document.querySelectorAll("li");
//
// const listToArray = Array.from(selectList);
//
// console.log(listToArray);
//
// const analyticsData = [[1, 5.7, 8.9], [3, 8.4, 6.9]];
//
// const personalData = [77, `Raven`, {value: 66}]
//
// for (const data of analyticsData) {
//     for (const dataPoint of data) {
//         console.log(dataPoint);
//         // console.log(data);
//     }
// }
//
// const hobbies = [`Reading`, `Cooking`,];
// hobbies.unshift(`Walking`); // adds to start
// hobbies.shift(); // Deletes the first item
// hobbies.pop(); // Deletes the last item
// hobbies.push(`Coding`); // adds to end
// hobbies[0] = `Writing`; // Changes the value of that index
// hobbies[8] = `123`; // Empty slots will be created by 8 because index 8 doesn't exist.
// hobbies[7] = `343`;
// hobbies.splice(0, 0, `Splice!`); // Start index => how many items will be deleted => what item will be added.
// const removedItems = hobbies.splice(1, 2); // Removed items can be stored to use.
// console.log(`Deleted Items: ${removedItems}`);
// console.log(hobbies, hobbies[6], hobbies[7]); // Empty slots that have no values will be `undefined`!
//
// const testResults = [1, 2.3, 3.5, 4.7, 5.1, 6.6, 7.2];
// const storedResults = testResults.slice(); // this constant copies the address of the testResults's array and then create another individual copy of it with `slice`.
// const storedResultsRange = storedResults.slice(6); // This won't have the last pushed item `10.21` because it works on the copied array of testResults.
// const storedResultsRange2 = storedResults.slice(0, 5); // 0: Starting index 5: End index(Stop point).
// testResults.push(10.21);
// console.log(testResults, storedResults, storedResultsRange, storedResultsRange2);
// // slice creates a copy of that array thus stored results constant doesn't have the new element which pushed for the test result
//
//
// const arr1 = [53, 99, 67, 21, 48];
// const arr2 = [5, 10, 70, 20, 27];
// arr1.push(125812851285)
//
// const concatenate = arr1.concat(arr2);
// concatenate.push(999); // new items can be added directly to the new created and united array.
// const sliceC = concatenate.slice(0, 5);
// const spliceC = concatenate.splice(5, 5, 5);
// spliceC.splice(0, 3, Number(`125125`));
// console.log(concatenate, sliceC);
// // concat method creates a new copy of an array and adds another array item to it.
// console.log(spliceC);

// const arr1 = [1, 2, 3, 5];
// const concatenate = arr1.concat([5, 50, 10]);
// console.log(`Index of: ${concatenate.indexOf(5)}`); // Starts searching from the left
// console.log(`Last Index of: ${concatenate.lastIndexOf(5)}`); // Starts searching from right
// console.log(concatenate);
//
// const personalData = [{name: `Hans`}, {name: `Ocean`}, {name: `James`}, {name: `January`}, {name: `Mahmut`}];
// console.log(personalData.indexOf({name: `Hans`})); // The result will be -1 "Undefined" because indexOF can't search an object in an object.
//
// const findMahmut = personalData.find((person, index, persons) => {
//     return person.name === `Mahmut`;
// })
// console.log(findMahmut);
//
// const findIndexOfMahmut = personalData.findIndex((person) => {
//     return person.name === `Mahmut`;
// })
// console.log(`Index of Mahmut: ${findIndexOfMahmut}`);
//
// const nums = [50, 2150, 659, 1259, 557]
//
// const isInclude = nums.includes(557); // The result will be true!
// const isInclude2 = nums.indexOf(557) !== -1; // Index of `557` is not equal to -1 = the result will be true!
// // Both are the same!
// const indexOf = nums.indexOf(557); // Result will be the number of index
// console.log(isInclude, isInclude2, indexOf);



const prices = [10.77, 20.11, 50.99, 5.54];
const tax = 0.20;
const taxAdjustedPrices = [];

// for (const price of prices) {
//     taxAdjustedPrices.push(price * (1 + tax));
// }

prices.forEach((price, idx) => {
    const resultObj = {beforeTax: price, afterTax: Number(price * (1 + tax)).toFixed(2), index: idx, taxAmount: tax};
    taxAdjustedPrices.push(resultObj);
});

console.log(taxAdjustedPrices);