/**
+-------+---------------+------+-----+---------+----------------+
| Field | Type          | Null | Key | Default | Extra          |
+-------+---------------+------+-----+---------+----------------+
| 1     | int(11)       | NO   | PRI | NULL    | auto_increment |
| 2     | int(11)       | NO   |     | NULL    |                |
| 3     | varchar(255)  | NO   |     | NULL    |                |
| 4     | decimal(10,4) | YES  |     | NULL    |                |
+-------+---------------+------+-----+---------+----------------+
*/

const mysql = require('mysql');
const fs = require('fs');
const async = require('async');

const connInfo = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'dec_test',
    connectionLimit: 20,
    waitForConnections: false
};

const connPool = mysql.createPool({
    host: connInfo.host,
    port: connInfo.port,
    user: connInfo.user,
    password: connInfo.password,
    database: connInfo.database,
    connectionLimit: connInfo.connectionLimit,
    waitForConnections: connInfo.waitForConnections
});

let insertTXT = '';

for(let i = 1; i <= 5318; i++) {
    insertTXT += i + '\t' + 'insertTest' + i + '\t' + i + '\t\r\n';
}

async.waterfall([
    (callback) => {

        fs.writeFile('insertTXT.txt', insertTXT, 'utf8', (err) => {
            if (err) { callback(err); }
            console.log('async1');
            callback(null);
        });

    },
    (callback) => {

        const fileInsertQUERY 
                = 'LOAD DATA local infile \'./insertTXT.txt\' '
                + 'INTO TABLE DEC_TEST(API_TYPE, MALL_ID, FILE_SIZE) ';
        connPool.getConnection((err, connection) => {
            connection.query(fileInsertQUERY, (err, result) => {
                if (err) {
                    connection.release();
                    callback(err);
                }
                console.log('async2');
                console.log(result);
                callback(null);
            });
        });

    }
], (err, result) => {
    if (err) { 
        console.log('async result err');
        throw err;
    }
});

// ALTER TABLE tablename MODIFY columnname DECIMAL(10, 3);
