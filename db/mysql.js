require('dotenv').config()
const mysql = require("mysql2")



const options = {
    host: process.env.MYSQL_HOST, // host for connection -> default for development localhost
    port: process.env.MYSQL_PORT, // default port for mysql is 3306
    database: 'test', // database from which we want to connect out node application
    user: process.env.MYSQL_USER, // username of the mysql connection
    password: process.env.MYSQL_PASSWORD, // password of the mysql connection
}

const connection = mysql.createConnection(options);

module.exports = connection