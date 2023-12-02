const mysql = require("mysql2");

const connect = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "kdt",
});

exports.ReadALLRegister = (cb) => {
  const sql = `SELECT * FROM user`;

  connect.query(sql, (err, rows) => {
    if (err) throw err;

    console.log("Read All DB > ", rows);
    cb(rows);
  });
};

exports.CreateRegister = (data, cb) => {
  const sql = `INSERT INTO user (id, userid, name, pw) VALUES (?, ?, ?, ?)`;
  const Values = [data.id, data.userid, data.name, data.pw];

  connect.query(sql, Values, (err, rows) => {
    if (err) throw err;

    cb(rows.insertId);
  });
};

exports.DeleteRegister = (data, cb) => {
  const sql = "DELETE FROM user WHERE id = ?";
  connect.query(sql, [id], (err, rows) => {
    if (err) throw err;
    cb(`${data.id} data 삭제완료`);
  });
};
