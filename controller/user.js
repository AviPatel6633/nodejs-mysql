const userModel = require('../model/userModel');
const bcrypt = require('bcrypt');

const postUser = async (req, res) => {
    try {
        const data = req.body;
        const response = await userModel.createUserModel(data);
        res.status(201).json(response);
    } catch (err) {
        console.error('Error saving user:', err.message);
        res.status(500).json({ error: 'Internal Server Error', details: err.message });
    }
};

const getUser = async (req, res) => {
    try {
        const users = await userModel.getUserModel();
        res.status(200).json(users);
    } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const loginUser = async (req, res) => {
    // The login logic is handled by Passport, but you can send a response here if needed
    res.status(200).json({ message: 'Logged in successfully', user: req.user });
};

const logoutUser = (req, res) => {
    req.logout((err) => {
        if (err) return next(err);
        res.status(200).json({ message: 'Logged out successfully' });
    });
};

module.exports = {
    postUser,
    getUser,
    loginUser,
    logoutUser
};
