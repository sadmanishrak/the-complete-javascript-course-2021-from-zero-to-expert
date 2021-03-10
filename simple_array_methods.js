let arr = ['a', 'b', 'c', 'd', 'e'];

//  Slice Method
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log(...arr);

// Splice Method - Can mutate array
// console.log(arr.splice(2));
// console.log(arr);
arr.splice(-1);
arr.splice(1, 2);
console.log(arr);

// Reverse - Can mutate array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['a', 'j', 'b', 'e', 'h'];
console.log(arr2.reverse());
console.log(arr2);

// Concat
const letters = arr.concat(arr2);
console.log(letters);
console.log(...arr, ...arr2);

// Join
console.log(letters.join(' - '));
