const Sequelize = require("sequelize");
const config = require(__dirname + "/../config/config.json")["development"]; //사용할 db 연동 -> config.json의 키 값

console.log(config);

const db = {};
// 시퀄라이즈 객체 선언 시 매개변수로 다음 정보를 받음
// db에 접근할 때 시퀄라이즈 orm 사용을 위해 선언

// 전체 정보는 여기있고, models에는 다른 테이블을 만든다고 생각
// sequelize는 테이블의 데이터 구조
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Visitor에서 함수를 가져와 바로 실행함 -> models/Visitor.js에서 정의한 모델이 db.Visitor에 들어감.
// db = {sequelize:sequelize,  Sequelize:Sequelize, Visitor : ~}
// 즉, 설정한 Visitor 테이블을 연동
db.Visitor = require("./Visitor")(sequelize, Sequelize);

// db 변수 내보냄 -> 시퀄라이즈 객체 만들고 모듈로 내보내서 다른 파일에서 모두 같은 객체를 사용하게 함
// 이렇게 만든 애는 app.js에서 사용함
module.exports = db;
