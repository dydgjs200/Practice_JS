// TODO : visitor 모델 정의
// 테이블 구조 정의
// 시퀄라이즈 모델 + mysql 테이블 연결

const Visitor = (Sequelize, DataTypes) => {
  // Sequelize = models/index.js의 sequelize(소문자임)
  // DataTypes = models/index.js의 Sequelize(대문자)

  const model = Sequelize.define(
    "visitor", //param1: 모델 이름 설정
    {
      // id int AI PK(DataType으로 타입설정)
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        // name VARCHAR(10) not null
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      comment: {
        type: DataTypes.TEXT("medium"),
      },
    }, //param2 컬럼 정의 완료
    {
      tableName: "visitor2", //실제 DB 테이블 이름
      freezeTableName: true, //첫번째 인자로 넘겨준 모델 이름을 그대로 테이블 이름으로 고정
      // 시퀄라이즈는 기본적으로 테이블 이름을 모델 + s로 설정
      // charset, collate 값이 있는데, 이미 우리는 db 정의할 때 한글 인코딩 가능하도록 해서 설정 필요 없음
      timestamps: false, //데이터가 추가되고 수정된 시간을 자동으로 칼럼으로 만들어서 기록함
    } //param3 모델 옵션 정의 완료
  );
};

module.exports = Visitor;
