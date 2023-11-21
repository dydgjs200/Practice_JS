const add = (a, b) => {
  return a + b;
};
const sub = (a, b) => {
  return a > b ? a - b : b - a;
};

const PI = 3.14;
const E = 2.718;

// module.exports = {
//   add: add,
//   sub,
//   PI,
//   E,
// };

// json에 type module 추가
export { add, sub };
