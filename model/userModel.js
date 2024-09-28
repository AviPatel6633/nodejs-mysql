const db = require('./../db'); 
const bcrypt = require('bcrypt');

const createUserModel = async (data) => {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const sql = 'INSERT INTO user (username, password, email) VALUES (?, ?, ?)';
    const values = [data.username, hashedPassword, data.email];

    return new Promise((resolve, reject) => {
        db.query(sql, values, (err, result) => {
            if (err) return reject(err);
            resolve({ id: result.insertId, username: data.username, email: data.email });
        });
    });
};

const getUserModel = () => {
    const sql = 'SELECT * FROM user';
    return new Promise((resolve, reject) => {
        db.query(sql, (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
};

const findUserByUsername = (username) => {
    const sql = 'SELECT * FROM user WHERE username = ?';
    return new Promise((resolve, reject) => {
        db.query(sql, [username], (err, result) => {
            if (err) return reject(err);
            resolve(result[0]); // Return the first user found
        });
    });
};



module.exports = {
    createUserModel,
    getUserModel,
    findUserByUsername
};
