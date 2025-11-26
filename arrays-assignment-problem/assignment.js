const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 999];

const filteredArr = arr.filter(numbers => numbers > 5);

console.log(filteredArr);

const mappedArr = filteredArr.map(val => ({num: val}))

console.log(mappedArr);

const reducedArr = arr.reduce((a, b) => a * b, 1);

console.log(reducedArr);

const findMax = (...nums) => {
    let currentMax = nums[0];
    let currentMin = nums[0];
    for (const num of nums) {
        if (num > currentMax) {
            currentMax = num;
        }
        if (num < currentMin) {
            currentMin = num;
        }
    }
    return [currentMin, currentMax];
}

const [first, second] = findMax(...arr);

console.log(first, second);

const idList = new Set([10, 50, 80, 70])

idList.add(first);
idList.add(second);

console.log(idList);


// TODO: WRITE A FN FOR AN ARRAY TO MAKE IT LIKE AN ARRAY(NO DUPLICATE VALUES ARE ACCEPTED)

// // First approach
// const findMaxNum = arr.reduce((firstVal, secondVal) => Math.max(firstVal, secondVal));
// console.log(findMaxNum);
//
//
// // Second Approach
// const max = arr.reduce((a,b) => a > b ? a : b);
// console.log(max);
// Third Approach
// const findMax2 = Math.max(...arr, ...arr2);
// console.log(findMax2);




