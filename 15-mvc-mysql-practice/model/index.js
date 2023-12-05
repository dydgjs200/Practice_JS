const Sequelize = require("sequelize");
const config = require(__dirname + "/../config/config.json")["development"];

console.log(config);

const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// 연결 테스트
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// 유저 테이블 만들기
db.User = require("./User")(sequelize, Sequelize);

module.exports = db;
