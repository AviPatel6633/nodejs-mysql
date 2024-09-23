const express = require('express');
const router = express.Router();

const menuControler =  require('../controller/menu');
const userControler =  require('../controller/user');

router.get('/', (req, res) => {
    res.send( 'Hello User, Welcome to Nodejs!');
});

// menu Routes
router.post('/menu', menuControler.postMenuItem);
router.get('/menu', menuControler.getAllMenuItems);
router.get('/menu/?taste=:taste', menuControler.getMenuItemsByTaste);
router.put('/menu/?id=:id', menuControler.updateDataById); 
router.delete('/menu/?id=:id', menuControler.deleteDataById);

// user Routes
router.post('/user', userControler.postUser);
router.get('/user', userControler.getUser);

module.exports = router;