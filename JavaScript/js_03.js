let str = " happy str  ";

console.log(str.length);
console.log(str.trim() + str.trim().length);
console.log(str.toUpperCase());
console.log(str.replace("p", "a"));
console.log(str.repeat(3));

console.log(str.slice(3));
console.log(str.split(""));
console.log(str.split(" "));

// 배열 다루기
let arr = ["a", "bdcdeq", "안녕하세요"];

console.log(arr.join(""));

let s = "dncnjrqncz";
let sar = s.split("");
console.log(sar);
sar = s.replace("n", "a").toUpperCase();
console.log(sar);

// for 문
let array = ["a", "b", "c", "D"];

for (let a of array) {
  console.log(a);
}
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
array.forEach((fruits) => {
  console.log(fruits);
});

let words = ["abacd", "Babmbmfc", "qgirz", "dmv", "dmzormy", "AZVZBRRWW"];
let res = words.filter((word) => word.length && word.charAt(3) == "a" > 6);
console.log(res);

//assign#1
let num = [];
let sum_number = [0, 0, 0];

for (let i = 1; i <= 100; i++) {
  num.push(i);
  sum_number[0] += i;
}
for (let n of num) {
  sum_number[1] += n;
}
num.forEach((n) => {
  sum_number[2] += n;
});
console.log(sum_number);

// assign#2
let fruits1 = [
  "사과",
  "딸기",
  "파인애플",
  "수박",
  "참외",
  "오렌지",
  "자두",
  "망고",
];
let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];
let same = [];
let diff = [];
same = fruits1.filter((i) => fruits2.includes(i));
console.log(same);
diff = fruits1.filter((i) => !fruits2.includes(i));
console.log(diff);
