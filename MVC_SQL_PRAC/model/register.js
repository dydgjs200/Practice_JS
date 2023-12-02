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

exports.DeleteRegister = (userid, cb) => {
  const sql = "DELETE FROM user WHERE userid = ?";
  connect.query(sql, [userid], (err, rows) => {
    if (err) throw err;
    cb(rows);
  });
};
