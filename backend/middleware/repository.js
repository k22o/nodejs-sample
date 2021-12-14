const mysql = require('mysql');
const logger = require('../middleware/logger').console;
const util = require('util');
const connectionConfig = require('../config/connectionConfig');

async function settings() {
    const pool = mysql.createPool({
        connectionLimit: connectionConfig.connectionLimit,
        host: connectionConfig.dbHost,
        user: connectionConfig.dbUser,
        password: connectionConfig.dbPassword,
        database: connectionConfig.databaseName    
    })

    // Mysqlはasync-awaitをちゃんとサポートできていないが
    // この1行を入れると機能するようになる
    pool.query = util.promisify(pool.query);
    return pool;    
}


exports.find = async function find() {
    logger.info("find-method");
    const pool = await settings();
    const result = await pool.query(
        'SELECT * FROM members'
    );
    pool.end();
    return result;
}

exports.get = async function get(id) {
    logger.info("get-method");
    const pool = await settings();
    const result = await pool.query(
        'SELECT * FROM members where id = ?', [id]
    );
    pool.end();
    return result;
}

exports.add = async function add(memberObject) {
    logger.info("add-method");

    if (memberObject == null || memberObject.name == null) {
        return null;
    }

    const pool = await settings();
    const result = await pool.query(
        'INSERT INTO members(name) VALUES(?)', [memberObject.name]
    );
    pool.end();
    return result;
}

exports.update = async function update(id, params) {
    logger.info("update-method");

    if (id == null || params.name == null) {
        return null;
    }

    const pool = await settings();
    const getResult = await pool.query(
        'SELECT * FROM members where id = ?', [id]
    );
    
    let result;
    if (getResult == null) {
        result = null;
    } else {
        result = await pool.query(
            'UPDATE members SET name = ? WHERE id = ?', [params.name, id]
        );    
    }
    pool.end();
    return result;
}

exports.remove = async function remove(id) {
    logger.info("remove-method");

    if (id == null) {
        return null;
    }

    const pool = await settings();
    const getResult = await pool.query(
        'SELECT * FROM members where id = ?', [id]
    );
    
    let result;
    if (getResult == null) {
        result = null;
    } else {
        result = await pool.query(
            'DELETE FROM members WHERE id = ?', [id]
        );    
    }
    pool.end();
    return result;
}
