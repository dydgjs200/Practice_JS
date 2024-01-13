// 타입 지정
let a: number = 1;
a = 5;
console.log(a);

let b: string = "str";
let c: boolean = true;
let d: null = null;
let e: undefined;

// 타입 추론
let aa = 5;
let bb = "hello";
let cc = false;
let dd = null;
let ee = undefined;

// array, obj
let numArr: number[] = [1, 2, 3, 4];
let strArr: string[] = ["a", "b", "c"];
let strArr2: Array<string> = ["a", "b"];

// (괄호 안의 타입 중 하나가 들어갈 수 있게 함)
let arr1: (number | string | number[])[] = [1, "hi", [1, 2, 3, 4]];
let bdnjc: (number | string | boolean)[] = ["a", "a", true];
console.log(bdnjc);

// 모든 타입 가능하게 하기 -> any
let arr2: any[] = [1, "str", null, numArr, undefined];
console.log(arr2);

// 객체
let obj: object = {
  name: "yong",
  age: 26,
};
