// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.
// Multiple runs of shuffle may lead to different orders of elements. For instance:
//
// let arr = [1, 2, 3];
// shuffle(arr);
// // arr = [3, 2, 1]
// shuffle(arr);
// // arr = [2, 1, 3]
// shuffle(arr);
// // arr = [3, 1, 2]
// // ...
//
// All element orders should have an equal probability.
// For instance, [1,2,3] can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc,
// with equal probability of each case.

function shuffle(array) {
  let currIdx = array.length;

  while(currIdx !== 0) {
    let randomIdx = Math.floor(Math.random() * currIdx);
    currIdx--;

    [array[currIdx], array[randomIdx]] = [array[randomIdx], array[currIdx]];
  }
}

let arr = [1, 2, 3];
shuffle(arr);
console.log(arr);