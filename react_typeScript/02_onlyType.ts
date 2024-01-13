// 튜플
let drink: [string, string] = ["cola", "orange"];
drink[0] = "c";
drink[1] = "d";
drink.push("e");

console.log(drink);

// readonly : 요소 타입, 순서, 길이를 고정
let drink2: readonly [string, number] = ["ab", 12];

// enum type : 열거형
enum Auth {
  admin = 0,
  user = 1,
  guest = 2,
  pro = "abcd",
}
console.log("Auth enum > ", Auth.admin, Auth.user, Auth.guest, Auth.pro);

// 명시적 작성
let Value: any;
Value = 1;
Value = "sr";

// 예제1
let olimpic_newgame: readonly [object, boolean];
olimpic_newgame = [
  {
    name: "쇼트트랙",
    type: "혼성계주",
  },
  true,
];
console.log("olimpic", olimpic_newgame);

// interface
interface Student {
  name: string;
  isPassed: boolean;
}
const student1: Student = {
  name: "yong",
  isPassed: true,
};

// interface 상속
enum Score {
  A = "A",
  B = "B",
  C = "C",
  D = "D",
  F = "F",
}
interface BaseballClub extends Student {
  position: string;
  height: number;
  backNumber?: number; // 변수? : 자료형 => 있어도 되고 없어도 에러 발생하지 않는 데이터

  [grade: number]: Score;
}

const player: BaseballClub = {
  name: "yong",
  isPassed: true,
  position: "pitcher",
  height: 190,

  // 상속받은 값은 없어도 문제 X
  1: Score.A,
};

// 사용자 지정 type
type Gender = "female" | "male";
const gender: Gender = "female";

console.log("extend player > ", player);

// 예제2 -> 속성 설정을 선택으로 하는 키워드는 ? 임.
interface Game {
  title: string;
  price: number;
  desc?: string;
  category: string;
  platform: string;
}
let heroGame_A: Game = {
  title: "DC 언체인드",
  price: 50000,
  desc: "DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!",
  category: "액션",
  platform: "모바일",
};
let heroGame_B: Game = {
  title: "MARVEL 퓨처파이트",
  price: 65000,
  category: "롤플레잉",
  platform: "모바일",
};

console.log("ex2", heroGame_A, heroGame_B);

// 교차 타입 : 두 개 이상의 타입을 합침
interface Toy {
  name: string;
  price: number;
}
interface Car {
  name: string;
  price: number;
  color: string;
}
type ToyCar = Toy & Car;
const toycar: ToyCar = {
  name: "dd",
  price: 400,
  color: "red",
};
type Person = {
  name: string;
  age: number;
  hobby: string[];
  gender: Gender;
};
