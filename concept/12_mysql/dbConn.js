'use strict';

const mysql     = require('mysql');
const connInfo  = require('private/private').dbConnInfo;

class DBConn {

    static createConn() {
        this.conn = mysql.createConnection({
            host: connInfo.host,
            port: connInfo.port,
            user: connInfo.user,
            password: connInfo.password,
            database: connInfo.database
        });
        return this;
    }

    static createPool() {
        this.pool = mysql.createPool({
            host: connInfo.host,
            port: connInfo.port,
            user: connInfo.user,
            password: connInfo.password,
            database: connInfo.database,
            connectionLimit: connInfo.connectionLimit,
            waitForConnections: connInfo.waitForConnections
        });
        return this;
    }

    static getConn() {
        return this.conn;
    }

    static getPool() {
        return this.pool;
    }

}

module.exports = {

    mysql: {
        createConn  : DBConn.createConn,
        createPool  : DBConn.createPool,
        getConn     : DBConn.getConn,
        getPool     : DBConn.getPool
    }

};
