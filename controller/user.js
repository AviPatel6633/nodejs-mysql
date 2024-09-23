const userModel = require('../model/userModel'); 

// POST API to create a menu item
const postUser = async (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        const response = await userModel.createUserModel(data);
        console.log('Data saved');
        res.status(200).json(response);
    } catch (err) {
        console.error('Error saving menu item:', err.message);
        res.status(500).json({ error: 'Internal Server Error', details: err.message  });
    }
};

// GET API to retrieve all menu items
const getUser = async (req, res) => {
    try {
        const menuItems = await userModel.getUserModel();
        res.status(200).json(menuItems);
    } catch (err) {
        console.error('Error fetching menu items:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    postUser,
    getUser
};