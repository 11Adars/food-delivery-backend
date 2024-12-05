const menu = require('../models/menu');

const addMenuItem = (req, res) => {
    const { name, price, category } = req.body;
    if (!name || !price || !category) {
        return res.status(400).json({ status: 'error', error: 'Invalid data' });
    }
    menu.push({ id: menu.length + 1, name, price, category });
    res.json({ status: 'success', data: menu });
};

const getMenu = (req, res) => {
    res.json({ status: 'success', data: menu });
};

module.exports = { addMenuItem, getMenu };
