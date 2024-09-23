const db = require('./../db'); 

// Function to create a menu item
const createUserModel = (data) => {
    const sql = 'INSERT INTO user (username, password, email) VALUES (?, ?, ?)';
    const values = [data.username, data.password, data.email];

    return new Promise((resolve, reject) => {
        db.query(sql, values, (err, result) => {
            if (err) return reject(err , 'server');
            resolve({ id: result.insertId, ...data });
        });
    });
};

// Function to get all menu items
const getUserModel = () => {
    const sql = 'SELECT * FROM user';
    return new Promise((resolve, reject) => {
        db.query(sql, (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
};

module.exports = {
    createUserModel,
    getUserModel
};
