function mult(a, b) {
  return a * b;
}

function sum(a, b) {
  return a + b;
}

function calc(a, b, callback) {
  return callback(a, b);
}

console.log(calc(4, 5, sum));
