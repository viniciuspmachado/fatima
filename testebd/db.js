//db.js




async function selectBatismo(){
    const mysql = require('serverless-mysql')({
        config: {
            host : '127.0.0.1',
            port : 3306,
            user : 'root',
            password : 'F3r5a5d0',
            database : 'fatima'
        }
      })
    let results = await mysql.query('SELECT * FROM batismo;');
    mysql.end();
    return results;
}

module.exports = {selectBatismo}


















/* async function connect(){
    if (global.connection && global.connection.state !=='disconnected')
        return global.connection;
    
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection({
        host : '127.0.0.1',
        port : 3306,
        user : 'root',
        password : 'F3r5a5d0',
        database : 'fatima'
    });
    console.log('Conectou ao banco');
    global.connection = connection;
    return connection;
}


async function selectBatismo(){
    const conn = await connect();
    return await conn.query('SELECT * FROM batismo;');
}

module.exports = {selectBatismo} */

