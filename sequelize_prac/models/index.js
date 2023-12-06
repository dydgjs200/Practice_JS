"use strict";

const Sequelize = require("sequelize");
const config = require(__dirname + "/../config/config.json")["development"];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

const User = require("./User")(sequelize, Sequelize);
const UserInfo = require("./UserInfo")(sequelize, Sequelize);

// 1:n 관계(유져는 userInfo를 여러개 갖고 있다는 설정..)
// user테이블의 id값을 userinfo에 user_id로 추가하겠따.
User.hasMany(UserInfo, {
  foreignKey: "user_id",
  sourceKey: "id",
});
UserInfo.belongsTo(User, {
  foreignKey: "user_id",
  sourceKey: "id",
});

db.User = User;
db.UserInfo = UserInfo;
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
