const UserInfoTable = (sequelize, DataTypes) => {
  const UserInfo = sequelize.define(
    "userInfo",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      permission: {
        type: DataTypes.STRING(45),
        comment: "유져 권한",
      },
      block: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
        comment: "계정 블락 유무",
      },
    },
    {
      tableName: "Prac_UserInfo",
    }
  );

  return UserInfo;
};

module.exports = UserInfoTable;
