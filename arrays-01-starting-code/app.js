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


// const prices = [10.77, 20.11, 50.99, 5.54];
// const prices2 = [10.77, 20.11, 50.99, 5.54];
// const tax = Math.random();
// const taxAdjustedPrices = [];
// const taxAdjustedPrices2 = [];
// let idx = 0;
//
// for (const price of prices) {
//     const calculation = {
//         index: idx,
//         price: price,
//         tax: tax,
//         taxedPrice: price * (1 + tax)
//     }
//     idx++;
//     taxAdjustedPrices.push(calculation);
// }
//
// prices2.forEach((price, idx) => {
//     const resultObj = {
//         index: idx,
//         price: price,
//         tax: tax,
//         taxedPrice: price * (1 + tax)
//     }
//     taxAdjustedPrices2.push(resultObj);
// });
//
//
// console.log(taxAdjustedPrices);
// console.log(taxAdjustedPrices2);


// const prices = [10.77, 20.11, 50.99, 5.54];
// const tax = Math.random();
//
// const taxedPrices = prices.map((price, idx) => {
//     return {
//         index: idx,
//         price: price,
//         tax: tax,
//         taxedPrice: price * (1 + tax)
//     };
// });
//
// console.log(prices ,taxedPrices);

//
// function transformToObjects (numberArray) {
//     return numberArray.map(number => {
//         return {val: number};
//     })
// }
//
// console.log(transformToObjects([1,2,3]));


// const sortIt = prices.sort((a, b) => {
//     if (a > b) return 1;
//     else if (b > b) return -1;
//     else return -1;
// });
//
// console.log(sortIt);
// console.log(sortIt.reverse());


//
// const filterIt = prices.filter(price => price > 10);

// console.log(filterIt);


// const summing = () => {
//     for (const price of prices) {
//         sum += price;
//     }
//     return sum;
// }
// console.log(summing(prices));

// let sum = 0;
//
//
// prices.forEach(price => sum += price)
//
//
// console.log(sum.toFixed(2));


// const sum = prices.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
//
// const sum2 = prices.reduce((prev, current) => {
//     return prev + current;
// })
//
//
// console.log(sum.toFixed(2));
// console.log(sum2.toFixed(2));


//////////////////////////////////////////////////////// USE CASE OF MAP AND REDUCE METHODS ////////////////////////////////////////////////////////////

// const originalArray = [{price: 10.99}, {price: 20.11}, {price: 30.99}, {price: 50.99}];
//
// const transformedArray = originalArray.map((obj) => {
//     return obj.price;
// });
//
// const sum = transformedArray.reduce((prevValue, currentValue) => {
//     return prevValue + currentValue;
// });
//
// console.log(sum);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// const prices = [10.77, 20.11, 50.99, 5.54];
//
// const mappedPrices = prices.map((nums) => {
//    return {values: nums};
// });
//
// const arr = [{values: 211.88}, {values: 671.88}, {values: 378.88}, {values: 985.99}, {values: 767.99}];
//
// const arr2 = arr.concat(mappedPrices);
//
// const mappedArr = arr2.map((val) => {
//     return val.values;
// });
//
// console.log(mappedArr);
//
// const reducedArr = mappedArr.reduce((prevVal, currVal) => {
//     return prevVal + currVal;
// });
//
// console.log(reducedArr);
//
// const toLocale = prices.toLocaleString(`en-US`, {
//     style: 'currency',
//     currency: 'USD',
// });
//
// console.log(toLocale);
//


// const arr5 =[{n:1}, {n:2}, {n:3}, {n:4}, {n:5}, {n:6}, {n:7}, {n:8}, {n:9}, {n:10}];
// const arrCopy = [...arr5];
// // arr5[0].n = 20;
// console.log(arrCopy);
// console.log(arr5);
//
// const arr1 = [1,2,3,4,5];
// const arr2 = [10,9,8,7,6];
//
// const united = [...arr1, ...arr2.toSorted((a,b) => a - b), ...arr5.map(n => n.n)];
//
// console.log(...arr1, ...arr2);
// console.log(united);


///////////////////////////////////////////// USE CASE OF CONCAT AND SPREAD OPERATOR FOR COPYING ARRAYS ////////////////////////////////////////////////////////////

// const arr5 =[{n:1}, {n:2}, {n:3}, {n:4}, {n:5}, {n:6}, {n:7}, {n:8}, {n:9}, {n:10}];
// const arrCopy = [...arr5];
// // arr5[0].n = 20;
// console.log(arrCopy);
// console.log(arr5);
//
// const arr1 = [1,2,3,4,5];
// const arr2 = [10,9,8,7,6];
//
// const united = [...arr1, ...arr2.toSorted((a,b) => a - b), ...arr5.map(n => n.n)];
//
// console.log(...arr1, ...arr2);
// console.log(united);


// const arr =[{n:1}, {n:2}, {n:3}, {n:4}, {n:5}, {n:6}, {n:7}, {n:8}, {n:9}, {n:10}];
// const arr2 =[{n:11}, {n:12}, {n:13}, {n:14}, {n:15}, {n:16}, {n:17}, {n:18}, {n:19}, {n:20}];
// arr[0].n = 55;
// const concat = arr.concat(arr2).map(num => num.n);
// const spreadOp = [...arr].map(num => num.n);
// const spreadOpV2 = [...arr, ...arr2].map(num => num.n);
//
// console.log(concat);
// console.log(spreadOp);
// console.log(spreadOpV2);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////// USE CASE OF FACTORIAL FUNCTIONS ////////////////////////////////////////////////////////////////////////////


// const factorial = n => n <= 1 ? 1 : factorial(n - 1) * n;
//
// console.log(factorial(4));


/*/
1x2 = 2
2x3 = 6
6x4 = 24
 */

// const factorialLoop = n => {
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result *= i
//     }
//     return result;
// }
//
// console.log(factorialLoop(5));


// function factorial2(n) {
//     console.log("call factorial(", n, ")");
//
//     if (n <= 1) {
//         console.log("↳ n <= 1, return 1");
//         return 1;
//     } else {
//         console.log("↳ need factorial(", n - 1, ") first");
//         const smallerResult = factorial2(n - 1);
//         console.log("↳ got factorial(", n - 1, ") =", smallerResult);
//         const result = smallerResult * n;
//         console.log("↳ return", smallerResult, "*", n, "=", result);
//         return result;
//     }
// }
//
// console.log("FINAL:", factorial2(6));


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////// LITTLE PRACTICE ////////////////////////////////////////////////////////////////////////////////////////////


// const multiDimensionalArr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ];
//
// const selectIdx = multiDimensionalArr[2][1].valueOf(); // 8
// const selectIdx2 = multiDimensionalArr[2][1] = 20 // 20
// console.log(selectIdx);
// console.log(selectIdx2);
//
// const originalArray= [{val: 20}, {val: 30}, {val: 700}, {val: 60}, {val: 90}, {val: 100}, {val: 1000}, {val: 2000}];
//
// const mappedArr = originalArray.map(value => value.val);
//
// const reduce = originalArray.reduce((sumVal, currentVal) => sumVal + currentVal.val, 0);
//
// const united = originalArray.map(value => value.val).reduce((sumVal, currentVal) => sumVal + currentVal, 0); // Single line MAP and REDUCE FN Usage
//
// console.log(reduce);
// console.log(mappedArr);
// console.log(originalArray);
// console.log(united);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////// USE CASE OF SPLIT AND JOIN //////////////////////////////////////////////////////////////////////////////////


// const data = `333.33;99.99;2025`;
//
// const split = data.split(';'); // Only split // Split does extract one single element and multiply it // Split only works with strings
//
// split[2] = +split[2]; // Convert the specific index to Number
//
// const transformedData = data.split(`;`).map(Number); // Split and convert all items to Number
//
// console.log(data);
// console.log(split);
// console.log(transformedData);
//
// const nameFragments = [`I`, `Love`, `JS`];
//
// const join = nameFragments.join(`--  `); // Join adds the separator input between each element // Join only works with Arrays!
// console.log(join);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////// USE CASE OF SPREAD OPERATOR //////////////////////////////////////////////////////////////////////////////////


// const arr = [85, 19, 75, 32];
//
// const copyArr = [...arr];
//
// console.log(Math.min(arr)); // This will throw NaN
// console.log(Math.min(copyArr)); // This will throw NaN
// console.log(Math.min(...arr)); // But this will work
// console.log(Math.max(...arr)); // But this will work
//
// console.log(arr ,copyArr);


// const valArr = [{name: `Raven`, age: 20}, {name: `John`, age: 30}, {name: `January`, age: 40}];
// const copyValArr = [...valArr]; // This creates a shallow copy of the array and create a unique object (different reference) with it's current elements, objects (snapshot at the time)
// valArr.push({name: `Ocean`, age: 180}); // copyValArr won't be affected because both arrays are different (different references)
// valArr[0].name = 'Mr.Bean'; // This modifies a property of the shared object, so both arrays reflect the change || The array elements in valArr and copyValArr hold the same object references.
//
// console.log(valArr, copyValArr);


// const valArr = [{name: `Raven`, age: 20}, {name: `John`, age: 30}, {name: `January`, age: 40}];
// const copyValArr = [...valArr];
//
// valArr.push({name: `Ocean`, age: 90});
//
// console.log(valArr, copyValArr);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////// USE CASE OF ARRAY DESTRUCTURING //////////////////////////////////////////////////////////////////////////////////

// const data = [`Jn`, `Ahx`, `Kel`, `Syn`, `Xn`, `Yn`, 50, 70, {name: `Raven`}, [999.99]];
//
// const [First, Second, Third, ...restOfThem] = data;
//
// console.log(First, Second, Third, restOfThem);
//
// const data2 = [`Jn`, `Ahx`, `Kel`, `Syn`, `Xn`, `Yn`, 50, 70, {name: `Raven`}, [999.99]];
//
// const [...allOfThem] = data2;
//
// console.log(allOfThem);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////