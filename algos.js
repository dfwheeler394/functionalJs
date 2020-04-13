// 1) .foreach
// executes a provided function once for each array element

myArray.forEach(function (value) {
  console.log(value);
});

// 2) .map
// creates a new array populated with the results of calling a provided function on every element in the calling array.

let numbers = [1, 4, 9]
let roots = numbers.map(function(num) {
    return Math.sqrt(num)
})
// roots is now     [1, 2, 3]
// numbers is still [1, 4, 9]


//  3) .filter
// creates a new array with all elements that pass the test implemented by the provided function.

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]


// 4) .reduce
// executes a reducer function on each element, resulting in a single output value.

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(array1.reduce(reducer));
// expected output: 10
