// const mysql = require("mysql");
// const pool = mysql.createPool({
//     connectionLimit: 10,
//     host: 'mysql',
//     user: 'root',
//     password: 'sbe03005',
//     database:'myapp'
// });
// exports.pool = pool;
const mysql = require("mysql");
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'mysql',
    user: 'root',
    password: 'sbe03005',
    database:'myapp'
});
exports.pool = pool;