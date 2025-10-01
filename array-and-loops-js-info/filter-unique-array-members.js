// Let arr be an array.
// Create a function unique(arr) that should return an array with unique items of arr.
//
// For instance:
// function unique(arr) {
//   /* your code */
// }
// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
// alert( unique(strings) ); // Hare, Krishna, :-O

function unique(arr) {
  const uniqueArray = [];

  for (const element of arr) {
    if(!uniqueArray.includes(element)) {
      uniqueArray.push(element);
    }
  }

  return uniqueArray;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];
console.log(unique(strings));