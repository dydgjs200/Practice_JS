// ex. 편의점에서 들어가서 음료수를 사고 나오는 상황
// function goMart() {
//   console.log("마트에 와서 어떤 음료를 살지 고민중..");
// }

// function pickDrink(callback) {
//   // 3초 고민 (3초 후 실행)
//   setTimeout(() => {
//     console.log("고민 끝!");
//     product = "콜라";
//     price = 1800;
//     callback(product, price);
//   }, 3000);
// }

// function pay(product, price) {
//   console.log(`상품명 : ${product}, 가격 : ${price}`);
// }

// let product, price;
// goMart();
// pickDrink(pay);

////////////////////promise 객체 생성
function promise1(flag) {
  return new Promise(function (resolve, reject) {
    if (flag) {
      resolve("성공");
    } else {
      reject("fail");
    }
  });
}

// promise 사용하기
promise1(true)
  .then((result) => {
    console.log("result", result);
  })
  .catch((error) => {
    console.log("error : ", error);
  });

/////////////// promise 예제
// function goMart() {
//   console.log("마트에 와서 어떤 음료를 살지 고민중..");
// }

// function pickDrink() {
//   return new Promise(function (resolve, reject) {
//     // 3초 고민 (3초 후 실행)
//     setTimeout(() => {
//       console.log("고민 끝!");
//       product = "콜라";
//       price = 2600;

//       const money = 2000;

//       if (price > money) {
//         reject();
//       } else {
//         resolve();
//       }
//     }, 3000);
//   });
// }

// function pay(product, price) {
//   console.log(`상품명 : ${product}, 가격 : ${price}`);
// }

// let product, price;
// goMart();
// pickDrink()
//   .then(() => {
//     pay(product, price);
//   })
//   .catch(() => {
//     console.log("돈이 부족");
//   });

console.log("---------------------------");
//////////////////// Promise Chaining -> 우선순위 연산자 문제
// function add(a, b) {
//   return new Promise(function (resolve, reject) {
//     resolve(a + b);
//   });
// }
// function sub(a, b) {
//   return new Promise(function (resolve, reject) {
//     let res = Math.abs(a - b);
//     resolve(res);
//   });
// }
// function mul(a, b) {
//   return new Promise(function (resolve, reject) {
//     resolve(a * b);
//   });
// }

// add(4, 3)
//   .then(function (result) {
//     console.log(result);
//     return mul(result, 2);
//   })
//   .then(function (result) {
//     console.log(result);
//     return sub(result, 1);
//   })
//   .then(function (result) {
//     console.log(result);
//   });

console.log("------------------");
/////////////// 실습 1
// function call(name) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       console.log(name);
//       resolve(name);
//     }, 1000);
//   });
// }
// function back() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       console.log("back");
//       resolve("back");
//     }, 1000);
//   });
// }
// function hell() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       resolve("callback hell");
//     }, 1000);
//   });
// }

// call("kim").then(function (result) {
//   console.log(`${result} 반가워`);
// });
// back().then(function (result) {
//   console.log(`${result} 을 실행했구나`);
// });
// hell().then(function (result) {
//   console.log(`여기는 ${result}`);
// });

console.log("----------------------");
////////// async(함수 앞에 붙임), await 실습 2

function call(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}
function back() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("back");
      resolve("back");
    }, 1000);
  });
}
function hell() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("callback hell");
    }, 1000);
  });
}

async function exec() {
  console.log((await call("kim")) + " 반가워");
  console.log((await back()) + " 을 실행했구나");
  console.log("여기는 " + (await hell()));
}

exec();
