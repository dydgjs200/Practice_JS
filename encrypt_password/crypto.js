const crypto = require("crypto");

// 1. 단방향 암호화 -> createHash(algorithm)
// password를 sha512 방식으로 암호화, base64 방식으로 인코딩
const createHasedPw = (password) => {
  return crypto.createHash("sha512").update(password).digest("base64");
};

console.log(createHasedPw("1234")); //같은 비밀번호 값 + 같은 알고리즘 = 같은 암호화

// 2. 단방향 암호화 -> pbkdf2Sync(비밀번호, salt, 반복횟수, 키의 길이, 알고리즘) -> 비밀번호 기반 키 도출함수
// salt는 사용할때 마다 값이 바뀜
// 흐름 : 임의 salt 값 생성 -> salt + 비밀번호로 해시 생성 -> salt와 해시를 리턴
function saltAndHashPw(password) {
  // salt 생성
  const salt = crypto.randomBytes(16).toString("base64");
  const iteration = 100;
  const keylen = 64; //생성할 키 길이
  const algorithm = "sha512";

  // hash 생성
  const hash = crypto
    .pbkdf2Sync(password, salt, iteration, keylen, algorithm)
    .toString("base64");

  return { salt, hash };
}

// 암호 비교함수 -> 제공된 비번을 이용해 해시를 만들고 원래 비번을 비교함
function checkPW(inputPW, savedSalt, savedHash) {
  const iteration = 100;
  const keylen = 64; //생성할 키 길이
  const algorithm = "sha512";

  const hash = crypto
    .pbkdf2Sync(inputPW, savedSalt, iteration, keylen, algorithm)
    .toString("base64");

  return savedHash === hash; //equals = true 반환
}

// 사용 예시 -> 비밀번호가 같다면 hash 값도 같음
const password = "1234!";
const { salt, hash } = saltAndHashPw(password);
console.log(`salt > ${salt} , hash > ${hash}`);

const inputPW = "1234!";
const isMatch = checkPW(inputPW, salt, hash);
console.log(isMatch);
