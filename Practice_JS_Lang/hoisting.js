// console.log(a)
// let a = 1       // TDZ

console.log(b);
var b = 2; // hoisting

hello(); //hoisting

function hello() {
  console.log("hello");
}

let cal = function (num1, num2) {
  return num1 + num2;
};

let cal2 = (num1, num2) => {
  return num1 + num2;
};

console.log(cal(1, 2), cal2(1, 2));

const man = {
  name: "a",
  age: 16,
};
console.log(man.name, man["age"]);
