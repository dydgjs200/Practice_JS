const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "velog_prac_User",
    {
      id: {
        type: DataTypes.STRING(10),
        allowNull: false,
        primaryKey: true,
      },
      password: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      comment: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      AccessToken: {
        type: DataTypes.STRING(255),
      },
    },
    {
      freezeTableName: true,
    }
  );

  return User;
};

module.exports = UserModel;
