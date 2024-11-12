const userModel = require('../model/userModel');
const bcrypt = require('bcrypt');
const { jwtAuthMiddleware, generateToken } = require('./../helpers/jwt')

const postUser = async (req, res) => {
    try {
        const data = req.body;
        const response = await userModel.createUserModel(data);

        // create payload
        const payload = {
            id: response.id,
            username: response.username
        }
        // crete token 
        const token = generateToken(payload)
        // console.log(token, "token");

        res.status(201).json({ response: response, token: token });
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
    try {
        const { username, password } = req.body;
        const user = await userModel.findUserByUsername(username);

        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Compare the password with the hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Generate a token upon successful login
        const payload = {
            id: user.id,
            username: user.username
        }
        const token = generateToken(payload);

        // Set the token as an HttpOnly cookie
        res.cookie('auth_token', token, {
            httpOnly: false,
            secure: false,
            sameSite: 'Strict',
        });

        res.status(200).json({ message: 'Logged in successfully', user, token });
    } catch (err) {
        console.error('Error during login:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const logoutUser = (req, res) => {

    res.clearCookie('auth_token', {
        httpOnly: false,
        secure: false, // Don't use 'secure' in development (only for HTTPS)
        sameSite: 'Strict',
    });

    res.status(200).json({ message: 'Logged out successfully' });
};

module.exports = {
    postUser,
    getUser,
    loginUser,
    logoutUser
};
