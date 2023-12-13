// bcrypt : 비밀번호 암호화 -> 강력한 보안 -> 해싱이 느림..(blowfish 암호 기반)

const bcrypt = require("bcrypt");
const originalPW = "1234";
const saltRounds = 10; //솔트 라운드

// 비밀번호 해싱함수
function hashPW(password) {
  return bcrypt.hashSync(password, saltRounds); //saltRounds를 통해 salt를 자동으로 생성
}

// 원본 비밀번호와 해시된 비밀번호가 일치하는지 확인
function comparePW(password, hashedPW) {
  return bcrypt.compareSync(password, hashedPW);
}

const hashedPW = hashPW(originalPW);
console.log(hashedPW);
const isMatch = comparePW(originalPW, hashedPW);
console.log(isMatch);
const isMatch2 = comparePW("12345!", hashedPW);
console.log(isMatch2);
