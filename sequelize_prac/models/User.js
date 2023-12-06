const UserTable = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      email: {
        type: DataTypes.STRING(100),
        comment: "이메일",
      },
      password: {
        type: DataTypes.STRING(10),
        comment: "비밀번호",
      },
    },
    {
      tableName: "Prac_User",
    }
  );

  return User;
};

module.exports = UserTable;
