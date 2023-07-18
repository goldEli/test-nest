const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "guang",
  database: "practice",
});

// connection.query("SELECT * FROM customers", function (err, results, fields) {
//   console.log(results);
//   console.log(fields.map((item) => item.name));
// });
connection.query(
    'SELECT * FROM customers WHERE name LIKE ?',
    ['李%'],
    function(err, results, fields) {
        console.log(results);
        console.log(fields.map(item => item.name)); 
    }
);

