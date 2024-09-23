// menuController.js
const menuModel = require('../model/menuModel'); // Import the menu model

// POST API to create a menu item
const postMenuItem = async (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        const response = await menuModel.createMenuItemModel(data);
        console.log('Data saved');
        res.status(200).json(response);
    } catch (err) {
        console.error('Error saving menu item:', err.message);
        res.status(500).json({ error: 'Internal Server Error', details: err.message  });
    }
};

// GET API to retrieve all menu items
const getAllMenuItems = async (req, res) => {
    try {
        const menuItems = await menuModel.getAllMenuItemsModel();
        res.status(200).json(menuItems);
    } catch (err) {
        console.error('Error fetching menu items:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// GET API to retrieve menu items by taste
const getMenuItemsByTaste = async (req, res) => {
    try {
        const taste = req.params.taste;
        const validTastes = ['Sweet', 'Spicy', 'Sour'];

        // Validate taste parameter
        if (!validTastes.includes(taste)) {
            return res.status(400).json({ error: 'Invalid taste parameter' });
        }

        const menuItems = await menuModel.getMenuItemsByTasteModel(taste);
        res.status(200).json(menuItems);
    } catch (error) {
        console.error('Error fetching menu items by taste:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// PUT API to update menu items by id
const updateDataById = async (req, res) => {
    try {
        const menuId = req.params.id;
        const updatedMenuData = req.body;

        const response = await menuModel.updateMenuItemByIdModel(menuId, updatedMenuData);
        res.json(response);
    } catch (error) {
        console.error('Error updating menu:', error);
        if (error.message === 'Menu not found') {
            return res.status(404).json({ error: 'Menu not found' });
        }
        res.status(500).json({ error: 'Internal server error' });
    }
};

// DELETE API to delete menu items by id
const deleteDataById = async (req, res) => {
    console.log('Received DELETE request for:', req.params.id);
    try {
        const menuId = req.params.id;
        const response = await menuModel.deleteMenuItemByIdModel(menuId);
        res.json(response);
    } catch (error) {
        console.error('Error deleting menu:', error);
        if (error.message === 'Menu not found') {
            return res.status(404).json({ error: 'Menu not found' });
        }
        res.status(500).json({ error: 'Internal server error', details: error.message });
    }
};

module.exports = {
    postMenuItem,
    getAllMenuItems,
    getMenuItemsByTaste,
    updateDataById,
    deleteDataById
};
