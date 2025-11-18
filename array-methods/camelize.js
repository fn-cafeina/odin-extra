function camelize(string) {
  return string
    .split("-")
    .map((el, idx) => (idx > 0 ? el.charAt(0).toUpperCase() + el.slice(1) : el))
    .join("");
}

console.log(camelize("background-color"));
