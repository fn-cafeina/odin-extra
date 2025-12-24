/*
  Write the function camelize(str) that changes dash-separated words like “my-short-string”
  into camel-cased “myShortString”.

  That is: removes all dashes, each word after dash becomes uppercased.

  Examples:

  camelize("background-color") == 'backgroundColor';
  camelize("list-style-image") == 'listStyleImage';
  camelize("-webkit-transition") == 'WebkitTransition';

  P.S. Hint: use split to split the string into an array, transform it and join back.
*/

function camelize(str) {
  return str
    .split("-")
    .map((el, idx) => (idx > 0 ? el[0].toUpperCase() + el.slice(1) : el))
    .join("");
}

const test1 = camelize("background-color");
const test2 = camelize("list-style-image");
const test3 = camelize("-webkit-transition");

console.log(test1);
console.log(test2);
console.log(test3);
