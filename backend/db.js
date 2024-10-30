/*
    Created by Kammar1006
*/

const mysql = require("mysql");
const opt = require("./../opt.json");

const db = mysql.createConnection({
    host: opt.db_host,
    user: opt.db_user,
    password: opt.db_pass,
    database: opt.db_dbname,
    port: opt.db_port,
});
    

module.exports = db;