const db = require('./../db'); 

// Function to create a menu item
const createMenuItemModel = (data) => {
    const sql = 'INSERT INTO menu (name, taste, price) VALUES (?, ?, ?)';
    const values = [data.name, data.taste, data.price];

    return new Promise((resolve, reject) => {
        db.query(sql, values, (err, result) => {
            if (err) return reject(err , 'server');
            resolve({ id: result.insertId, ...data });
        });
    });
};

// Function to get all menu items
const getAllMenuItemsModel = () => {
    const sql = 'SELECT * FROM menu';
    return new Promise((resolve, reject) => {
        db.query(sql, (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
};

// Function to get menu items by taste
const getMenuItemsByTasteModel = (taste) => {
    const sql = 'SELECT * FROM menu WHERE taste = ?';
    return new Promise((resolve, reject) => {
        db.query(sql, [taste], (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
};

// Function to update a menu item by id
const updateMenuItemByIdModel = (menuId, updatedData) => {
    const sql = 'UPDATE menu SET name = ?, taste = ?, price = ? WHERE id = ?';
    const values = [updatedData.name, updatedData.taste, updatedData.price, menuId];

    return new Promise((resolve, reject) => {
        db.query(sql, values, (err, result) => {
            if (err) return reject(err);
            if (result.affectedRows === 0) return reject(new Error('Menu not found'));
            resolve({ message: 'Menu updated successfully' });
        });
    });
};

// Function to delete a menu item by id
const deleteMenuItemByIdModel = (menuId) => {
    const sql = 'DELETE FROM menu WHERE id = ?';
    return new Promise((resolve, reject) => {
        db.query(sql, [menuId], (err, result) => {
            if (err) return reject(err);
            if (result.affectedRows === 0) return reject(new Error('Menu not found'));
            resolve({ message: 'Menu deleted successfully' });
        });
    });
};

module.exports = {
    createMenuItemModel,
    getAllMenuItemsModel,
    getMenuItemsByTasteModel,
    updateMenuItemByIdModel,
    deleteMenuItemByIdModel
};
