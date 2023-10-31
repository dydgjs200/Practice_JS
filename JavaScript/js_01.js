let num = 5;

// 백틱 ` 와 $를 이용해 문자열 중간에 숫자 넣기 가능
console.log(`ddd ${5} aaaa`);

// undefined
let undef;
console.log(undef);

// null
let empty = null;
console.log(empty);

// 배열 다루기

let a = ["a", "b", 3, 4, 6];
console.log(a);
a.push("bbb");
console.log(a);
a.pop();
console.log(a);
console.log(a.indexOf("b"));
a.unshift("z");
console.log(a);
a.shift();
console.log(a);
console.log(a.includes(2));

// assign#1
let color = ["red", "orange", "blue", "skyblue", "aqua", "purple", "black"];
console.log(color[2]);
color.push("white");
console.log(color);
console.log(color.indexOf("black"));
console.log(color.reverse());

// assign#2 object
let obj = {
  name: "나",
  info: "최용헌 입니다. ",
  age: 26,
  introduction: function () {
    return this.info;
  },
  ageString: function () {
    return `나이는 ${this.age} 살 입니다`;
  },
};

console.log(obj.name + " 는 " + obj.introduction() + obj.ageString());

// assign#3 typedef

console.log(typeof 1 + " isn't " + typeof "a" + " data type");
console.log(
  "Typeof 를 boolean 이나 null 에 사용하면 " +
    typeof true +
    " 결과를 얻을 수 있습니다"
);

// 성적 구하는 프로그램

let mathScore = "77";
let engScore = "88";

let avgScore = (Number(mathScore) + Number(engScore)) / 2;
console.log(avgScore);
