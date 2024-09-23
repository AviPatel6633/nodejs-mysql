const express = require('express');
const router = express.Router();

const menuControler =  require('../controller/menu');
const userControler =  require('../controller/user');

router.get('/', (req, res) => {
    res.json({ message: 'Login successful', user: req.user });
});

// menu Routes
router.post('/menu', menuControler.postMenuItem);
router.get('/menu', menuControler.getAllMenuItems);
router.get('/menu/:taste', menuControler.getMenuItemsByTaste);
router.put('/menu/:id', menuControler.updateDataById); 
router.delete('/menu/:id', menuControler.deleteDataById);

// user Routes
router.post('/user', userControler.postUser);
router.get('/user', userControler.getUser);

module.exports = router;